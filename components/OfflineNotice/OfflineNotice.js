/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import Date from '@components/date'
import SocialIcons from '@components/SocialIcons'
import Button1 from '@components/Button1'
import OnlineDetectWrapper from "@components/OnlineDetectWrapper";

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function OfflineNotice({ 
  //Props
  reverse
}) {

  //console.log(author);

  return (
    <div className={componentStyles.OfflineNotice} >
      <OnlineDetectWrapper >
        <div className={componentStyles.inner}>
          <img src="/images/icons/offline.svg" alt=""/>
          Notice: you are offline.
        </div>
      </OnlineDetectWrapper>
    </div>
  )
}
