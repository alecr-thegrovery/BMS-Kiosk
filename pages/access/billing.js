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

let title = "Using the My BMS Cases Provider Portal";
//{["Using the My BMS Cases ", <strong>Provider Portal</strong>]}
let footerText = "Healthcare providers should code healthcare claims based upon the service that is rendered, the patient’s medical record, the coding requirements of each health insurer, and the best coding practices. The accurate completion of reimbursement- or coverage-related documentation is the responsibility of the healthcare provider and patient. Bristol Myers Squibb and its agents make no guarantee regarding reimbursement for any service or item.";

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
    <Layout 
      access 
      pageActionState="lvl-3"
      backButtonUrl="/access"
    >
      
      <Head>
        <title>{title} | {siteData.siteTitleBase}</title>
      </Head>
      <div className={pageStyles.pageLayout}>
        {/*Header*/}
        <DynamicHeader
          heading={["Billing & Coding Assistance"]}
        />

        {/*Content*/}
        <div className={pageStyles.pageLevel3} data-bg-color="lightBlue">          
          <TransitionScreen screen="6"/>   
          <section className={pageStyles.mainSection}>
            <ComputerFrame frame="4">
              {/*Inner Page Content*/}

              <div className={pageStyles.twoColumn}>
                {/*LEFT CELL*/}
                <div className={pageStyles.cell}>

                  <p>We may be able to provide product-specific billing and diagnosis codes, reimbursement guides, and product distribution information</p>
                  <BlockQuote icon="/images/icons/contentClipboardIcon.svg">
                    <p><strong className={pageStyles.darkBlue}>Billing &amp; Coding Guides</strong> provide an overview of relevant product and diagnosis codes, dosing and administration, and general reimbursement information.</p>
                  </BlockQuote>

                  <BlockQuote icon="/images/icons/contentClipboardIcon.svg">
                    <p><strong className={pageStyles.darkBlue}>Online Code Search Tool</strong> allows providers to type in a keyword to find a specific HCPCS, CPT, NDC, 5010, or ICD-10 code.</p>
                  </BlockQuote>

                  <BlockQuote icon="/images/icons/contentListIcon.svg">
                    <p><strong className={pageStyles.darkBlue}>Sample Claim Forms</strong> call out where to enter important information on health insurance claim forms (e.g., drug name, dosing information, HCPCS code, etc.).</p>
                  </BlockQuote>
                  <br/>
                  
                  
                </div>               

                {/*RIGHT CELL*/}
                <div className={pageStyles.cell} data-centered>
                  <img className={pageStyles.simpleShadow} src="/images/thumbnails-2024/billing-1.png" alt="" />
                  <QRCodePreset 
                    link="https://bms.claravine.com/global/447de38a-756b-49f1-b8d9-d01dedb5968d"
                    toolTipText="Scan to access the online coding tool and reimbursement guides for relevant products"
                    toolTipPlacement="right"
                  />
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


