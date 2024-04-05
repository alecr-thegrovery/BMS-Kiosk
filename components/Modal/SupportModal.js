/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import Date from '@components/date'
import CloseIcon from '@components/SVGComponents/CloseIcon'
import Button1 from '@components/Button1'
import QRCodePreset from "@components/ContentComponents/QRCodePreset";

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function SupportModal({ 
  //Props
  children, heading, 
}) {

  //console.log(author);
  const modalClose = () => {
    const element = document.getElementById("ModalWrapper");
    element.setAttribute('data-modal-status', 'inactive');
  }

  const closeClick = () => {
    modalClose();
  };

  return (
    <div 
      id="SupportModal"
      className={componentStyles.SupportModal}
    >

      <div 
        className={componentStyles.closeButton}
        onClick={modalClose}
      >
        <CloseIcon/>
      </div>
      
      <div className={componentStyles.scroll}>
       
        <div className={componentStyles.body}>

        <div className={componentStyles.heading}>
          <h2>Looking for support? We're here for you.</h2>
          <p>Patient access support, reimbursement resources, and financial support options may be available through <strong>BMS Access Support</strong></p>
        </div>


          {/*Column 1*/}
          <div className={componentStyles.column}>
            
            <div className={componentStyles.columnHeading}>
              <img className={componentStyles.icon} src="/images/icons/support-modal-icon-1.png" alt=""/>
              <h3  className={componentStyles.hTag}>
                Call a Patient Access Specialist at <strong>1-800-861-0048</strong>, 8 AM to 8 PM ET, Monday - Friday
              </h3>
            </div>
             
          </div>

          {/*Column 2*/}
          <div className={componentStyles.column}>
            
            <div className={componentStyles.columnHeading}>
              <img className={componentStyles.icon} src="/images/icons/support-modal-icon-2.png" alt=""/>
              <h3  className={componentStyles.hTag}>
                Visit <strong>www.BMSAccessSupport.com</strong>
              </h3>
            </div>
            
          </div>

          {/*Column 3*/}
          <div className={componentStyles.column}>
            
            <div className={componentStyles.columnHeading}>
              <img className={componentStyles.icon} src="/images/icons/support-modal-icon-3.png" alt=""/>
              <h3  className={componentStyles.hTag}>
                <strong>Schedule a meeting</strong> with a BMS Access and Reimbursement Manager on the BMS Access Support website
              </h3>
            </div>
              
          </div>

        </div>

        <div className={componentStyles.qrCode}>
          <QRCodePreset 
            link="https://www.bmsaccesssupport.bmscustomerconnect.com/?utm_source=bms_congress_access_app&utm_medium=qr_code_scan&utm_campaign=congress_access_event"
            toolTipText="Visit BMSAccessSupport.com to schedule support assistance"
            toolTipPlacement="right"
          />
        </div>

        <div className={componentStyles.modalFooter}>
          <h5>
            Have questions or want to learn more about how BMS Access Support<sup>&reg;</sup> can help assist your patients?
            <br/>
            Touch base with the BMS Access &amp; Reimbursement Manager at this booth. We’re happy to help you.
          </h5>
          <p>The accurate completion of reimbursement- or coverage-related documentation is the responsibility of the healthcare provider and patient. Bristol Myers Squibb and its agents make no guarantee regarding reimbursement for any service or item.</p>
        </div>        
      </div>

    </div>
    
  )
}
