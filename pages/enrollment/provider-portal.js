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
import PdfLink from '@components/ContentComponents/PdfLink'
import QRCodePreset from "@components/ContentComponents/QRCodePreset";

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'
import pageStyles from '@styles/pages.module.scss'

let title = "Using the My BMS Cases Provider Portal";
//{["Using the My BMS Cases ", <strong>Provider Portal</strong>]}
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
    <Layout enrollment pageActionState="lvl-3" backButtonUrl="/enrollment">
      
      <Head>
        <title>{title} | {siteData.siteTitleBase}</title>
      </Head>
      <div className={pageStyles.pageLayout}>
        {/*Header*/}
        <DynamicHeader
          heading={["Using the BMS ", <strong>Access Support<sup>&reg;</sup></strong>, " Provider Portals"]}
        />

        {/*Content*/}
        <div className={pageStyles.pageLevel3} data-bg-color="lightBlue">  
          <TransitionScreen screen="3"/>             
          <section className={pageStyles.mainSection}>
            <ComputerFrame frame="1">
              {/*Inner Page Content*/}

              <div className={pageStyles.twoColumn}>
                {/*LEFT CELL*/}
                <div className={pageStyles.cell}>
                  <h2>MyBMSCases Provider Portal </h2>
                  <BlockQuote icon="/images/icons/contentComputerScreen.svg">
                    <p>This secure provider portal offers convenient, on-demand access to patient reimbursement cases for select BMS medications.</p>
                  </BlockQuote>

                  <h3 className={pageStyles.bold}>The provider portal allows you to: </h3>
                  <ul>
                    <li>Access case status updates </li>
                    <li>Enroll in co-pay program and view details, including eligibility dates, annual benefit cap, and available balance</li>
                    <li>Submit and track reverification status </li>
                    <li>Use e-signature for simplified processing </li>
                    <li>Securely message your regional Patient Access Specialist</li>
                  </ul>
                  <br/>
                  <div className={pageStyles.centeredRow}>
                    <QRCodePreset 
                      link="https://www.mybmscases.com/bmsProviderLightningPortal/s/login/?ec=302&startURL=%2FbmsProviderLightningPortal%2Fs%2F%29%5D&utm_source=bms_congress_access_app&utm_medium=qr_code_scan&utm_campaign=congress_access_event"
                      toolTipText="Scan to visit Provider Portal"
                      toolTipPlacement="right"
                    />
                  </div>
                                    
                </div>               

                {/*RIGHT CELL*/}
                <div className={pageStyles.cell} >
                  <h2>BMS Access Support<sup>&reg;</sup> Co-Pay Portal </h2>
                  <BlockQuote icon="/images/icons/contentComputerScreen2.svg">
                    <p>This secure portal allows HCPs to manage their patients’ co-pay claims after the patient has been enrolled into the Co-Pay Assistance Program.</p>
                  </BlockQuote>

                  <h3 className={pageStyles.bold}>The co-pay portal allows you to:</h3>
                  <ul>
                    <li>Submit medical claims</li>
                    <li>Track claim status</li>
                    <li>Confirm payments for patients actively enrolled in the BMS Access Support Co-Pay Assistance Program. Please see full <PdfLink url="/pdf-2024/Orals-Terms-and-Conditions.pdf" name="Orals-Terms-and-Conditions.pdf">Terms and Conditions</PdfLink>, including complete eligibility requirements</li>
                  </ul>
                  <p>Please note that this portal does NOT support enrollment into co-pay programs.</p>
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


