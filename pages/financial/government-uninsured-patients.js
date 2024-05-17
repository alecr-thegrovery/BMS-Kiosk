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
import QRCodePreset from "@components/ContentComponents/QRCodePreset";

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'
import pageStyles from '@styles/pages.module.scss'

let title = "NEW AssistPoint Integration";
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
    <Layout financial pageActionState="lvl-3" backButtonUrl="/financial">
      
      <Head>
        <title>{title} | {siteData.siteTitleBase}</title>
      </Head>
      <div className={pageStyles.pageLayout}>
        {/*Header*/}
        <DynamicHeader
          heading={["Government & Uninsured Patients"]}
          subhead="For patients insured through a government program or who do not have insurance, BMS Access Support® can provide information about independent charitable foundations."
        />

        {/*Content*/}
        <div className={pageStyles.pageLevel3} data-bg-color="lightBlue">       
          <TransitionScreen screen="8"/>      
          <section className={pageStyles.mainSection}>
            <ComputerFrame frame="1">
              {/*Inner Page Content*/}

              <div className={pageStyles.twoColumn}>
                {/*LEFT CELL*/}
                <div className={pageStyles.cell}>

                  <p>
                    Patients may be eligible for financial assistance from charitable foundations if they do not have prescription drug insurance, have insurance through a government healthcare program, or have a commercial plan but still need help. BMS Access Support may be able to provide information about independent charitable foundations that may be able to help.
                  </p>
                  <p>
                    Scan the QR code below, or call 1-800-861-0048 for details. 
                  </p>
                  <QRCodePreset 
                    /*link="https://bms.claravine.com/global/b22a6485-3953-4711-97fa-c35ef2d69146"*/
                    link="https://www.bmsaccesssupport.com/charitable-foundations?cid=qr_2690745"
                    toolTipText="Visit the charitable foundations page at BMSAccessSupport.com"
                    toolTipPlacement="right"
                  />
                  <br/>
                  <p className={pageStyles.italics}>
                    It is important to note that these charitable foundations are independent from Bristol-Myers Squibb Company. Each foundation has its own eligibility criteria and evaluation process. Bristol Myers Squibb cannot guarantee that a patient will receive assistance.
                  </p>
                  
                </div>               

                {/*RIGHT CELL*/}
                <div className={pageStyles.cell} data-centered>
                  <img className={pageStyles.simpleShadow} src="/images/thumbnails-2024/government-1.png" alt="" />
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


