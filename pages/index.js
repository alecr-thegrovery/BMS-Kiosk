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
    <Layout home pageActionState="lvl-1" >
      
      <Head>
        <title>Home | {siteData.siteTitleBase}</title>
      </Head>
      <div 
        className={pageStyles.pageLayout} 
      >
        
        <DynamicHeader
          
          heading={["Bristol Myers Squibb ", <strong>Access Support</strong>]}
          extrasubhead={[<strong>Support with purpose.</strong>, " Patients are the reason behind what we do."]}
          subhead="Bristol Myers Squibb is committed to helping appropriate patients get access to our medications by providing access and reimbursement support services."
        />

        <div className={pageStyles.pageLevel1}>

          <div className={pageStyles.background}>
            <HomeBG/>
          </div>

          <section className={pageStyles.mainSection}>
            <DragDrop/>
          </section>
          
        </div>

        <DynamicFooter
          dynamicText=""
        />
      </div>
      
      
    </Layout>
  )
}
