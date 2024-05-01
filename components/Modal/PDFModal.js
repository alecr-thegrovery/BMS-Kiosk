/*===== Components =====*/
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import CloseIcon from '@components/SVGComponents/CloseIcon'
import $ from 'jquery'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function PDFModal({ 
  //Props
  url, title, defaultZoom, disclaimerCopy,
}) {

  //console.log(author);

  //NOTES:
  //Open functions are in /ContentComponents/PdfThumbnail

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

  const modalClose = () => {
    const element = document.getElementById("ModalWrapper");
    const iframe = document.getElementById("ModalIframe");
    element.setAttribute('data-modal-status', 'inactive');
    iframe.setAttribute('src', '/images/BMSLogo.png');
  }

  const closeClick = () => {
    modalClose();
  };

  return (
    <div 
      id="PDFModal"
      className={componentStyles.PDFModal}
    >

      <div
        className={componentStyles.backButton}
        data-modal-open='resources'
      >
       &larr; Back To Resources
      </div>

      <div 
        className={componentStyles.closeButton}
        onClick={modalClose}
      >
        <CloseIcon/>
      </div>
      
      {/*<div id="PDFModalTitle" className={componentStyles.titleArea}>
        NO-US-2200226_BMS10289 AS Sample SOB Form_Pending Determination_FINAL.pdf
      </div>*/}
      
      <div className={componentStyles.iframeWrapper}>
        <iframe id="ModalIframe" src="/images/BMSLogo.svg" frameBorder="0"></iframe>
      </div>
      
      <div className={componentStyles.copyArea}>
        <p>
          The accurate completion of reimbursement- or coverage-related documentation is the responsibility of the healthcare provider and patient. Bristol Myers Squibb and its agents make no guarantee regarding reimbursement for any service or item.
        </p>
      </div>

    </div>
  )
}
