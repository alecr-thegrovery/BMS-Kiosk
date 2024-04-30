/*===== Components =====*/
import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link'
import Date from '@components/date'
import SocialIcons from '@components/SocialIcons'
import Button1 from '@components/Button1'
import $ from 'jquery'

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
            var element = document.querySelector('#resourcesFormOuter');
            var emailInput = document.querySelector('#ResourcesForm-email');
            var ModalWrapper = document.querySelector('#ModalWrapper'); 
            element.setAttribute("data-form-state","success");

            setTimeout(() => {
              element.setAttribute("data-form-state","default");
              emailInput.value = "";
              ModalWrapper.setAttribute("data-modal-show", "ResourcesModal");
            }, 5000); //time in ms
          },
          (error) => {
            console.log('FAILED...', error.text);
            //show error message
            var element = document.querySelector('#resourcesFormOuter');
            element.setAttribute("data-form-state","error");
            setTimeout(() => {
              element.setAttribute("data-form-state","default");
              emailInput.value = "";
              ModalWrapper.setAttribute("data-modal-show", "ResourcesModal");
            }, 5000); //time in ms
          },
        );
    };

    useEffect(() => {
      $(document).ready(function() {
        let ModalWrapper = $("#ModalWrapper");
        
        $("[data-modal-open='resources']").click(function(e){
            e.preventDefault();
            ModalWrapper.attr("data-modal-status", "active");
            ModalWrapper.attr("data-modal-show", "ResourcesModal");
          });
        });
      });

  return (
    <div id="resourcesFormOuter" data-form-state="default" className={componentStyles.ResourcesForm}>
      
      <div className={componentStyles.form}>
        
        <form id="ResourcesForm" ref={form} onSubmit={sendEmail}>

          {/*EMAIL INPUT*/}
          <div className={componentStyles.cell}>
            <label for="email">Email:</label>
            <input type="email" id="ResourcesForm-email" name="email" required/>
          </div>
          
          {/*RESOURCE LINK*/}
          <div className={componentStyles.cell}>
            <label  className={componentStyles.selectLabel} for="options">Selected Resource:</label>
            <select id="ResourcesForm-options" name="options">
              <option value="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/Oncology_Enrollment_Form_EN.pdf">BMS AS Enrollment Form</option>
              {/*<option value="https://bmsaccesssupport.com/?missing_resource">How-to-Enroll Guide</option>*/}
              <option value="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/AS-Summary-of-Benefits-Template.pdf">Sample BR Results Form</option>
              <option value="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/Orals-Terms-and-Conditions.pdf">Oral T&amp;C</option>
              <option value="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/IVs-Terms-and-Conditions.pdf">IV T&amp;C</option>
              <option value="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/Understanding_Healthcare_Benefits.pdf">Understanding Healthcare Benefits Brochure</option>
              <option value="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/patient-insurance-journey-map.pdf">Patient Reimbursement Process Map</option>
              <option value="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/patient-medicare-guide.pdf">Medicare Part D Guide</option>
              <option value="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/Patient-Brochure.pdf">BMS Access Support Patient Brochure</option>
              <option value="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/Low-Income_Subsidy_Brochure.pdf">Low Income Subsidy Brochure</option>
              {/*<option value="https://www.bmsaccesssupport.com/forms-resources?tabKey=video-resources1">Enrollment Form Tutorial Video</option>
              <option value="https://www.bmsaccesssupport.com/forms-resources?tabKey=video-resources1">What is an Explanation of Benefits Video</option>
              <option value="https://www.bmsaccesssupport.com/forms-resources?tabKey=video-resources1">What is Health Insurance? Video</option>
              <option value="https://www.bmsaccesssupport.com/forms-resources?tabKey=video-resources1">Get to Know BMS Access Support Video</option>*/}
              <option value="https://www.bmsaccesssupport.com/forms-resources?tabKey=video-resources1">Resource Videos</option>

            </select>
            <a className={componentStyles.backButton} data-modal-open='resources' >&larr; select a different resource</a>
          </div>
          
          {/*SUBMIT BUTTON*/}
          <div className={componentStyles.cell}>
            <button type="submit">Submit</button>
            
          </div>
          
        </form>

      </div>

      <div data-form-message="thankYou" className={componentStyles.thankYou}>
        <h3>Thank you!</h3>
        <br/>
        <p>We've sent you a link to the selected resource. Be sure to check your email.</p>
        <br/>
        <p>Sending you back to the Resources screen in a few moments...</p>
      </div>

      <div className={componentStyles.error}>
        <h3>Error</h3>
        <p>Sorry, looks like there was an error sending that resource.  Please try again later.</p>
      </div>
      
    </div>
  )
}
