/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Layout, { siteData } from '@components/layout'
import Container from '@components/Container'
import HeroSection from '@components/HeroSection'
import SliderFX from '@components/SliderFX'
import PopupCard from '@components/PopupCard'
import $ from 'jquery'

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'
import pageStyles from '@styles/pages.module.scss'

/*===== JSON Page Content =====*/
import pageData from "@data/pageAbout.json"

/*===== Page Content =====*/
export default function Slider({}) {

  useEffect(() => {
    $(document).ready(function() {
      //vars
      let popUpCard = "";

      //Asset modal functions
        $(".swiper-slide [data-popupcard]").click(function(e){
          console.log("[data-popupcard] click");
          e.preventDefault();
          //OpenCard();
          popUpCard = $(this).attr("data-popupcard");
          console.log(popUpCard);
          $(".popUpCard[data-popupcard="+popUpCard+"]").attr("data-active", "true");
        });

        $("[data-close]").click(function(e){
          e.preventDefault();
          //CloseCard();
          $(".popUpCard[data-popupcard]").attr("data-active", "false");
        });

      /*function OpenCard(){
        console.log("OpenCard()");
        popUpCard = $(this).attr("data-popupcard");
        console.log(popUpCard);
        $(".popUpCard[data-popupcard="+popUpCard+"]").attr("data-active", "true");
      }*/

      /*function CloseCard(){
        $(".popUpCard[data-popupcard]").attr("data-active", "false");
      }*/

    });
  });

  return (
    <Layout enrollment>
      
      <Head>
        <title>Enrollment | {siteData.siteTitleBase}</title>
      </Head>

      <div className={pageStyles.pageLevel2}>
         <section className={pageStyles.headingSection}>
          <Container width="contentWidthXl">
            <h1>Enrollment</h1>
          </Container>
        </section>

        <section className={pageStyles.mainSection}> 
          <Container width="contentWidthXl"> 
            <SliderFX enrollment/>
            <PopupCard/>
          </Container>
        </section>
      </div>

    </Layout>
  )
}