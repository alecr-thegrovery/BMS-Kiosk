/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import Date from '@components/date'
import CloseIcon from '@components/SVGComponents/CloseIcon'
import Button1 from '@components/Button1'
import QRCodePreset from "@components/ContentComponents/QRCodePreset";
import ResourcesForm from "@components/ResourcesForm";

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function ResourcesFormModal({ 
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
      id="ResourcesFormModal"
      className={componentStyles.ResourcesFormModal}
    >

      <div 
        className={componentStyles.closeButton}
        onClick={modalClose}
      >
        <CloseIcon/>
      </div>
      
      <div className={componentStyles.scroll}>


        <div className={componentStyles.body}>
          
          <ResourcesForm/>
        </div>

       
      </div>

    </div>
    
  )
} 
