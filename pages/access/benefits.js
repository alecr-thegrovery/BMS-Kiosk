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
let footerText = "";

export default function Post({ postData }) {
  return (
    <Layout access>
      
      <Head>
        <title>{title} | {siteData.siteTitleBase}</title>
      </Head>
      <div className={pageStyles.pageLayout}>
        {/*Header*/}
        <DynamicHeader
          heading={["What to Expect from a Benefits Review"]}
        />

        {/*Content*/}
        <div className={pageStyles.pageLevel3}>       
        <TransitionScreen screen="4"/>   
          <section className={pageStyles.mainSection}>
            <ComputerFrame frame="4">
              {/*Inner Page Content*/}

              <div className={pageStyles.oneColumn}>                  
                  <BlockQuote icon="/images/icons/contentFormIcon.svg">
                      <h2>Initiate a Benefits Review (BR) by accurately completing and submitting enrollment and PAA forms. </h2>
                      <ul>  
                        <li>Your BMS Access Support Patient Access Specialist will review the patient’s insurance coverage for the prescribed BMS medication</li>
                        <li>You will receive a summary of benefits within approximately 24 hours</li>
                      </ul> 
                  </BlockQuote>

                  <h2>The Summary of Benefits will determine:</h2>
                  <ul>  
                    <li>If a medication is covered by a patient’s insurance plan</li>
                    <li>If a prior authorization is required</li>
                    <li>The estimated patient out-of-pocket costs, the out-of-pocket maximum, and if there is a deductible</li>
                    <li>If there is a preferred specialty pharmacy, optional specialty pharmacy, or open specialty pharmacy network (applies to orals or HCP-administered medications when buy & bill is not an option)</li>
                  </ul> 

                  <img src="/images/content/EnrollmentFormContentImage.png" alt="" />
              </div>
              <br/>
              <div className={pageStyles.twoColumn}>
                {/*LEFT CELL*/}
                <div className={pageStyles.cell}>
                    <h2>For HCP-Administered products, the following additional information will be provided:</h2>
                    <ul>
                      <li>The office and administration co-pay/co-insurance amounts</li>
                      <li>If the administering physician is in network</li>
                      <li>The preferred/required procurement process (e.g., buy &amp; bill or specialty pharmacy)</li>
                      <li>Timely filing guidelines for claims/appeals </li>
                    </ul>        
                    <BlockQuote icon="/images/icons/contentCalendarIcon.svg">
                      <p><strong>For patients who are enrolled in BMS Access Support</strong>, reverification of benefits (eBRV) is available for each new calendar year upon HCP request to confirm a patient’s continued access to therapy and minimize disruption in therapy.</p>
                    </BlockQuote>          
                </div>               

                {/*RIGHT CELL*/}
                <div className={pageStyles.cell} data-centered>
                  <PdfThumbnail 
                    name="Sample forms"
                    url=""
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


