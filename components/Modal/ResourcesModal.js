/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import Date from '@components/date'
import CloseIcon from '@components/SVGComponents/CloseIcon'
import Button1 from '@components/Button1'

/*New Resources components*/
import ResourcesContent from '@components/ResourcesContent'
import ResourcesCard from '@components/ResourcesCard'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function ResourcesModal({ 
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
      id="ResourcesModal"
      className={componentStyles.ResourcesModal}
    >

      <div 
        className={componentStyles.closeButton}
        onClick={modalClose}
      >
        <CloseIcon/>
      </div>
      
      <div className={componentStyles.scroll}>
        <div className={componentStyles.heading}>
          <h2>All Resources</h2>
        </div>

        <div className={componentStyles.body}>
          <ResourcesContent />
        </div>

        <div className={componentStyles.modalFooter}></div>
          
      </div>

    </div>
    
  )
} 
