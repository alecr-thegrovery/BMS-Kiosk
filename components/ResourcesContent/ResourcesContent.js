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
      <div className={componentStyles.innerGrid}>
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
      />

      <ResourcesCard
        name="IV T&amp;C"
        description=""
        link="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/IVs-Terms-and-Conditions.pdf"
      />

      <ResourcesCard
        name="Understanding Healthcare Benefits Brochure"
        description=""
        link="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/Understanding_Healthcare_Benefits.pdf"
      />

      <ResourcesCard
        name="Patient Reimbursement Process Map"
        description=""
        link="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/patient-insurance-journey-map.pdf"
      />

      <ResourcesCard
        name="Medicare Part D Guide"
        description=""
        link="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/patient-medicare-guide.pdf"
      />

      <ResourcesCard
        name="BMS Access Support Patient Brochure"
        description=""
        link="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/Patient-Brochure.pdf"
      />

      <ResourcesCard
        name="Low Income Subsidy Brochure"
        description=""
        link="https://www.bmsaccesssupport.com/assets/commercial/us/bmsaccesssupport/en/pdf/Low-Income_Subsidy_Brochure.pdf"
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
      />
      </div>
      
    </div>
  )
}
