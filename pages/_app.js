import React, { useState, useEffect } from 'react';
import $ from 'jquery'
import { router } from 'next/router'
import 'normalize.css';

//Drag n Drop 
import interact from 'interactjs'

//Device Detection
import {isTablet, isSafari, isIPad13} from 'react-device-detect';

//Custom CSS/JS
import '@styles/main.scss';
//import '@scripts/script.js';

export default function App({ Component, pageProps }) {

  useEffect(() => {

    /* ============================= */
    /* ===== Global Action State ===== */
    /* ============================= */
      //define function
      function updateActionState(stateValue, delay, thread) {
        setTimeout(function() {
          const LayoutOuter = document.querySelector("#LayoutOuter");
          if(thread == "load"){
            LayoutOuter.setAttribute("data-action-state-load", stateValue);
          } else if(thread == "transition"){
            LayoutOuter.setAttribute("data-action-state-transition", stateValue);
          } else if(thread == "tooltips"){
            LayoutOuter.setAttribute("data-action-state-tooltips", stateValue);
          } else if(thread == "cards"){
            LayoutOuter.setAttribute("data-action-state-cards", stateValue);
          }else if(thread == "cards-show"){
            LayoutOuter.setAttribute("data-action-state-cards-show", stateValue);
          } else if(thread == "page"){
            LayoutOuter.setAttribute("data-action-state-page", stateValue);
          } else if(thread == "home-bg"){
            LayoutOuter.setAttribute("data-action-state-home-bg", stateValue);
          } else{
            LayoutOuter.setAttribute("data-action-state", stateValue);
          }
        }, delay);
      }

      /* ===== General  ===== */
        updateActionState('initial', 0);       

      /* ===== Cards ===== */
        updateActionState('initial', 0, 'cards-show');
        updateActionState('animate-start', 1500, 'cards-show');
        updateActionState('visible', 1550, 'cards-show');
        updateActionState('post-visible', 2500, 'cards-show');

      /* ===== Tooltips ===== */
        updateActionState('initial', 0, 'tooltips');
        updateActionState('show-after-load', 5000, 'tooltips');

     /* ===== Load Sequence ===== */
        updateActionState('initial', 0, 'load');
        updateActionState('post-initial', 250), 'load';
        updateActionState('load-finished', 1000, 'load');
        updateActionState('just-after-load', 2000, 'load');
        updateActionState('just-after-load-2', 3500, 'load');
        updateActionState('load-sequence-complete', 5000, 'load');

      

    /* ========================== */
    /* ===== Page Transition ===== */
    /* ========================== */
        updateActionState('visible', 1000, 'transition');
        function pageTransition(url, delay){
          console.log("page-transition: " + url + " | "+ delay);
          router.prefetch(url); //prefetch next page
          updateActionState('hidden', delay, 'transition');
          setTimeout(function() {
            router.push(url);
          }, delay);
          updateActionState('', 0, 'load');
        } //END pageTransition function

    /* ================================= */
    /* ===== Page Transition Clicks ===== */
    /* ================================= */
      /* ===== Link Clicks ===== */
        let url = "";
        let delay = 1000;

        const pageTransitionLinks = document.querySelectorAll('[data-page-transition]');

        pageTransitionLinks.forEach(element => {
          element.addEventListener('click', () => {
            console.log("data-page-transition click");
            url = element.getAttribute("data-page-transition");
            delay = element.getAttribute("data-delay");
            pageTransition(url, delay);
          });
        });
          
      /* ===== Back Button Click ===== */
        const backButton = document.querySelectorAll('[data-page-back]');
        backButton.forEach(element => {
          element.addEventListener('click', () => {
            console.log("data-page-back click");
            updateActionState('hidden', 0, 'transition');
            window.history.back();
          });
        });

    /* =========================== */
    /* ===== Drag & Drop code =====  */
    /* =========================== */
      //Destroy drag & drop instance so dragging is not compounded
      interact('.draggable').unset();

      function DragDropInit() {
          var startPos = null;
          interact
          interact('.draggable').draggable({
            inertia: true,
            snap: {
              targets: [startPos],
              range: Infinity,
              relativePoints: [ { x: 0.5, y: 0.5 } ],
              endOnly: true
            },
            onstart: function (event) {
                var rect = interact.getElementRect(event.target);

                // record center point when starting the very first drag
                startPos = {
                  x: rect.left + rect.width  / 2,
                  y: rect.top  + rect.height / 2
                }
                
                var target = event.target,
                  // keep the dragged position in the data-x/data-y attributes
                  x = (parseFloat(target.getAttribute('data-origin-x')) || 0) + event.dx,
                  y = (parseFloat(target.getAttribute('data-origin-y')) || 0) + event.dy;

              // translate the element
              target.style.webkitTransform =
              target.style.transform =
                'translate(' + x + 'px, ' + y + 'px)';

              // update the posiion attributes
              target.setAttribute('data-x', x);
              target.setAttribute('data-y', y);

              //update global event state
              updateActionState('card-interaction', 0, 'tooltips');
              updateActionState('card-interaction', 0, 'cards');

              event.interactable.draggable({
                snap: {
                  targets: [startPos]
                }
              });
            },
            // call this function on every dragmove event
            onmove: function (event) {
              var target = event.target,
                  // keep the dragged position in the data-x/data-y attributes
                  x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                  y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

              // translate the element
              target.style.webkitTransform =
              target.style.transform =
                'translate(' + x + 'px, ' + y + 'px)';

              // update the posiion attributes
              target.setAttribute('data-x', x);
              target.setAttribute('data-y', y);
              target.classList.add('getting--dragged');
            },

            onend: function (event) {
              event.target.classList.remove('getting--dragged');
              updateActionState('card-post-interaction', 0, 'tooltips');
              updateActionState('card-post-interaction', 0, 'cards');
            }
          });

          interact('.droppable:not(.caught--it)').dropzone({
            accept: '.draggable',
            overlap: .15,

            ondropactivate: function (event) {
              console.log("ondropactivate");
              event.target.classList.add('can--drop');
            },

            ondragenter: function (event) {
              console.log("onDragEnter");
              var draggableElement = event.relatedTarget,
                  dropzoneElement  = event.target,
                  dropRect         = interact.getElementRect(dropzoneElement),
                  dropCenter       = {
                    x: dropRect.left + dropRect.width  / 2,
                    y: dropRect.top  + dropRect.height / 2
                  };

              event.draggable.draggable({
                snap: {
                  targets: [dropCenter]
                }
              });

              // feedback the possibility of a drop
              dropzoneElement.classList.add('can--catch');
              draggableElement.classList.add('drop--me');
            },

            ondragleave: function (event) {
              // remove the drop feedback style
              console.log("onDragLeave");
              console.log(startPos);
              event.target.classList.remove('can--catch', 'caught--it');
              event.relatedTarget.classList.remove('drop--me');
              event.draggable.draggable({
                 snap: {
                   targets: [startPos],
                   range: Infinity,
                   relativePoints: [ { x: 0.5, y: 0.5 } ],
                   endOnly: true
                 }
               });
            },

            ondrop: function (event) {
              console.log("Index of dropped node: " + (event.target));
              console.log("Index of dragged node: " + getNodeIndex(event.relatedTarget.parentNode));
              //event.relatedTarget.textContent = 'Dropped';
              console.log("Dropped!");
              console.log("related target: " + event.relatedTarget.parentNode);
              console.log(event.draggable);
              event.target.classList.add('caught--it');

              if($(".drop--me").attr("data-link")){
                console.log("get link home");
                var link = $(".drop--me").attr("data-link");
                updateActionState('transition-out-pre', 0, 'cards-show');
                updateActionState('transition-out', 250, 'cards-show');
              } else{
                console.log("get link inner");
                var link = $(".droppable.caught--it").attr("data-link");
              }

              console.log(link);
              if(link  == null){
               //do nothing
              } else if(link  == "/enrollment/"){
                console.log("enrollment card dropped");
                updateActionState('home-bg-init-enrollment', 0, 'home-bg');
                updateActionState('home-bg-zoom-enrollment', 1200, 'home-bg');
                updateActionState('home-bg-open-enrollment', 2000, 'home-bg');
                pageTransition(link, 2800);
              }else if(link  == "/access/"){
                console.log("access card dropped");
                updateActionState('home-bg-init-access', 0, 'home-bg');
                updateActionState('home-bg-zoom-access', 1200, 'home-bg');
                updateActionState('home-bg-open-access', 2000, 'home-bg');
                pageTransition(link, 2800);
              }else if(link  == "/financial/"){
                console.log("financial card dropped");
                updateActionState('home-bg-init-financial', 0, 'home-bg');
                updateActionState('home-bg-zoom-financial', 1200, 'home-bg');
                updateActionState('home-bg-open-financial', 2000, 'home-bg');
                pageTransition(link, 2800);
              }else if(link  == "/resources/"){
                console.log("resources card dropped");
                updateActionState('home-bg-init-resources', 0, 'home-bg');
                updateActionState('home-bg-zoom-resources', 1200, 'home-bg');
                updateActionState('home-bg-open-resources', 2000, 'home-bg');
                pageTransition(link, 2800);
              }else{
                //updateActionState('card-drop-success', 0);
                pageTransition(link, 500);
              }

            },

            ondropdeactivate: function (event) {
              // remove active dropzone feedback
              console.log("ondropdeactivate");
              event.target.classList.remove('can--drop');
              event.target.classList.remove('can--catch');
            }

          });
        }

        function getNodeIndex(node) {
          var index = 0;
          while ( (node = node.previousSibling) ) {
            if (node.nodeType != 3 || !/^\s*$/.test(node.data)) {
              index++;
            }
          }
          return index;
        }

      function eleHasClass(el, cls) {
        return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
      }

      DragDropInit();
    

    /* ==================================== */
    /* ===== Content Overflow Detection ===== */
    /* ==================================== */
      // Select all elements with the data-attribute "data-target"
      const elements = document.querySelectorAll('[data-overflow-detect]');

      // Loop through each element and check if it has overflow content
      elements.forEach(element => {
        console.log("overflow element present");
        // Check if the element's scrollHeight is greater than its clientHeight
        if (element.scrollHeight > element.clientHeight) {
          console.log("overflow detected");
          // If overflow content is detected, add a class to the element
          element.setAttribute('data-overflow-detect', 'overflow');
        }
      });

      /* ===== Hide When Scrolled To Bottom ===== */

        // loop through each element
        elements.forEach(element => {
          // add a scroll event listener to each element
          element.addEventListener('scroll', () => {
            // check if the element's content is scrolled to the bottom
            const atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
            // update the data-attribute value to true if scrolled to bottom, false otherwise
            
            if (atBottom) {
              console.log("overflow detected");
              // If overflow content is detected, add a class to the element
              element.setAttribute('data-overflow-detect', 'atBottom');
            }else{
              element.setAttribute('data-overflow-detect', 'overflow');
            }
          });
        });


    /* ================================= */
    /* ===== Browser/Device Detect  ===== */
    /* ================================= */
        function deviceDetect(){
          let element = document.querySelector("#LayoutOuter");
          if(isTablet){
            element.classList.add("detect--tablet");
          }
          if(isSafari){
            element.classList.add("detect--safari");
          }
          if(isIPad13){
            element.classList.add("detect--ipad");
          }
        }
        //run function
        deviceDetect();
        

  });

  return <Component {...pageProps} />
}
