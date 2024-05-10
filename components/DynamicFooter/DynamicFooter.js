import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { BsList } from "react-icons/bs";
//import BMSLogo from '@components/SVGComponents/BMSLogo'
import $ from 'jquery'

import componentStyles from './styles.module.scss'

import varStyles from '@styles/vars.module.scss'

const name = 'BMS CONGRESS ACCESS'

export default function DynamicFooter({ 
  children, dynamicText
}) {

  useEffect(() => {
    
  });

  return (
    <>

      {/* FOOTER */}
      <footer className={componentStyles.DynamicFooter}>
        <div className={componentStyles.inner}>

          {/*Dynamic Text Section*/}
          <div className={componentStyles.text}>
            {dynamicText ?
              <p className={componentStyles.dynamicText}>{dynamicText}</p>
            :
              <p className={componentStyles.dynamicText}>
                The accurate completion of reimbursement or coverage-related documentation is the responsibility of the healthcare provider and patient. Bristol Myers Squibb and its agents make no guarantee regarding reimbursement for any service or item.
              </p>
            }
            <p>
              &copy;2024 Bristol-Myers Squibb Company. Access Support is a registered trademark of Bristol-Myers Squibb Company. Use of the information on this site is subject to the terms of our Legal Notice and Privacy Statement.  NO-US-2400153  04/24
              </p>
                        
          </div>
          
        </div>
        
      </footer>
      
      
    </>
  )
}
