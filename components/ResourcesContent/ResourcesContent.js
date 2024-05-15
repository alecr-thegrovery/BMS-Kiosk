/*===== Components =====*/
import React, { useState, useEffect, useRef } from 'react';
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

  useEffect(() => {

      const filterButtons = document.querySelectorAll('#tagFilter > div');

      filterButtons.forEach(button => {
          button.addEventListener('click', function() {
              //set DOM variables
              const selectedFilter = this.getAttribute('data-filter');
              const cards = document.querySelectorAll('#resourceCards > .ResourcesCard');

              //Set active state
              var elements = document.querySelectorAll('#tagFilter > div');
              elements.forEach(element => {
                element.setAttribute('data-active', 'inactive');
              });
              this.setAttribute('data-active', 'active');

              //Show/hide cards
              cards.forEach(card => {
                  if (selectedFilter === 'all' || card.getAttribute('data-tag') === selectedFilter) {
                      card.setAttribute("data-hidden", "false");
                  } else {
                      card.setAttribute("data-hidden", "true");
                  }
              });
          });
      });
    
  })

  return (
    <div className={componentStyles.ResourcesContent}>
      
      <div id="tagFilter" className={componentStyles.tagCloud}>
          <div data-filter="all" >All</div>
          <div data-filter="enrollment" >Enrollment</div>
          <div data-filter="access" >Access &amp; Reimbursement Support</div>
          <div data-filter="financial" >Financial Support Options</div>
          <div data-filter="resources" >Patient Resources</div>
       </div>

      <div id="resourceCards" className={componentStyles.innerGrid}>
        {/*{children}*/}
        <ResourcesCard
          name="BMS AS Enrollment Form"
          thumbnail="/images/resources/enrollment-form.png"
          link="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/Oncology_Enrollment_Form_EN.pdf"
          localPDFLink="/pdf-2024/enrollment-form.pdf"
          tag="enrollment"
          
      />

      {/*<ResourcesCard
        name="How-to-Enroll Guide"
        thumbnail="/images/resources/enrollment-form.png"
        link="https://bmsaccesssupport.com/?missing_resource"
        tag="access"
      />*/

      <ResourcesCard
        name="Sample BR Results Form"
        thumbnail="/images/resources/Sample-Form.png"
         link="https://digitalexperience.bmsaccesssupport.com/pdf-2024/AS-Summary-of-Benefits-Template.pdf"
          localPDFLink="/pdf-2024/AS-Summary-of-Benefits-Template.pdf"
        tag="access"
      />}

      <ResourcesCard
        name="Terms &amp; Conditions for Oral Medications"
        thumbnail="/images/resources/T&C-oral.png"
        link="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/Orals-Terms-and-Conditions.pdf"
        localPDFLink="/pdf-2024/Orals-Terms-and-Conditions.pdf"
        tag="financial"
      />

      <ResourcesCard
        name="Terms &amp; Conditions for HCP Administered Medications"
        thumbnail="/images/resources/T&C-HCP.png"
        link="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/IVs-Terms-and-Conditions.pdf"
        localPDFLink="/pdf-2024/IVs-Terms-and-Conditions.pdf"
        tag="financial"
      />

      <ResourcesCard
        name="Understanding Healthcare Benefits Brochure"
        thumbnail="/images/resources/understanding-benefits.png"
        link="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/Understanding_Healthcare_Benefits.pdf"
        localPDFLink="/pdf-2024/Understanding_Healthcare_Benefits.pdf"
        tag="resources"
      />

      <ResourcesCard
        name="Patient Reimbursement Process Map"
        thumbnail="/images/resources/Patient_Reimbursement_Process_Map.png"
        link="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/patient-insurance-journey-map.pdf"
        localPDFLink="/pdf-2024/patient-insurance-journey-map.pdf"
        tag="resources"
      />

      <ResourcesCard
        name="Medicare Part D Guide"
        thumbnail="/images/resources/Medicare-Guide.png"
        link="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/patient-medicare-guide.pdf"
        localPDFLink="/pdf-2024/patient-medicare-guide.pdf"
        tag="resources"
      />

      <ResourcesCard
        name="Patient Brochure"
        thumbnail="/images/resources/patient-brochure.png"
        link="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/Patient-Brochure.pdf"
        localPDFLink="/pdf-2024/Patient-Brochure.pdf"
        tag="resources"
      />

      <ResourcesCard
        name="Low Income Subsidy Brochure"
        thumbnail="/images/resources/LowIncome-brochure.png"
        link="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/Low-Income_Subsidy_Brochure.pdf"
        localPDFLink="/pdf-2024/Low-Income_Subsidy_Brochure.pdf"
        tag="resources"
      />

      {/*<ResourcesCard
        name="Enrollment Form Tutorial Video"
        link="https://www.bmsaccesssupport.com/forms-resources?tabKey=video-resources1"
      />

      <ResourcesCard
        name="What is an Explanation of Benefits Video"
        link="https://www.bmsaccesssupport.com/forms-resources?tabKey=video-resources1"
      />

      <ResourcesCard
        name="What is Health Insurance? Video"
        link="https://www.bmsaccesssupport.com/forms-resources?tabKey=video-resources1"
      />

      <ResourcesCard
        name="Get to Know BMS Access Support Video"
        link="https://www.bmsaccesssupport.com/forms-resources?tabKey=video-resources1"
      />*/}

      <ResourcesCard
        name="Resources Videos"
        thumbnail="/images/resources/video-generic.png"
        link="https://www.bmsaccesssupport.com/forms-resources?tabKey=video-resources1"
        localVideoLink="https://players.brightcove.net/1892432924001/default_default/index.html?videoId=5729106370001"
        tag="resources"
      />
      </div>
      
    </div>
  )
}
