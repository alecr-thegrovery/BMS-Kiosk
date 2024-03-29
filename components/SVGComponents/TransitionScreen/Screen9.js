/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import ChevronDown from '@components/SVGComponents/ChevronDown'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function Screen9({ 
  //Props
  id, children
}) {

  //console.log(author);

  return (
    <div className={componentStyles.Screen9}>
      {/*<svg width="1920" height="1080" viewBox="0 0 1920 1080">
        <defs>
          <clipPath id="clip-path">
            <rect id="Rectangle_1668" data-name="Rectangle 1668" width="1646.199" height="976.257" fill="none"/>
          </clipPath>
          <clipPath id="clip-Brochures_-_Room_Scene">
            <rect width="1920" height="1080"/>
          </clipPath>
        </defs>
        <g id="Brochures_-_Room_Scene" data-name="Brochures - Room Scene" clip-path="url(#clip-Brochures_-_Room_Scene)">
          <rect width="1920" height="1080" fill="#fff"/>
          <g id="Layer_2" data-name="Layer 2" transform="translate(-7034.963 -8.205)">
            <path id="Path_3504" data-name="Path 3504" d="M0,0H2008.065V932.76H0Z" transform="translate(6987.491 -12.347)" fill="#c5ffe6" stroke="#595454" stroke-width="1.03" opacity="0.203"/>
          </g>
          <g id="Group_1263" data-name="Group 1263" transform="translate(-60.322 114.742)">
            <rect id="Rectangle_1590" data-name="Rectangle 1590" width="597.702" height="535.689" transform="translate(125.444 18.836)" fill="#fff"/>
            <g id="Group_1260" data-name="Group 1260">
              <g id="Group_1259" data-name="Group 1259" clip-path="url(#clip-path)">
                <path id="Path_4738" data-name="Path 4738" d="M284.788,277.749v-65.6H241.3v51.513H223V250.824H204.216v20.207H188.288v34.71s-33.521.237-33.759,0,0-25.438,0-25.438H136.815" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.769"/>
                <path id="Path_4739" data-name="Path 4739" d="M621.928,336.781h-18.6V307.044H590.675v-7.67H557.312v6.519h-4.6s.384,40.649,0,41.033-15.722,0-15.722,0a17.257,17.257,0,0,0-17.257-17.257H499.79v20.836H454.923v19.277H411.589v12.677" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.769"/>
                <path id="Path_4740" data-name="Path 4740" d="M414.122,443.353A101.071,101.071,0,0,1,588.8,512.619V419.364a119.21,119.21,0,0,1,119.209-119.21h13.021" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.769"/>
                <line id="Line_581" data-name="Line 581" y2="11.648" transform="translate(385.155 491.069)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.769"/>
                <path id="Path_4741" data-name="Path 4741" d="M137.3,314.993h71.778A176.076,176.076,0,0,1,385.155,491.069" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.769"/>
                <line id="Line_582" data-name="Line 582" y2="190.751" transform="translate(205.992 372.31)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.769"/>
                <line id="Line_583" data-name="Line 583" x1="96.344" y2="143.397" transform="translate(205.992 386.744)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.769"/>
                <line id="Line_584" data-name="Line 584" x2="49.263" y2="103.547" transform="translate(156.728 378.9)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.769"/>
                <line id="Line_585" data-name="Line 585" y1="178.188" transform="translate(682.151 362.344)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.769"/>
                <line id="Line_586" data-name="Line 586" x2="62.507" y2="124.631" transform="translate(619.644 367.646)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.769"/>
                <line id="Line_587" data-name="Line 587" x1="27.227" y2="84.366" transform="translate(682.151 369.18)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.769"/>
                <line id="Line_588" data-name="Line 588" x1="54.838" y2="92.355" transform="translate(465.868 448.177)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.769"/>
                <line id="Line_589" data-name="Line 589" x1="75.759" y2="48.959" transform="translate(475.242 475.788)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.769"/>
                <path id="Path_4742" data-name="Path 4742" d="M738.009,563.38H114.3V11.006h623.7Zm-602.826-15.8H717.13V26.8H135.183Z" fill="#ede7e7"/>
                <rect id="Rectangle_1591" data-name="Rectangle 1591" width="20.879" height="531.848" transform="translate(415.717 21.268)" fill="#ede7e7"/>
                <rect id="Rectangle_1592" data-name="Rectangle 1592" width="302.745" height="5.266" transform="translate(124.193 179.771)" fill="#ede7e7"/>
                <rect id="Rectangle_1593" data-name="Rectangle 1593" width="302.745" height="5.266" transform="translate(124.193 375.661)" fill="#ede7e7"/>
                <rect id="Rectangle_1594" data-name="Rectangle 1594" width="302.745" height="5.266" transform="translate(426.067 179.771)" fill="#ede7e7"/>
                <rect id="Rectangle_1595" data-name="Rectangle 1595" width="302.745" height="5.266" transform="translate(426.067 375.661)" fill="#ede7e7"/>
                <rect id="Rectangle_1596" data-name="Rectangle 1596" width="6.96" height="535.36" transform="translate(273.533 20.348)" fill="#ede7e7"/>
                <rect id="Rectangle_1597" data-name="Rectangle 1597" width="6.96" height="535.36" transform="translate(574.538 20.348)" fill="#ede7e7"/>
                <path id="Path_4743" data-name="Path 4743" d="M252.557,503.105V454.693l-47.734-71.18c-27.505-41.015,1.31-96.206,50.685-97.083l71.608-1.271A47.305,47.305,0,0,1,372.344,316.1l13.911,37.758,24.027,19.848a8.726,8.726,0,0,1-3.109,15.1l-10.142,2.964,1.713,41.967A34.837,34.837,0,0,1,363.936,470H328.121v47.074Z" fill="#a59f9f"/>
                <path id="Path_4744" data-name="Path 4744" d="M309.128,373.954h0A15.11,15.11,0,0,0,320.886,391.8l1.582.325a15.111,15.111,0,0,0,17.843-11.759l3.779-62.249Z" fill="#595454"/>
                <path id="Path_4745" data-name="Path 4745" d="M373.649,353.057a5.588,5.588,0,1,1-5.588,5.588,5.588,5.588,0,0,1,5.588-5.588" fill="#595454"/>
                <path id="Path_4746" data-name="Path 4746" d="M242.206,285.461l22.723-1.043,8.056-11.493a47.376,47.376,0,0,1,73.4-5.175,19.467,19.467,0,1,1,34.838,5.108c22.041-2.011,26.177,19.369,14.151,31.458-8.662,8.709-18.279,10.4-31.6,6.979L252.557,460.021l-55.741-86.662c-23.8-37,1.442-85.881,45.39-87.9" fill="#be2bbb"/>
                <path id="Path_4747" data-name="Path 4747" d="M242.206,285.461l22.723-1.043,8.056-11.493a47.376,47.376,0,0,1,73.4-5.175,19.467,19.467,0,1,1,34.838,5.108c22.041-2.011,26.177,19.369,14.151,31.458-8.662,8.709-18.279,10.4-31.6,6.979L252.557,460.021l-55.741-86.662C173.017,336.358,198.258,287.478,242.206,285.461Z" fill="none" stroke="#a84599" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.774"/>
                <path id="Path_4748" data-name="Path 4748" d="M230.945,357.025a3.83,3.83,0,1,1-3.83,3.83,3.83,3.83,0,0,1,3.83-3.83m17.086,59.5a3.83,3.83,0,1,0,3.83-3.83,3.83,3.83,0,0,0-3.83,3.83m-46.55-40.756a3.83,3.83,0,1,0,3.83-3.829,3.829,3.829,0,0,0-3.83,3.829m3.069-47.588a3.83,3.83,0,1,0,3.83-3.83,3.829,3.829,0,0,0-3.83,3.83m9.666-30.156a3.829,3.829,0,1,0,3.829-3.83,3.829,3.829,0,0,0-3.829,3.83m52.492,6.834a3.83,3.83,0,1,0,3.83-3.83,3.83,3.83,0,0,0-3.83,3.83M266,343.724a3.83,3.83,0,1,0,3.83-3.83,3.83,3.83,0,0,0-3.83,3.83m30.081,18.234a3.83,3.83,0,1,0,3.83-3.83,3.83,3.83,0,0,0-3.83,3.83m28.369-29.624a3.83,3.83,0,1,0,3.83-3.83,3.83,3.83,0,0,0-3.83,3.83M297.777,294.3a3.83,3.83,0,1,0,3.83-3.829,3.83,3.83,0,0,0-3.83,3.829M291.8,261.827a3.83,3.83,0,1,0,3.83-3.83,3.83,3.83,0,0,0-3.83,3.83m34.57,11.561a3.83,3.83,0,1,0,3.83-3.83,3.83,3.83,0,0,0-3.83,3.83m41.8,23.406a3.83,3.83,0,1,0,3.83-3.829,3.83,3.83,0,0,0-3.83,3.829m-17.593-31.729a3.829,3.829,0,1,0,3.829-3.83,3.829,3.829,0,0,0-3.829,3.83m14.353-15.608a3.83,3.83,0,1,0,3.83-3.83,3.83,3.83,0,0,0-3.83,3.83" fill="#fff"/>
                <path id="Path_4749" data-name="Path 4749" d="M298.622,429.861c9.149,0,16.592,8.551,16.592,19.063s-7.443,19.063-16.592,19.063-16.592-8.552-16.592-19.063,7.443-19.063,16.592-19.063m0-9.147c-14.215,0-25.739,12.63-25.739,28.21s11.524,28.209,25.739,28.209,25.739-12.629,25.739-28.209-11.524-28.21-25.739-28.21" fill="#fff"/>
                <line id="Line_590" data-name="Line 590" x1="39.679" y2="56.159" transform="translate(307.532 290.719)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.774"/>
                <path id="Path_4750" data-name="Path 4750" d="M264.928,284.418l-24.44,37.747a6.529,6.529,0,0,1-11.021-7l12.513-20.068" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.774"/>
                <path id="Path_4751" data-name="Path 4751" d="M365.647,276.445l14.337-3.014c27.162-4.141,21.7,19.377,21.7,19.377s-6.686,27.229-37.911,18.487c-23.312-6.922-18.24-49.2-18.24-49.2" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.774"/>
                <path id="Path_4752" data-name="Path 4752" d="M378.7,397.2c5.038,8.682,13.729,4.554,13.729,4.554" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.774"/>
                <path id="Path_4753" data-name="Path 4753" d="M355.771,347.771a18.745,18.745,0,0,1,24.581-9.972" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.774"/>
                <path id="Path_4754" data-name="Path 4754" d="M614.384,722.418l34.8-12.156L713.931,679.1a5.342,5.342,0,0,1,5.478,9.121l-18.022,13.227a2.944,2.944,0,0,0,.531,5.061c3.906,1.754,9.767,4.26,13.807,5.973a34.217,34.217,0,0,0,9.368,2.486c10.552,1.247,35.919,4.248,51.062,6.064a7.131,7.131,0,0,1,4.809,11.418L769.431,747.52a21.716,21.716,0,0,1-16.091,8.492c-19.48,1.04-62.728,2.584-88.947-2.316l-65.329,17.493Z" fill="#a59f9f"/>
                <path id="Path_4755" data-name="Path 4755" d="M781.255,729.777c-18.6.929-63.451-5.969-63.451-5.969" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.753"/>
                <path id="Path_4756" data-name="Path 4756" d="M775.339,738.005c-14.1,2.2-57.648-3.482-57.648-3.482" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.753"/>
                <path id="Path_4757" data-name="Path 4757" d="M768.542,746.86c-14.995.744-50.964-1.741-50.964-1.741" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.753"/>
                <line id="Line_591" data-name="Line 591" x1="0.319" y2="30.053" transform="translate(717.526 719.952)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.753"/>
                <path id="Path_4758" data-name="Path 4758" d="M431.468,744.167l11.087,25.763a48.923,48.923,0,0,0,53.391,28.848l157.242-27.585-6.054-60.16-121.076,1.73-54.146-144.3a97.76,97.76,0,0,0-91.528-63.415H185.032a42.584,42.584,0,0,0-42.584,42.584V823.587H431.194v-184.4a88.475,88.475,0,0,0-10.273-41.379l-16.387-30.968" fill="#cde8db"/>
                <path id="Path_4759" data-name="Path 4759" d="M431.468,744.167l11.087,25.763a48.923,48.923,0,0,0,53.391,28.848l157.242-27.585-6.054-60.16-121.076,1.73-54.146-144.3a97.76,97.76,0,0,0-91.528-63.415H185.032a42.584,42.584,0,0,0-42.584,42.584V823.587H431.194v-184.4a88.475,88.475,0,0,0-10.273-41.379l-16.387-30.968" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.753"/>
                <path id="Path_4760" data-name="Path 4760" d="M431.194,745.254V639.185a88.479,88.479,0,0,0-10.273-41.38l-16.387-30.967" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.753"/>
                <path id="Path_4761" data-name="Path 4761" d="M188.381,734.073l33.959-14.329,62.655-35.184a5.343,5.343,0,0,1,6.043,8.757l-17.152,14.338a2.944,2.944,0,0,0,.85,5.017c4.009,1.5,10.017,3.635,14.157,5.09a34.258,34.258,0,0,0,9.506,1.89c10.61.578,36.116,1.971,51.342,2.827a7.131,7.131,0,0,1,5.521,11.091L344.7,749.335a21.721,21.721,0,0,1-15.523,9.491c-19.376,2.268-62.44,6.54-88.916,3.3l-70.073,32.9Z" fill="#a59f9f"/>
                <path id="Path_4762" data-name="Path 4762" d="M354.16,732.689c-18.511,2.062-60.531-2.069-60.531-2.069" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.753"/>
                <path id="Path_4763" data-name="Path 4763" d="M348.757,741.562c-13.943,3.059-54.587.059-54.587.059" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.753"/>
                <path id="Path_4764" data-name="Path 4764" d="M342.513,750.005c-15.952,2.454-47.81,1.389-47.81,1.389" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.753"/>
                <path id="Path_4765" data-name="Path 4765" d="M244.517,510.914v-19h92.74v19" fill="#cde8db"/>
                <path id="Path_4766" data-name="Path 4766" d="M244.517,510.914v-19h92.74v19" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.753"/>
                <rect id="Rectangle_1598" data-name="Rectangle 1598" width="1645.159" height="183.275" transform="translate(0.52 792.462)" fill="#ede7e7"/>
                <rect id="Rectangle_1599" data-name="Rectangle 1599" width="1645.159" height="183.275" transform="translate(0.52 792.462)" fill="none" stroke="#595554" stroke-miterlimit="10" stroke-width="1.04"/>
                <path id="Path_4767" data-name="Path 4767" d="M241.2,777.247,118.911,823.363c-36.213,13.656-73.566-17.18-67.017-55.324L81.6,595.061a108.346,108.346,0,0,1,106.783-90.01" fill="#cde8db"/>
                <path id="Path_4768" data-name="Path 4768" d="M241.2,777.247,118.911,823.363c-36.213,13.656-73.566-17.18-67.017-55.324L81.6,595.061a108.346,108.346,0,0,1,106.783-90.01" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.753"/>
                <path id="Path_4769" data-name="Path 4769" d="M186.938,587.986l-36.323,140.83,78.665-13.042,12.142,61.472L143.267,814.1" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.753"/>
                <path id="Path_4770" data-name="Path 4770" d="M1555.4,329.183H991.482a6.591,6.591,0,0,1-6.591-6.591v-2.843a6.591,6.591,0,0,1,6.591-6.591H1555.4Z" fill="#fff"/>
                <path id="Path_4771" data-name="Path 4771" d="M1555.4,329.183H991.482a6.591,6.591,0,0,1-6.591-6.591v-2.843a6.591,6.591,0,0,1,6.591-6.591H1555.4Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1600" data-name="Rectangle 1600" width="49.825" height="167.835" transform="translate(1059.638 145.323)" fill="#fff"/>
                <rect id="Rectangle_1601" data-name="Rectangle 1601" width="49.825" height="167.835" transform="translate(1059.638 145.323)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.216"/>
                <rect id="Rectangle_1602" data-name="Rectangle 1602" width="30.393" height="59.507" transform="translate(1069.354 172.765)" fill="#fff"/>
                <rect id="Rectangle_1603" data-name="Rectangle 1603" width="30.393" height="59.507" transform="translate(1069.354 172.765)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.216"/>
                <path id="Path_4772" data-name="Path 4772" d="M1091.842,287.826a7.292,7.292,0,1,0-7.292,7.291,7.291,7.291,0,0,0,7.292-7.291" fill="#fff"/>
                <path id="Path_4773" data-name="Path 4773" d="M1091.842,287.826a7.292,7.292,0,1,0-7.292,7.291A7.291,7.291,0,0,0,1091.842,287.826Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.216"/>
                <line id="Line_592" data-name="Line 592" x2="20.255" transform="translate(1074.423 208.747)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.216"/>
                <line id="Line_593" data-name="Line 593" x2="20.255" transform="translate(1074.423 215.499)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.216"/>
                <line id="Line_594" data-name="Line 594" x2="20.255" transform="translate(1074.423 222.25)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.216"/>
                <rect id="Rectangle_1604" data-name="Rectangle 1604" width="49.825" height="167.835" transform="translate(1109.462 145.323)" fill="#ede7e7"/>
                <rect id="Rectangle_1605" data-name="Rectangle 1605" width="49.825" height="167.835" transform="translate(1109.462 145.323)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.216"/>
                <rect id="Rectangle_1606" data-name="Rectangle 1606" width="30.393" height="59.507" transform="translate(1119.179 172.765)" fill="#fff"/>
                <rect id="Rectangle_1607" data-name="Rectangle 1607" width="30.393" height="59.507" transform="translate(1119.179 172.765)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.216"/>
                <path id="Path_4774" data-name="Path 4774" d="M1141.667,287.826a7.292,7.292,0,1,0-7.292,7.291,7.292,7.292,0,0,0,7.292-7.291" fill="#fff"/>
                <path id="Path_4775" data-name="Path 4775" d="M1141.667,287.826a7.292,7.292,0,1,0-7.292,7.291A7.292,7.292,0,0,0,1141.667,287.826Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.216"/>
                <line id="Line_595" data-name="Line 595" x2="20.255" transform="translate(1124.247 208.747)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.216"/>
                <line id="Line_596" data-name="Line 596" x2="20.255" transform="translate(1124.247 215.499)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.216"/>
                <line id="Line_597" data-name="Line 597" x2="20.255" transform="translate(1124.247 222.25)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.216"/>
                <rect id="Rectangle_1608" data-name="Rectangle 1608" width="49.825" height="167.835" transform="translate(1009.813 145.323)" fill="#ede7e7"/>
                <rect id="Rectangle_1609" data-name="Rectangle 1609" width="49.825" height="167.835" transform="translate(1009.813 145.323)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.216"/>
                <rect id="Rectangle_1610" data-name="Rectangle 1610" width="30.393" height="59.507" transform="translate(1019.529 172.765)" fill="#fff"/>
                <rect id="Rectangle_1611" data-name="Rectangle 1611" width="30.393" height="59.507" transform="translate(1019.529 172.765)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.216"/>
                <path id="Path_4776" data-name="Path 4776" d="M1042.017,287.826a7.292,7.292,0,1,0-7.292,7.291,7.291,7.291,0,0,0,7.292-7.291" fill="#fff"/>
                <path id="Path_4777" data-name="Path 4777" d="M1042.017,287.826a7.292,7.292,0,1,0-7.292,7.291A7.291,7.291,0,0,0,1042.017,287.826Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.216"/>
                <line id="Line_598" data-name="Line 598" x2="20.255" transform="translate(1024.598 208.747)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.216"/>
                <line id="Line_599" data-name="Line 599" x2="20.255" transform="translate(1024.598 215.499)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.216"/>
                <line id="Line_600" data-name="Line 600" x2="20.255" transform="translate(1024.598 222.25)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.216"/>
                <rect id="Rectangle_1612" data-name="Rectangle 1612" width="23.861" height="94.882" transform="translate(1293.773 218.276)" fill="#ede7e7"/>
                <rect id="Rectangle_1613" data-name="Rectangle 1613" width="23.861" height="94.882" transform="translate(1293.773 218.276)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1614" data-name="Rectangle 1614" width="4.22" height="103.85" transform="translate(1289.553 209.308)" fill="#fff"/>
                <rect id="Rectangle_1615" data-name="Rectangle 1615" width="4.22" height="103.85" transform="translate(1289.553 209.308)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1616" data-name="Rectangle 1616" width="9.94" height="126.68" transform="translate(1317.634 186.478)" fill="#fff"/>
                <rect id="Rectangle_1617" data-name="Rectangle 1617" width="9.94" height="126.68" transform="translate(1317.634 186.478)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1618" data-name="Rectangle 1618" width="16.911" height="109.523" transform="translate(1327.574 203.635)" fill="#fff"/>
                <rect id="Rectangle_1619" data-name="Rectangle 1619" width="16.911" height="109.523" transform="translate(1327.574 203.635)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1620" data-name="Rectangle 1620" width="14.657" height="73.292" transform="translate(1449.461 239.866)" fill="#fff"/>
                <rect id="Rectangle_1621" data-name="Rectangle 1621" width="14.657" height="73.292" transform="translate(1449.461 239.866)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1622" data-name="Rectangle 1622" width="9.276" height="73.292" transform="translate(1464.118 239.866)" fill="#fff"/>
                <rect id="Rectangle_1623" data-name="Rectangle 1623" width="9.276" height="73.292" transform="translate(1464.118 239.866)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1624" data-name="Rectangle 1624" width="23.579" height="89.262" transform="translate(1473.394 223.896)" fill="#fff"/>
                <rect id="Rectangle_1625" data-name="Rectangle 1625" width="23.579" height="89.262" transform="translate(1473.394 223.896)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1626" data-name="Rectangle 1626" width="8.237" height="109.523" transform="translate(1344.485 203.635)" fill="#fff"/>
                <rect id="Rectangle_1627" data-name="Rectangle 1627" width="8.237" height="109.523" transform="translate(1344.485 203.635)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1628" data-name="Rectangle 1628" width="16.911" height="67.383" transform="translate(1505.21 245.775)" fill="#fff"/>
                <rect id="Rectangle_1629" data-name="Rectangle 1629" width="16.911" height="67.383" transform="translate(1505.21 245.775)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1630" data-name="Rectangle 1630" width="16.911" height="84.086" transform="translate(1522.121 229.072)" fill="#ede7e7"/>
                <rect id="Rectangle_1631" data-name="Rectangle 1631" width="16.911" height="84.086" transform="translate(1522.121 229.072)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1632" data-name="Rectangle 1632" width="16.911" height="67.383" transform="translate(1272.642 245.775)" fill="#fff"/>
                <rect id="Rectangle_1633" data-name="Rectangle 1633" width="16.911" height="67.383" transform="translate(1272.642 245.775)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1634" data-name="Rectangle 1634" width="16.911" height="84.086" transform="translate(1255.731 229.072)" fill="#fff"/>
                <rect id="Rectangle_1635" data-name="Rectangle 1635" width="16.911" height="84.086" transform="translate(1255.731 229.072)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1636" data-name="Rectangle 1636" width="8.237" height="109.523" transform="translate(1496.973 203.635)" fill="#fff"/>
                <rect id="Rectangle_1637" data-name="Rectangle 1637" width="8.237" height="109.523" transform="translate(1496.973 203.635)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1638" data-name="Rectangle 1638" width="25.308" height="83.3" transform="translate(1354.977 235.601) rotate(-22.099)" fill="#ede7e7"/>
                <rect id="Rectangle_1639" data-name="Rectangle 1639" width="25.308" height="83.3" transform="translate(1354.977 235.601) rotate(-22.099)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1640" data-name="Rectangle 1640" width="11.188" height="109.523" transform="translate(1391.278 211.305) rotate(-22.099)" fill="#fff"/>
                <rect id="Rectangle_1641" data-name="Rectangle 1641" width="11.188" height="109.523" transform="translate(1391.278 211.305) rotate(-22.099)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1642" data-name="Rectangle 1642" width="17.466" height="125.775" transform="translate(1366.299 196.214) rotate(-22.099)" fill="#fff"/>
                <rect id="Rectangle_1643" data-name="Rectangle 1643" width="17.466" height="125.775" transform="translate(1366.299 196.214) rotate(-22.099)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1644" data-name="Rectangle 1644" width="19.561" height="109.523" transform="translate(1321.759 17.765)" fill="#fff"/>
                <rect id="Rectangle_1645" data-name="Rectangle 1645" width="19.561" height="109.523" transform="translate(1321.759 17.765)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1646" data-name="Rectangle 1646" width="25.308" height="126.68" transform="translate(1341.321 0.608)" fill="#ede7e7"/>
                <rect id="Rectangle_1647" data-name="Rectangle 1647" width="25.308" height="126.68" transform="translate(1341.321 0.608)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1648" data-name="Rectangle 1648" width="11.207" height="109.523" transform="translate(1366.628 17.765)" fill="#fff"/>
                <rect id="Rectangle_1649" data-name="Rectangle 1649" width="11.207" height="109.523" transform="translate(1366.628 17.765)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1650" data-name="Rectangle 1650" width="19.961" height="114.802" transform="translate(1383.294 12.486)" fill="#fff"/>
                <rect id="Rectangle_1651" data-name="Rectangle 1651" width="19.961" height="114.802" transform="translate(1383.294 12.486)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1652" data-name="Rectangle 1652" width="9.98" height="114.802" transform="translate(1509.512 12.486)" fill="#fff"/>
                <rect id="Rectangle_1653" data-name="Rectangle 1653" width="9.98" height="114.802" transform="translate(1509.512 12.486)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1654" data-name="Rectangle 1654" width="25.37" height="89.262" transform="translate(1519.492 38.026)" fill="#ede7e7"/>
                <rect id="Rectangle_1655" data-name="Rectangle 1655" width="25.37" height="89.262" transform="translate(1519.492 38.026)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1656" data-name="Rectangle 1656" width="5.459" height="109.523" transform="translate(1377.835 17.765)" fill="#fff"/>
                <rect id="Rectangle_1657" data-name="Rectangle 1657" width="5.459" height="109.523" transform="translate(1377.835 17.765)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1658" data-name="Rectangle 1658" width="25.308" height="109.523" transform="translate(1403.304 25.616) rotate(-22.099)" fill="#ede7e7"/>
                <rect id="Rectangle_1659" data-name="Rectangle 1659" width="25.308" height="109.523" transform="translate(1403.304 25.616) rotate(-22.099)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1660" data-name="Rectangle 1660" width="11.187" height="109.524" transform="translate(1449.469 25.617) rotate(-22.101)" fill="#fff"/>
                <rect id="Rectangle_1661" data-name="Rectangle 1661" width="11.187" height="109.524" transform="translate(1449.469 25.617) rotate(-22.101)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <rect id="Rectangle_1662" data-name="Rectangle 1662" width="17.466" height="125.775" transform="translate(1424.491 10.525) rotate(-22.099)" fill="#fff"/>
                <rect id="Rectangle_1663" data-name="Rectangle 1663" width="17.466" height="125.775" transform="translate(1424.491 10.525) rotate(-22.099)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <line id="Line_601" data-name="Line 601" y2="65.358" transform="translate(1316.952 61.93)" fill="#fff"/>
                <line id="Line_602" data-name="Line 602" y2="65.358" transform="translate(1316.952 61.93)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <path id="Path_4778" data-name="Path 4778" d="M1555.4,143.313H1281.983a6.591,6.591,0,0,1-6.591-6.591v-2.843a6.591,6.591,0,0,1,6.591-6.591H1555.4Z" fill="#fff"/>
                <path id="Path_4779" data-name="Path 4779" d="M1555.4,143.313H1281.983a6.591,6.591,0,0,1-6.591-6.591v-2.843a6.591,6.591,0,0,1,6.591-6.591H1555.4Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.216"/>
                <path id="Path_4780" data-name="Path 4780" d="M1195.033,180.185c-3.208-3.945-5.27-10.005-5.27-16.816,0-11.889,6.265-21.526,13.993-21.526s13.992,9.637,13.992,21.526c0,6.811-2.061,12.871-5.27,16.816,3.209,3.944,5.27,10.005,5.27,16.816a28.524,28.524,0,0,1-3.827,14.763,28.533,28.533,0,0,1,3.827,14.764,29.063,29.063,0,0,1-3.348,13.953,29.062,29.062,0,0,1,3.348,13.952c0,11.889-6.264,21.527-13.992,21.527s-13.993-9.638-13.993-21.527a29.05,29.05,0,0,1,3.349-13.952,29.051,29.051,0,0,1-3.349-13.953,28.524,28.524,0,0,1,3.828-14.764A28.515,28.515,0,0,1,1189.763,197c0-6.811,2.062-12.872,5.27-16.816" fill="#e9f4e7"/>
                <path id="Path_4781" data-name="Path 4781" d="M1195.033,180.185c-3.208-3.945-5.27-10.005-5.27-16.816,0-11.889,6.265-21.526,13.993-21.526s13.992,9.637,13.992,21.526c0,6.811-2.061,12.871-5.27,16.816,3.209,3.944,5.27,10.005,5.27,16.816a28.524,28.524,0,0,1-3.827,14.763,28.533,28.533,0,0,1,3.827,14.764,29.063,29.063,0,0,1-3.348,13.953,29.062,29.062,0,0,1,3.348,13.952c0,11.889-6.264,21.527-13.992,21.527s-13.993-9.638-13.993-21.527a29.05,29.05,0,0,1,3.349-13.952,29.051,29.051,0,0,1-3.349-13.953,28.524,28.524,0,0,1,3.828-14.764A28.515,28.515,0,0,1,1189.763,197C1189.763,190.19,1191.825,184.129,1195.033,180.185Z" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.005"/>
                <line id="Line_603" data-name="Line 603" x1="1.21" y2="124.855" transform="translate(1203.151 152.605)" fill="#fff"/>
                <line id="Line_604" data-name="Line 604" x1="1.21" y2="124.855" transform="translate(1203.151 152.605)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.005"/>
                <path id="Path_4782" data-name="Path 4782" d="M1233.855,187.549c-1.8-4.757-1.837-11.158.316-17.619,3.757-11.28,12.747-18.443,20.079-16s10.229,13.566,6.471,24.846c-2.153,6.461-6.024,11.56-10.315,14.288,1.8,4.756,1.838,11.158-.315,17.619a28.516,28.516,0,0,1-8.3,12.8,28.516,28.516,0,0,1-1.035,15.217,29.049,29.049,0,0,1-7.587,12.179,29.064,29.064,0,0,1-1.232,14.3c-3.758,11.279-12.748,18.443-20.079,16s-10.229-13.566-6.472-24.845a29.05,29.05,0,0,1,7.587-12.179,29.054,29.054,0,0,1,1.233-14.3,28.521,28.521,0,0,1,8.3-12.8,28.517,28.517,0,0,1,1.035-15.217c2.152-6.461,6.024-11.56,10.314-14.288" fill="#cde8db"/>
                <path id="Path_4783" data-name="Path 4783" d="M1233.855,187.549c-1.8-4.757-1.837-11.158.316-17.619,3.757-11.28,12.747-18.443,20.079-16s10.229,13.566,6.471,24.846c-2.153,6.461-6.024,11.56-10.315,14.288,1.8,4.756,1.838,11.158-.315,17.619a28.516,28.516,0,0,1-8.3,12.8,28.516,28.516,0,0,1-1.035,15.217,29.049,29.049,0,0,1-7.587,12.179,29.064,29.064,0,0,1-1.232,14.3c-3.758,11.279-12.748,18.443-20.079,16s-10.229-13.566-6.472-24.845a29.05,29.05,0,0,1,7.587-12.179,29.054,29.054,0,0,1,1.233-14.3,28.521,28.521,0,0,1,8.3-12.8,28.517,28.517,0,0,1,1.035-15.217C1225.693,195.376,1229.565,190.277,1233.855,187.549Z" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.005"/>
                <line id="Line_605" data-name="Line 605" x1="40.61" y2="118.072" transform="translate(1210.811 164.332)" fill="#fff"/>
                <line id="Line_606" data-name="Line 606" x1="40.61" y2="118.072" transform="translate(1210.811 164.332)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.005"/>
                <path id="Path_4784" data-name="Path 4784" d="M1181.545,216.966c-4.325-2.674-8.26-7.723-10.494-14.157-3.9-11.231-1.143-22.39,6.157-24.925s16.38,4.515,20.28,15.746c2.234,6.433,2.274,12.835.537,17.614,4.325,2.673,8.261,7.723,10.494,14.156a28.523,28.523,0,0,1,1.227,15.2,28.52,28.52,0,0,1,8.459,12.691,29.043,29.043,0,0,1,1.413,14.279,29.04,29.04,0,0,1,7.74,12.082c3.9,11.231,1.143,22.391-6.157,24.925s-16.379-4.514-20.279-15.745a29.054,29.054,0,0,1-1.414-14.279,29.046,29.046,0,0,1-7.739-12.082,28.512,28.512,0,0,1-1.227-15.2,28.52,28.52,0,0,1-8.459-12.691c-2.234-6.434-2.275-12.835-.538-17.614" fill="#cde8db"/>
                <path id="Path_4785" data-name="Path 4785" d="M1181.545,216.966c-4.325-2.674-8.26-7.723-10.494-14.157-3.9-11.231-1.143-22.39,6.157-24.925s16.38,4.515,20.28,15.746c2.234,6.433,2.274,12.835.537,17.614,4.325,2.673,8.261,7.723,10.494,14.156a28.523,28.523,0,0,1,1.227,15.2,28.52,28.52,0,0,1,8.459,12.691,29.043,29.043,0,0,1,1.413,14.279,29.04,29.04,0,0,1,7.74,12.082c3.9,11.231,1.143,22.391-6.157,24.925s-16.379-4.514-20.279-15.745a29.054,29.054,0,0,1-1.414-14.279,29.046,29.046,0,0,1-7.739-12.082,28.512,28.512,0,0,1-1.227-15.2,28.52,28.52,0,0,1-8.459-12.691C1179.849,228.146,1179.808,221.745,1181.545,216.966Z" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.005"/>
                <line id="Line_607" data-name="Line 607" x2="39.812" y2="118.344" transform="translate(1181.31 187.853)" fill="#fff"/>
                <line id="Line_608" data-name="Line 608" x2="39.812" y2="118.344" transform="translate(1181.31 187.853)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.005"/>
                <path id="Path_4786" data-name="Path 4786" d="M1206.326,306.789h9.736a28.3,28.3,0,0,0,28.3-28.3v-36.2h-66.332v36.2a28.3,28.3,0,0,0,28.3,28.3" fill="#be2bbb"/>
                <path id="Path_4787" data-name="Path 4787" d="M1206.326,306.789h9.736a28.3,28.3,0,0,0,28.3-28.3v-36.2h-66.332v36.2A28.3,28.3,0,0,0,1206.326,306.789Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.005"/>
                <line id="Line_609" data-name="Line 609" x1="65.629" transform="translate(1178.255 256.785)" fill="#fff"/>
                <line id="Line_610" data-name="Line 610" x1="65.629" transform="translate(1178.255 256.785)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.005"/>
                <path id="Path_4788" data-name="Path 4788" d="M1177.556,312.028h68.793a7.077,7.077,0,0,0,7.078-7.077v-1.218h-82.948v1.218a7.076,7.076,0,0,0,7.077,7.077" fill="#be2bbb"/>
                <path id="Path_4789" data-name="Path 4789" d="M1177.556,312.028h68.793a7.077,7.077,0,0,0,7.078-7.077v-1.218h-82.948v1.218A7.076,7.076,0,0,0,1177.556,312.028Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.005"/>
                <rect id="Rectangle_1664" data-name="Rectangle 1664" width="617.434" height="336.545" transform="translate(794.488 402.481)" fill="#fff"/>
                <rect id="Rectangle_1665" data-name="Rectangle 1665" width="617.434" height="336.545" transform="translate(794.488 402.481)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path id="Path_4790" data-name="Path 4790" d="M1115.023,813.325l24.562-74.3h-72.329l-29.9,90.435h132.363V813.325Z" fill="#a59f9f"/>
                <path id="Path_4791" data-name="Path 4791" d="M1115.023,813.325l24.562-74.3h-72.329l-29.9,90.435h132.363V813.325Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <rect id="Rectangle_1666" data-name="Rectangle 1666" width="617.434" height="28.921" transform="translate(794.488 710.105)" fill="#ede7e7"/>
                <rect id="Rectangle_1667" data-name="Rectangle 1667" width="617.434" height="28.921" transform="translate(794.488 710.105)" fill="none" stroke="#5c5353" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <line id="Line_611" data-name="Line 611" y1="136.307" x2="143.192" transform="translate(1126.25 465.76)" fill="none" stroke="#707071" stroke-width="1.036"/>
                <line id="Line_612" data-name="Line 612" y1="57.431" x2="61.259" transform="translate(947.073 516.53)" fill="none" stroke="#707071" stroke-width="1.036"/>
                <line id="Line_613" data-name="Line 613" y1="136.307" x2="143.192" transform="translate(1118.997 504.098)" fill="none" stroke="#707071" stroke-width="1.036"/>
                <path id="Path_4792" data-name="Path 4792" d="M1553.172,701.524V593.512h-25.586V701.524a73.638,73.638,0,0,0-60.825,72.427c-.028,27,15.253,51.118,37.505,63.949h72.741a73.632,73.632,0,0,0-23.835-136.376" fill="#fff"/>
                <path id="Path_4793" data-name="Path 4793" d="M1553.172,701.524V593.512h-25.586V701.524a73.638,73.638,0,0,0-60.825,72.427c-.028,27,15.253,51.118,37.505,63.949h72.741a73.632,73.632,0,0,0-23.835-136.376Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.362"/>
                <path id="Path_4794" data-name="Path 4794" d="M1553.172,528.174a12.793,12.793,0,1,0-25.586,0v65.338h25.586Z" fill="#a59f9f"/>
                <path id="Path_4795" data-name="Path 4795" d="M1553.172,528.174a12.793,12.793,0,1,0-25.586,0v65.338h25.586Z" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.362"/>
                <circle id="Ellipse_77" data-name="Ellipse 77" cx="8.512" cy="8.512" r="8.512" transform="translate(1452.308 710.516)" fill="none" stroke="#a84599" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.362"/>
                <line id="Line_614" data-name="Line 614" y2="54.767" transform="translate(1460.821 655.464)" fill="none" stroke="#a84599" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.362"/>
                <path id="Path_4796" data-name="Path 4796" d="M1621.885,534.666H1458.873l-23.582,120.8h210.177Z" fill="#be2bbb"/>
                <path id="Path_4797" data-name="Path 4797" d="M1621.885,534.666H1458.873l-23.582,120.8h210.177Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.362"/>
              </g>
            </g>
            <g id="Group_1262" data-name="Group 1262">
              <g id="Group_1261" data-name="Group 1261" clip-path="url(#clip-path)">
                <path id="Path_4798" data-name="Path 4798" d="M1438.846,777.4a18.854,18.854,0,0,0-16.3,7.623l-4.324,5.857-4.073-6.034a18.856,18.856,0,0,0-15.968-8.3,14.693,14.693,0,0,0-13.957,18.377l9.815,37.867a18.583,18.583,0,0,0,17.6,13.916l5.408.114,5.408.114a18.583,18.583,0,0,0,18.168-13.164l11.4-37.42a14.693,14.693,0,0,0-13.171-18.948" fill="#a59f9f"/>
                <path id="Path_4799" data-name="Path 4799" d="M1438.846,777.4a18.854,18.854,0,0,0-16.3,7.623l-4.324,5.857-4.073-6.034a18.856,18.856,0,0,0-15.968-8.3,14.693,14.693,0,0,0-13.957,18.377l9.815,37.867a18.583,18.583,0,0,0,17.6,13.916l5.408.114,5.408.114a18.583,18.583,0,0,0,18.168-13.164l11.4-37.42A14.693,14.693,0,0,0,1438.846,777.4Z" fill="none" stroke="#a59f9f" stroke-miterlimit="10" stroke-width="1.249"/>
                <line id="Line_615" data-name="Line 615" x2="5.225" y2="35.475" transform="translate(1412.766 753.849)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.249"/>
                <path id="Path_4800" data-name="Path 4800" d="M1457.981,762.856a45.635,45.635,0,0,1-45.874-10.451,45.635,45.635,0,0,1,45.874,10.451" fill="#be2bbb"/>
                <path id="Path_4801" data-name="Path 4801" d="M1457.981,762.856a45.635,45.635,0,0,1-45.874-10.451,45.635,45.635,0,0,1,45.874,10.451Z" fill="none" stroke="#a84599" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.092"/>
                <path id="Path_4802" data-name="Path 4802" d="M1327.995,863.365c-6.76-9.151-24.225-15.668-44.708-15.668s-37.948,6.517-44.708,15.668Z" fill="#cde8db"/>
                <path id="Path_4803" data-name="Path 4803" d="M1327.995,863.365c-6.76-9.151-24.225-15.668-44.708-15.668s-37.948,6.517-44.708,15.668Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.222"/>
                <rect id="Rectangle_1669" data-name="Rectangle 1669" width="74.536" height="8.267" transform="translate(888.902 813.264) rotate(-6.811)" fill="#a59f9f"/>
                <rect id="Rectangle_1670" data-name="Rectangle 1670" width="74.536" height="8.267" transform="translate(888.902 813.264) rotate(-6.811)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.682"/>
                <path id="Path_4804" data-name="Path 4804" d="M891.718,813.355a11.989,11.989,0,0,0,11.989,11.989H860.314V799.917h31.4Z" fill="#fff"/>
                <path id="Path_4805" data-name="Path 4805" d="M891.718,813.355a11.989,11.989,0,0,0,11.989,11.989H860.314V799.917h31.4Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.682"/>
                <rect id="Rectangle_1671" data-name="Rectangle 1671" width="122.696" height="9.239" transform="translate(851.345 825.344)" fill="#be2bbb"/>
                <rect id="Rectangle_1672" data-name="Rectangle 1672" width="122.696" height="9.239" transform="translate(851.345 825.344)" fill="none" stroke="#a84599" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.682"/>
                <path id="Path_4806" data-name="Path 4806" d="M851.811,817.7l121.83-14.552L971.9,788.537a4.806,4.806,0,0,0-5.341-4.2L854.268,797.748a4.807,4.807,0,0,0-4.2,5.342Z" fill="#be2bbb"/>
                <path id="Path_4807" data-name="Path 4807" d="M851.811,817.7l121.83-14.552L971.9,788.537a4.806,4.806,0,0,0-5.341-4.2L854.268,797.748a4.807,4.807,0,0,0-4.2,5.342Z" fill="none" stroke="#a84599" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.682"/>
                <line id="Line_616" data-name="Line 616" x1="14.292" y2="1.707" transform="translate(946.218 810.86)" fill="#fff"/>
                <line id="Line_617" data-name="Line 617" x1="14.292" y2="1.707" transform="translate(946.218 810.86)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.682"/>
                <path id="Path_4808" data-name="Path 4808" d="M871.839,805.389a3.2,3.2,0,1,1,3.2,3.2,3.2,3.2,0,0,1-3.2-3.2" fill="#595454"/>
                <path id="Path_4809" data-name="Path 4809" d="M818.144,855.018l18.929,2.562-17.012-8.687" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.166"/>
                <path id="Path_4810" data-name="Path 4810" d="M837.072,857.58l-8.506-4.344-.958,3.063Z" fill="#595454"/>
                <path id="Path_4811" data-name="Path 4811" d="M837.072,857.58l-8.506-4.344-.958,3.063Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.166"/>
                <rect id="Rectangle_1673" data-name="Rectangle 1673" width="6.418" height="107.936" transform="matrix(0.299, -0.954, 0.954, 0.299, 715.136, 822.776)" fill="#be2bbb"/>
                <rect id="Rectangle_1674" data-name="Rectangle 1674" width="6.418" height="107.936" transform="matrix(0.299, -0.954, 0.954, 0.299, 715.136, 822.776)" fill="none" stroke="#a84599" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.166"/>
                <path id="Path_4812" data-name="Path 4812" d="M712.112,821.83l3.023.947,1.917-6.125-3.023-.947a3.214,3.214,0,1,0-1.917,6.125Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.166"/>
                <path id="Path_4813" data-name="Path 4813" d="M798.464,835.006l6.838.359a2.052,2.052,0,0,1-.215,4.1l-6.838-.359" fill="#ede7e7"/>
                <path id="Path_4814" data-name="Path 4814" d="M798.464,835.006l6.838.359a2.052,2.052,0,0,1-.215,4.1l-6.838-.359" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.166"/>
                <path id="Path_4815" data-name="Path 4815" d="M688.547,827.462l108.35,5.7a1.661,1.661,0,0,1,1.572,1.747l-.226,4.3a1.662,1.662,0,0,1-1.746,1.572l-108.351-5.7-.071,0c-9.9-.52-14.724-4.595-14.724-4.595s5.23-3.546,15.124-3.026Z" fill="#cde8db"/>
                <path id="Path_4816" data-name="Path 4816" d="M688.547,827.462l108.35,5.7a1.661,1.661,0,0,1,1.572,1.747l-.226,4.3a1.662,1.662,0,0,1-1.746,1.572l-108.351-5.7-.071,0c-9.9-.52-14.724-4.595-14.724-4.595s5.23-3.546,15.124-3.026Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.166"/>
                <path id="Path_4817" data-name="Path 4817" d="M769.145,828.656l26.4,1.388-.144,2.734" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.166"/>
                <line id="Line_618" data-name="Line 618" x1="0.364" y2="6.931" transform="translate(766.284 831.972)" fill="#ede7e7"/>
                <line id="Line_619" data-name="Line 619" x1="0.364" y2="6.931" transform="translate(766.284 831.972)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.166"/>
                <line id="Line_620" data-name="Line 620" x1="0.364" y2="6.931" transform="translate(768.6 832.094)" fill="#ede7e7"/>
                <line id="Line_621" data-name="Line 621" x1="0.364" y2="6.931" transform="translate(768.6 832.094)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.166"/>
                <line id="Line_622" data-name="Line 622" x1="0.364" y2="6.931" transform="translate(688.09 827.862)" fill="#ede7e7"/>
                <line id="Line_623" data-name="Line 623" x1="0.364" y2="6.931" transform="translate(688.09 827.862)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.166"/>
              </g>
            </g>
          </g>
        </g>
      </svg>*/}

      <img src="/images/transitionScreens/screen-9.svg" alt="" />

    </div>
      
  )
}
