/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Date from '@components/date'
import SocialIcons from '@components/SocialIcons'
import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function BlogPreview({ 
  //Props
  children, reverse
}) {

  //console.log(author);
  useEffect(() => {
    
  });
  
  return (
    <div 
      className={componentStyles.OnlineDetectWrapper + " OnlineDetectWrapper"}
      data-reverse={reverse ? 'true' : 'false'}
    >
      {children}
    </div>
  )
}
