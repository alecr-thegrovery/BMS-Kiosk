import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import { router } from 'next/router'
import styles from './layout.module.scss'
import Link from 'next/link'
import data from "@data/data.json"
import $ from 'jquery'

import Sidebar from '@components/Sidebar'
import Modal from '@components/Modal'
import BackToHome from '@components/BackToHome'
import SmallScreenWarning from '@components/SmallScreenWarning'
import FullScreenWidget from '@components/FullScreenWidget'
import IdleTimer from '@components/IdleTimer'

export const siteTitle = 'BMS Congress Access Support'
export const siteData = data

export default function Layout({ 
  //PROPS
  children, home, card,
  access, enrollment, financial, resources,
  pageActionState, cardTooltipText, backButtonUrl
}) {
  
  useEffect(() => {
    
  });

  return (
    <div 
      id="LayoutOuter" 
      className={styles.outer} 
      data-hidden="true" 
      data-action-state="initial"  
      data-action-state-load="initial"  
      data-action-state-transition="hidden"  
      data-action-state-tooltips="initial"
      data-action-state-cards="initial"
      data-action-state-cards-show="initial"
      data-action-state-cards-home-bg="initial"
      data-action-state-transition-screen="initial"
      data-action-state-page={pageActionState}
    >
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Bristol Myers Squibb Access Support - Learn more about how we can help you."
        />
        <meta property="og:image"
          content={`/images/BMSLogo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LJMM5M1WYV"></Script>
        <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LJMM5M1WYV');
        `}
        </Script>
      </Head>

      <SmallScreenWarning/>
      {/*<FullScreenWidget/>*/}
      {/*<SupportModal/>*/}
      <Modal/>
      <IdleTimer/>
      
      {/* MAIN SECTION */}
      <main className={styles.main}>
        
          {/* BREADCRUMBS */}
          {/*{!home && (
            <Container>
              <div className={styles.backToHome}>
                <Link href="/">
                  <a>← Back to home</a>
                </Link>
              </div>
            </Container>
          )}*/}
          
          <div id="mainContent" className={styles.mainContent}>
            {children}
          </div>

          <div id="rightSidebar" className={styles.rightSidebar}>
            <Sidebar 
              card={card}
              access={access}
              enrollment={enrollment}
              financial={financial}
              resources={resources}
              home={home}
              cardTooltipText={cardTooltipText}
              backButtonUrl={backButtonUrl}
            />
          </div>
  
      </main>

      {/*<section className={styles.footer}>
        <Footer/>
      </section>*/}
      
      
    </div>
  )
}
