/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import $ from 'jquery'
import ZoomIcon from '@components/SVGComponents/ZoomIcon'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function PdfLink({ 
  //Props
  url, name, children, backButton 
}) {

  //console.log(author);

  useEffect(() => {
    $(document).ready(function() {
      //vars
      let ModalWrapper = $("#ModalWrapper");
      let PDFWindow = $("#PDFModal iframe");
      let PDFTitle = $("#PDFModalTitle");

      //open modal
      $("[data-modal-open='pdf']").click(function(e){
        console.log("pdf thumbnail click");
        e.preventDefault();
        //set PDF in iframe
        let pdfLink = $(this).attr('data-pdf-url');
        let pdfName = $(this).attr('data-pdf-name');
        let backButtonState = $(this).attr('data-back-button');
        console.log(pdfLink);
        PDFWindow.attr("src", pdfLink+"#view=FitH"); 
        //activate PDF modal
        ModalWrapper.attr("data-modal-status", "active");
        ModalWrapper.attr("data-modal-show", "PDFModal");
        ModalWrapper.attr("data-back-button", backButtonState);
        PDFTitle.text(pdfName);
      });

      //close modal
      $("[data-modal-close]").click(function(e){
        e.preventDefault();
        ModalWrapper.attr("data-modal-status", "inactive");
        PDFWindow.attr('src', '/images/BMSLogo.png'); 
      });

    });
  });

  return (
    <a 
      className={componentStyles.PdfLink}
      /*onClick={handleClick(this)}*/
      data-modal-open='pdf'
      data-pdf-url={url}
      data-pdf-name={name}
      data-back-button={backButton ? 'true' : 'false'}
    >

      {children}

    </a>
  )
}
