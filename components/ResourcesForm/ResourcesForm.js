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

  const closeForm = (e) => {
    var element = document.querySelector('#resourcesFormOuter');
    var emailInput = document.querySelector('#ResourcesForm-email');
    var ModalWrapper = document.querySelector('#ModalWrapper'); 
    element.setAttribute("data-form-state","default");
    emailInput.value = "";
    ModalWrapper.setAttribute("data-modal-show", "ResourcesModal");
  };

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm('service_a0ad2wp', 'template_7dystu5', form.current, {
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

            /*setTimeout(() => {
              closeForm()
            }, 5000); //time in ms*/
          },
          (error) => {
            console.log('FAILED...', error.text);
            //show error message
            var element = document.querySelector('#resourcesFormOuter');
            element.setAttribute("data-form-state","error");
            /*setTimeout(() => {
              closeForm()
            }, 5000); //time in ms*/
          },
        );
    };

    useEffect(() => {
      $(document).ready(function() {
        let ModalWrapper = $("#ModalWrapper");
        let button = $("#resourcesSubmitButton");
        
        $("[data-modal-open='resources']").click(function(e){
            e.preventDefault();
            ModalWrapper.attr("data-modal-status", "active");
            ModalWrapper.attr("data-modal-show", "ResourcesModal");
          });
        });

        //display loading animation for 5 seconds then revert
        $("#resourcesSubmitButton").click(function(e){
          console.log('click');
          $("#resourcesSubmitButton").attr("data-status", "sending");
          setTimeout(() => {
            $("#resourcesSubmitButton").attr("data-status", "locked");
          }, 5000); //time in ms
          
        });

        //detect if form is filled
        function checkInputStatus() {
          console.log('typing');
          const input = document.getElementById('ResourcesForm-email');
          const element = document.getElementById('resourcesSubmitButton');
          console.log(input.checkValidity())

          if (input.checkValidity()) {
              element.setAttribute('data-status', 'default');
          } else {
              element.setAttribute('data-status', 'locked');
          }
        }

        document.getElementById('ResourcesForm-email').addEventListener('input', checkInputStatus);
        /*document.getElementById('ResourcesForm').addEventListener('submit', function(event) {
            event.preventDefault();
            checkInputStatus();
        });*/
        
      });

  return (
    <div id="resourcesFormOuter" data-form-state="default" className={componentStyles.ResourcesForm}>
      
      <div className={componentStyles.form}>
        
        <div className={componentStyles.heading}>
          <h2>Send Resource</h2>
          <p>Fill in your email in the form below to share a resource.</p>
        </div>

        <form id="ResourcesForm" ref={form} onSubmit={sendEmail}>

          {/*EMAIL INPUT*/}
          <div className={componentStyles.cell}>
            <label for="email">Email:</label>
            <input type="email" id="ResourcesForm-email" name="email" autocomplete="off" required/>
          </div>
          
          {/*RESOURCE LINK*/}
          <div className={componentStyles.cell}>
            <label  className={componentStyles.selectLabel} for="options">Selected Resource:</label>
            <select id="ResourcesForm-options" name="options">
              <option value="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/Oncology_Enrollment_Form_EN.pdf">BMS AS Enrollment Form</option>
              {/*<option value="https://bmsaccesssupport.com/?missing_resource">How-to-Enroll Guide</option>*/}
              <option value="https://digitalexperience.bmsaccesssupport.com/pdf-2024/AS-Summary-of-Benefits-Template.pdf">Sample BR Results Form</option>
              <option value="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/Orals-Terms-and-Conditions.pdf">Terms &amp; Conditions for Oral Medications</option>
              <option value="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/IVs-Terms-and-Conditions.pdf">Terms &amp; Conditions for HCP Administered Medications</option>
              <option value="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/Understanding_Healthcare_Benefits.pdf">Understanding Healthcare Benefits Brochure</option>
              <option value="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/patient-insurance-journey-map.pdf">Patient Reimbursement Process Map</option>
              <option value="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/patient-medicare-guide.pdf">Medicare Part D Guide</option>
              <option value="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/Patient-Brochure.pdf">Patient Brochure</option>
              <option value="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/Low-Income_Subsidy_Brochure.pdf">Low Income Subsidy Brochure</option>
              <option value="https://www.bmsaccesssupport.com/forms-resources?tabKey=video-resources1&video=enrollment-form-tutorial">Enrollment Form Tutorial Video</option>
              <option value="https://www.bmsaccesssupport.com/forms-resources?tabKey=video-resources1&video=explanation-of-benefits">What is an Explanation of Benefits Video</option>
              <option value="https://www.bmsaccesssupport.com/forms-resources?tabKey=video-resources1&video=what-is-health-insurance">What is Health Insurance? Video</option>
              <option value="https://www.bmsaccesssupport.com/forms-resources?tabKey=video-resources1&video=bms-access-support">Get to Know BMS Access Support Video</option>
              {/*<option value="https://www.bmsaccesssupport.com/forms-resources?tabKey=video-resources1">Resource Videos</option>*/}

            </select>
            <a className={componentStyles.backButton} data-modal-open='resources' >&larr; select a different resource</a>
          </div>
          
          {/*SUBMIT BUTTON*/}
          <div className={componentStyles.cell}>
            <button 
              id="resourcesSubmitButton" 
              className={componentStyles.resourcesSubmitButton}
              type="submit"
              data-status="locked"
            >
              <div data-text className={componentStyles.buttonText}>Submit</div>
              <div data-loading className={componentStyles.loading}>
                <div className={componentStyles.dot}></div>
                <div className={componentStyles.dot}></div>
                <div className={componentStyles.dot}></div>
              </div>
            </button>
            
          </div>
          
        </form>

      </div>

      <div data-form-message="thankYou" className={componentStyles.thankYou}>
        <img src="/images/icons/iconThankYouCheck.png" alt=""/>
        <h3>Thank you!</h3>
        <p>
          We've sent you a link to the selected resource. 
          <br/>
          Be sure to check your email.
        </p>
        <br/>
        <button data-modal-open='resources' onClick={closeForm} >Back To Resources</button>
      </div>

      <div className={componentStyles.error}>
        <h3>Error</h3>
        <p>Sorry, looks like there was an error sending that resource.  Please try again later.</p>
        <br/>
        <button data-modal-open='resources' onClick={closeForm} >Back To Resources</button>
      </div>
      
    </div>
  )
}
