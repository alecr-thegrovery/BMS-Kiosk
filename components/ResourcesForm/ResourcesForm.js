/*===== Components =====*/
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
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
  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm('service_9m9ggk3', 'template_7dystu5', form.current, {
          publicKey: '8Zp2xjJG2RZQDI6Jn',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            //show success message, close form
          },
          (error) => {
            console.log('FAILED...', error.text);
            //show error message
          },
        );
    };


  return (
    <div className={componentStyles.ResourcesForm}>
      
      <div className={componentStyles.cell}>
        <p>Enter your email to send the resource you just selected.  No data will be collected from this.</p>
      </div>

      <form id="ResourcesForm" ref={form} onSubmit={sendEmail}>

        {/*EMAIL INPUT*/}
        <div className={componentStyles.cell}>
          <label for="email">Email:</label>
          <input type="email" id="ResourcesForm-email" name="email" required/>
        </div>
        
        {/*RESOURCE LINK*/}
        <div className={componentStyles.cell}>
          {/*<label for="options">Choose a Resource:</label>*/}
          <select id="ResourcesForm-options" name="options" hidden>
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
        
        {/*SUBMIT BUTTON*/}
        <div className={componentStyles.cell}>
          <button type="submit">Submit</button>
        </div>
        
      </form>
      
    </div>
  )
}
