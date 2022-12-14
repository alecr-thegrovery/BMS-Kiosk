/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import { router } from 'next/router'
import $ from 'jquery'
import Door from "./Door"
import Container from '@components/Container'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'
import utilStyles from '@styles/utils.module.css'

export default function ContentFinancial({ 
  //Props
  access, enrollment, financial, resources
}) {

  //console.log(author);
  useEffect(() => {
    
  });

  return (
    <>
      <div className={componentStyles.cell}>
        <Door
          title="Options to Enroll"
          link="/financial-2?slide=1"
        />
      </div>

      <div className={componentStyles.cell}>
        <Door
          title="How to Complete the Enrollment Form"
          link="/financial-2?slide=2"
        />
      </div>

      <div className={componentStyles.cell}>
        <Door
          title="Provider Portal (myBMScases.com)"
          link="/financial-2?slide=3"
        />
      </div>

      <div className={componentStyles.cell}>
        <Door
          title="Annexus / AssistPoint Enrollment"
          link="/financial-2?slide=4"
        />
      </div>

      <div className={componentStyles.cell}>
        <Door
          title="Options to Enroll"
          link="/financial-2?slide=5"
        />
      </div>
    </>
  )
}
