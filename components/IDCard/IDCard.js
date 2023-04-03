/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import { router } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import EnrollmentCard from './EnrollmentCard'
import AccessCard from './AccessCard'
import FinancialCard from './FinancialCard'
import ResourcesCard from './ResourcesCard'
import Tooltip from '@components/Tooltip'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function IDCard({ 
  //Props
  text, link, cardID, 
  color, animation, animationDelay, 
  tooltipText, tooltipPlacement
}) {

  //console.log(author);

  return (
    <div 
      id={cardID} 
      className={'draggable ' + componentStyles.IDCard} 
      data-draggable
      data-link={link}
      data-animation={animation}
      data-animation-delay={animationDelay}
    >
      {tooltipText &&
        <Tooltip
          placement={tooltipPlacement}
          text={tooltipText}
        />
      }
      <div className={componentStyles.inner+ " inner"}>
          {cardID == "enrollment" &&
            <EnrollmentCard/>
          }
          {cardID == "access" &&
            <AccessCard/>
          }
          {cardID == "financial" &&
            <FinancialCard/>
          }
          {cardID == "resources" &&
            <ResourcesCard/>
          }

        </div>
    </div>
  )
}
