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
    $(document).ready(function() {
      let ModalWrapper = $("#ModalWrapper");
      $("[data-modal-open='resources']").click(function(e){
        e.preventDefault();
        ModalWrapper.attr("data-modal-status", "active");
        ModalWrapper.attr("data-modal-show", "ResourcesFormModal");

        //pre-select resource option
        var resourceID = $(this).attr('data-resource-value');
        console.log(resourceID);
        //$("#ResourcesForm-options option[value='"+resourceID+"']").attr('selected', 'true');
        document.getElementById('ResourcesForm-options').value = resourceID;
      });

      $("[data-modal-close]").click(function(e){
        e.preventDefault();
        //$("#SupportModal").attr("data-modal-status", "inactive");
        ModalWrapper.attr("data-modal-status", "inactive");
      });

    });
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
                  name="eSign"
                  description=""
                  link="https://www.mybmscases.com/bmsProviderLightningPortal/s/esign"
                />
                <ResourcesCard
                  name="BMS Provider Portal"
                  description=""
                  link="https://www.mybmscases.com/bmsProviderLightningPortal/s/login/?ec=302&startURL=%2FbmsProviderLightningPortal%2Fs%2F"
                />
                <ResourcesCard
                  name="BMS Access Map"
                  description=""
                  link="https://www.bmsaccessmap.com/"
                />
                <ResourcesCard
                  name="Access Support Forms"
                  description=""
                  link="https://www.bmsaccesssupport.com/forms-resources"
                />
                <ResourcesCard
                  name="Codes Coverage"
                  description=""
                  link="https://www.bmsaccesssupport.com/codes-coverage"
                />
                <ResourcesCard
                  name="Charitable Foundations"
                  description=""
                  link="https://www.bmsaccesssupport.com/charitable-foundations"
                />
                <ResourcesCard
                  name="Forms Resources"
                  description=""
                  link="https://www.bmsaccesssupport.com/forms-resources"
                />
                <ResourcesCard
                  name="Video Resources"
                  description=""
                  link="https://www.bmsaccesssupport.com/forms-resources?tabKey=video-resources1"
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
