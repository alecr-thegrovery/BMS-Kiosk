/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import Date from '@components/date'
import SocialIcons from '@components/SocialIcons'
import Button1 from '@components/Button1'
import ResourcesCard from '@components/ResourcesCard'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function ResourcesContent({ 
  //Props
  children, id, image, title, 
  previewText, author, date
}) {

  //console.log(author);

  return (
    <div className={componentStyles.ResourcesContent}>
      <div className={componentStyles.innerGrid}>
        {/*{children}*/}
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
      </div>
      
    </div>
  )
}
