/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import Date from '@components/date'
import SocialIcons from '@components/SocialIcons'
import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function ResourcesForm({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  //console.log(author);

  return (
    <div className={componentStyles.ResourcesForm}>
      <form id="ResourcesForm" action="#" method="POST">
              <div className={componentStyles.cell}>
                <label for="email">Email:</label>
                <input type="email" id="ResourcesForm-email" name="email" required/>
              </div>
              
              <div className={componentStyles.cell}>
                <label for="options">Choose a Resource:</label>
                <select id="ResourcesForm-options" name="options">
                  <option value="https://www.mybmscases.com/bmsProviderLightningPortal/s/esign">eSign</option>
                  <option value="https://www.mybmscases.com/bmsProviderLightningPortal/s/login/?ec=302&startURL=%2FbmsProviderLightningPortal%2Fs%2F">BMS Provider Portal</option>
                  <option value="https://www.bmsaccessmap.com/">BMS Access Map</option>
                  <option value="https://www.bmsaccesssupport.com/forms-resources">Access Support Forms</option>
                  <option value="https://www.bmsaccesssupport.com/codes-coverage">Codes Coverage</option>
                  <option value="https://www.bmsaccesssupport.com/charitable-foundations">Charitable Foundations</option>
                  <option value="https://www.bmsaccesssupport.com/forms-resources">Forms Resources</option>
                  <option value="https://www.bmsaccesssupport.com/forms-resources?tabKey=video-resources1">Video Resources</option>
                </select>
              </div>
              
              <div className={componentStyles.cell}>
                <button type="submit">Submit</button>
              </div>
              
          </form>
      
    </div>
  )
}
