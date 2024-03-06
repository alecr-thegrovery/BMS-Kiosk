/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import { router } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import $ from 'jquery'
import interact from 'interactjs'
import Layout, { siteData } from '@components/layout'
import DynamicHeader from '@components/DynamicHeader'
import DynamicFooter from '@components/DynamicFooter'
import DragDrop from '@components/DragDrop'
import IDCard from '@components/IDCard'
import HomeBG from '@components/SVGComponents/HomeBG'

/*New Resources components*/
import ResourcesContent from '@components/ResourcesContent'
import ResourcesCard from '@components/ResourcesCard'


/*===== Styles =====*/
import pageStyles from '@styles/pages.module.scss'

/*===== Posts Data =====*/
import { getSortedPostsData } from '@lib/posts'
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

/*===== Page Content =====*/
export default function Home({ allPostsData }) {
  
  //console.log(author);
   useEffect(() => {
   /* window.onload = function() {
      init();
    }*/
   });

  return (
    <Layout home pageActionState="lvl-3" >
      
      <Head>
        <title>Home | {siteData.siteTitleBase}</title>
      </Head>
      <div 
        className={pageStyles.pageLayout} 
      >
        
        <DynamicHeader
          
          heading={["Bristol Myers Squibb ", <strong>Resources</strong>]}
          subhead="This page is a collection of all resource links used throughout the experience."
        />

        <div className={pageStyles.pageLevel1}>

          <div className={pageStyles.background}>
            {/*<HomeBG/>*/}
          </div>

          <section className={pageStyles.mainSection}>
            <div>
              <ResourcesContent>
                <ResourcesCard
                  name="Forms Resources"
                  description=""
                  link="https://www.bmsaccesssupport.bmscustomerconnect.com/forms-resources?utm_source=bms_congress_access_app&utm_medium=qr_code_scan&utm_campaign=congress_access_event"
                />
                <ResourcesCard
                  name="Forms Resources"
                  description=""
                  link="https://www.bmsaccesssupport.bmscustomerconnect.com/forms-resources?utm_source=bms_congress_access_app&utm_medium=qr_code_scan&utm_campaign=congress_access_event"
                />
                <ResourcesCard
                  name="Forms Resources"
                  description=""
                  link="https://www.bmsaccesssupport.bmscustomerconnect.com/forms-resources?utm_source=bms_congress_access_app&utm_medium=qr_code_scan&utm_campaign=congress_access_event"
                />
                <ResourcesCard
                  name="Forms Resources"
                  description=""
                  link="https://www.bmsaccesssupport.bmscustomerconnect.com/forms-resources?utm_source=bms_congress_access_app&utm_medium=qr_code_scan&utm_campaign=congress_access_event"
                />
                <ResourcesCard
                  name="Forms Resources"
                  description=""
                  link="https://www.bmsaccesssupport.bmscustomerconnect.com/forms-resources?utm_source=bms_congress_access_app&utm_medium=qr_code_scan&utm_campaign=congress_access_event"
                />
                <ResourcesCard
                  name="Forms Resources"
                  description=""
                  link="https://www.bmsaccesssupport.bmscustomerconnect.com/forms-resources?utm_source=bms_congress_access_app&utm_medium=qr_code_scan&utm_campaign=congress_access_event"
                />
              </ResourcesContent>
            </div>
          </section>
          
        </div>

        <DynamicFooter
          dynamicText=""
        />
      </div>
      
      
    </Layout>
  )
}
