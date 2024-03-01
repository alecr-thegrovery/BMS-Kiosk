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
      <h2>RESOURCES</h2>
      <div className={componentStyles.innerGrid}>
        {children}
      </div>
      
    </div>
  )
}
