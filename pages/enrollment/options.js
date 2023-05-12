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

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'
import pageStyles from '@styles/pages.module.scss'

let title = "Options To Enroll";
let footerText = "";

export default function Post({ postData }) {
  return (
    <Layout enrollment pageActionState="lvl-3" backButtonUrl="/enrollment">
      
      <Head>
        <title>{title} | {siteData.siteTitleBase}</title>
      </Head>
      <div className={pageStyles.pageLayout} data-bg-color="cream">
        {/*Header*/}
        <DynamicHeader
          heading={["Options to Enroll in BMS ", <strong>Access Support</strong>]}
        />

        {/*Content*/}
        <div className={pageStyles.pageLevel3}>     
          <TransitionScreen screen="1"/>     
          <section className={pageStyles.mainSection}>



            <ComputerFrame frame="1">
              {/*Inner Page Content*/}

              <div className={pageStyles.twoColumn}>
                {/*LEFT CELL*/}
                <div className={pageStyles.cell}>
                  
                  <BlockQuote icon="/images/icons/contentPrinterIcon.svg">
                    <h2>Option 1: Enroll via Fax</h2>
                    <p>Obtain enrollment forms at BMSAccessSupport.com, under the Enrollment tab. <a href="/enrollment/enrollment-form">Tap for information on how to complete the enrollment form</a>.</p>
                  </BlockQuote>

                  <BlockQuote icon="/images/icons/contentComputerScreen.svg">
                    <h2>Option 2: Enroll via the Provider Portal</h2>
                    <p><a href="MyBMSCases.com" target="_blank">Visit MyBMSCases.com</a> to submit completed forms with physician and patient signatures through the provider portal.</p>
                  </BlockQuote>

                  <p>Once the enrollment form has been submitted and a Benefits Review has been conducted, you will receive your patient’s summary of healthcare benefits.</p>

                  <p>Please Note: While enrollment in the BMS Access Support program is required to receive certain support offerings, such as Benefits Reviews and appeals assistance, patients can also access select support offerings through the online resources found at BMSAccessSupport.com.</p>
                </div>               

                {/*RIGHT CELL*/}
                <div className={pageStyles.cell} data-centered>
                  <PdfThumbnail
                    name="Enrollment Form"
                    url="/pdf/Oncology_Enrollment_Form_EN.pdf"
                    thumbnail="/images/thumbnails/Oncology_Enrollment_Form_EN.jpg"
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


