/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import { router } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import $ from 'jquery'
import Layout, { siteData } from '@components/layout'

import DynamicHeader from '@components/DynamicHeader'
import DynamicFooter from '@components/DynamicFooter'
import ComputerFrame from '@components/SVGComponents/ComputerFrame'
import TransitionScreen from '@components/SVGComponents/TransitionScreen'
import BlockQuote from '@components/ContentComponents/BlockQuote'
import PdfThumbnail from '@components/ContentComponents/PdfThumbnail'
import VideoThumbnail from '@components/ContentComponents/VideoThumbnail'
import QRCodePreset from "@components/ContentComponents/QRCodePreset";

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'
import pageStyles from '@styles/pages.module.scss'

let title = "Video Resources";
let footerText = "";

export default function Post({ postData }) {

  useEffect(() => {

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
              } else if(thread == "transition-screen"){
                LayoutOuter.setAttribute("data-action-state-transition-screen", stateValue);
              } else{
                LayoutOuter.setAttribute("data-action-state", stateValue);
              }
            }, delay);
          }

    function transtionScreenAnimationChain(){
       
         console.log("page lvl 3 detected");
          updateActionState('initial', 0, 'transition-screen');
          updateActionState('zoom', 2000, 'transition-screen');
          updateActionState('fade', 3500, 'transition-screen');
          updateActionState('end', 5000, 'transition-screen');
       
    }

    transtionScreenAnimationChain();
  });
  
  return (
    <Layout resources pageActionState="lvl-3" backButtonUrl="/resources">
      
      <Head>
        <title>{title} | {siteData.siteTitleBase}</title>
      </Head>
      <div className={pageStyles.pageLayout}>
        {/*Header*/}
        <DynamicHeader
          heading={[ "Video Resources"]}
        />

        {/*Content*/}
        <div className={pageStyles.pageLevel3} data-bg-color="mint">        
          <TransitionScreen screen="10"/>     
          <section className={pageStyles.mainSection}>
            <ComputerFrame frame="1">
              {/*Inner Page Content*/}

              <div className={pageStyles.twoColumn}>
                {/*LEFT CELL*/}
                <div className={pageStyles.cell}>

                  <p>
                    Our video library contains useful information that may help answer common questions related to accessing a patient’s prescribed BMS medication.
                  </p>
                  {/*<p>
                    Our resources help provide a better understanding of the health insurance landscape. They are located on the Forms & Resources page of the BMS Access Support website.
                  </p>
*/}                  <QRCodePreset 
                    /*link="https://bms.claravine.com/global/3f40ee3d-9e55-426d-af2f-0fc5f6aef960"*/
                    link="https://www.bmsaccesssupport.com/forms-resources?tabKey=video-resources1"
                    toolTipText={["Scan to view our video resources, which are located on the Forms & Resources page of the BMS Access Support",<sup>&reg;</sup>, " website."]}
                    toolTipPlacement="right"
                  />
                  
                </div>               

                {/*RIGHT CELL*/}
                <div className={pageStyles.cell} data-centered>
                  <VideoThumbnail
                    thumbnail="/images/thumbnails-2024/video-1.png"
                    name="Enrollment Form Tutorial" 
                    url="https://players.brightcove.net/1892432924001/default_default/index.html?videoId=5729106370001"
                  />
                  <br/><br/>
                  <VideoThumbnail
                    thumbnail="/images/thumbnails-2024/video-2.png"
                    name="What is an Explanation of Benefits (EOB)? " 
                    url="https://players.brightcove.net/1892432924001/default_default/index.html?videoId=5729102364001"
                  />
                  {/*<br/><br/>
                  <VideoThumbnail
                    thumbnail="/images/thumbnails-2024/video-3.png"
                    name="What is Health Insurance? " 
                    url="https://players.brightcove.net/1892432924001/default_default/index.html?videoId=5729102364001"
                  />
                  <br/><br/>
                  <VideoThumbnail
                    thumbnail="/images/thumbnails-2024/video-4.png"
                    name="Get to Know BMS Access Support" 
                    url="https://players.brightcove.net/1892432924001/default_default/index.html?videoId=5729102364001"
                  />*/}
                </div>

              </div>
            </ComputerFrame>            
          </section>
        </div>        

        {/*Footer*/}
        <DynamicFooter
          dynamicText={footerText}
        />
      </div>
      
      
    </Layout>
  )
}


