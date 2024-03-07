/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import Date from '@components/date'
import SocialIcons from '@components/SocialIcons'
import Button1 from '@components/Button1'
import PdfThumbnail from '@components/ContentComponents/PdfThumbnail'
import QRCodePreset from "@components/ContentComponents/QRCodePreset";

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function BlogPreview({ 
  //Props
  id, name, description, link, thumbnail
}) {

  //console.log(author);

  return (
    <div className={componentStyles.ResourcesCard}>
      
      <div className={componentStyles.text}>
        <h3>{name ? name : "Resource Name"}</h3>
        <p>{description ? description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</p>
        
        <a 
          className={componentStyles.linkButton} 
          data-modal-open='resources' 
          data-resource-value={link} 
          href="#"
        >Send Resource</a>

      </div>
      <div className={componentStyles.qrcode}>
        <QRCodePreset link={link ? link : "http://localhost:3000/resource-links/"}/>
        <p>Scan to open on your phone</p>
      </div>
    </div>
  )
}
