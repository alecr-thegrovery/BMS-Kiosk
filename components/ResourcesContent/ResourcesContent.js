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
    
        
        /*const selectElement = document.getElementById('tagFilter');
        
        selectElement.addEventListener('change', function() {
            console.log("select interact");
            const selectedTag = this.value;
            const cards = document.querySelectorAll('#resourceCards > .ResourcesCard');

            cards.forEach(card => {
                card.setAttribute("data-hidden", "false");
                if (selectedTag === 'all' || card.getAttribute('data-tag') === selectedTag) {
                    card.setAttribute("data-hidden", "false");
                } else {
                    card.setAttribute("data-hidden", "true");
                }
            });
        });*/

        /*function tagClick(){
          console.log("select interact");
          const selectedTag = this.getAttribute("data-tag-value");
          const cards = document.querySelectorAll('#resourceCards > .ResourcesCard');

          cards.forEach(card => {
              card.setAttribute("data-hidden", "false");
              if (selectedTag === 'all' || card.getAttribute('data-tag') === selectedTag) {
                  card.setAttribute("data-hidden", "false");
              } else {
                  card.setAttribute("data-hidden", "true");
              }
          });
        }

        const selectElement = document.querySelectorAll('tagFilter > div');
        
        document.querySelectorAll('tagFilter > div').addEventListener('click', function() {
          tagClick()
        })*/

      const filterButtons = document.querySelectorAll('#tagFilter > div');

      filterButtons.forEach(button => {
          button.addEventListener('click', function() {
              const selectedFilter = this.getAttribute('data-filter');
              const cards = document.querySelectorAll('#resourceCards > .ResourcesCard');

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
      
      {/*<select id="tagFilter">
           <option value="all">All</option>
           <option value="tag-1">Tag 1</option>
           <option value="tag-2">Tag 2</option>
           <option value="tag-3">Tag 3</option>
       </select>*/}

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
          description=""
          link="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/Oncology_Enrollment_Form_EN.pdf"
      />

      {/*<ResourcesCard
        name="How-to-Enroll Guide"
        description=""
        link="https://bmsaccesssupport.com/?missing_resource"
      />

      <ResourcesCard
        name="Sample BR Results Form"
        description=""
        link="https://bmsaccesssupport.com/?missing_resource"
      />*/}

      <ResourcesCard
        name="Oral T&amp;C"
        description=""
        link="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/Orals-Terms-and-Conditions.pdf"
        tag="resources"
      />

      <ResourcesCard
        name="IV T&amp;C"
        description=""
        link="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/IVs-Terms-and-Conditions.pdf"
        tag="enrollment"
      />

      <ResourcesCard
        name="Understanding Healthcare Benefits Brochure"
        description=""
        link="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/Understanding_Healthcare_Benefits.pdf"
        tag="resources"
      />

      <ResourcesCard
        name="Patient Reimbursement Process Map"
        description=""
        link="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/patient-insurance-journey-map.pdf"
        tag="access"
      />

      <ResourcesCard
        name="Medicare Part D Guide"
        description=""
        link="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/patient-medicare-guide.pdf"
        tag="resources"
      />

      <ResourcesCard
        name="BMS Access Support Patient Brochure"
        description=""
        link="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/Patient-Brochure.pdf"
        tag="access"
      />

      <ResourcesCard
        name="Low Income Subsidy Brochure"
        description=""
        link="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/Low-Income_Subsidy_Brochure.pdf"
        tag="financial"
      />

      {/*<ResourcesCard
        name="Enrollment Form Tutorial Video"
        description=""
        link="https://www.bmsaccesssupport.com/forms-resources?tabKey=video-resources1"
      />

      <ResourcesCard
        name="What is an Explanation of Benefits Video"
        description=""
        link="https://www.bmsaccesssupport.com/forms-resources?tabKey=video-resources1"
      />

      <ResourcesCard
        name="What is Health Insurance? Video"
        description=""
        link="https://www.bmsaccesssupport.com/forms-resources?tabKey=video-resources1"
      />

      <ResourcesCard
        name="Get to Know BMS Access Support Video"
        description=""
        link="https://www.bmsaccesssupport.com/forms-resources?tabKey=video-resources1"
      />*/}

      <ResourcesCard
        name="Resources Videos"
        description=""
        link="https://www.bmsaccesssupport.com/forms-resources?tabKey=video-resources1"
        tag="resources"
      />
      </div>
      
    </div>
  )
}
