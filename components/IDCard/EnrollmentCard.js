/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import Date from '@components/date'
import SocialIcons from '@components/SocialIcons'
import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function IDCard({ 
  //Props
  text, link, cardID, 
  color, animation, animationDelay
}) {

  //console.log(author);

  return (
    <svg  width="277.719" height="363.511" viewBox="0 0 277.719 363.511">
      <g id="Enrollment" transform="translate(-85.933 -2992.001)">
        <g id="Group_873" data-name="Group 873">
          <g id="Background">
            <g id="Group_98" data-name="Group 98">
              <g id="Group_97" data-name="Group 97">
                <path id="Path_137" data-name="Path 137" d="M349.943,3355.512H99.642A13.708,13.708,0,0,1,85.933,3341.8V3005.71A13.708,13.708,0,0,1,99.642,2992h250.3a13.708,13.708,0,0,1,13.709,13.709V3341.8a13.708,13.708,0,0,1-13.709,13.709ZM186.873,3008.4a7.956,7.956,0,0,0,0,15.911h75.839a7.956,7.956,0,0,0,0-15.911Z" fill="#fff"/>
              </g>
            </g>
          </g>
          <text id="Enrollment-2" data-name="Enrollment" transform="translate(108.359 3196.626)" fill="#453939" fontSize="30"  fontWeight="700"><tspan x="0" y="32">Enrollment</tspan></text>
          <g id="EnrollmentIcon">
            <path id="Path_145" data-name="Path 145" d="M259.2,3111.316v32.123a1.931,1.931,0,0,1-2.031,1.813H196.244a1.931,1.931,0,0,1-2.031-1.813v-76.117a1.931,1.931,0,0,1,2.031-1.813h60.928a1.931,1.931,0,0,1,2.031,1.813v38.971l-4.062,3.543v-40.7H198.275v72.493h56.866v-26.769Zm-51.451-27.867v-.677a1.015,1.015,0,0,1,1.016-1.015h35.88a1.015,1.015,0,0,1,1.015,1.015v.677a1.015,1.015,0,0,1-1.015,1.016h-35.88a1.015,1.015,0,0,1-1.016-1.016m22,13.2H208.768a1.015,1.015,0,0,1-1.016-1.015v-.677a1.016,1.016,0,0,1,1.016-1.016h20.986a1.016,1.016,0,0,1,1.016,1.016v.677a1.015,1.015,0,0,1-1.016,1.015m-4.4,10.494v.677a1.015,1.015,0,0,1-1.016,1.015h-15.57a1.015,1.015,0,0,1-1.016-1.015v-.677a1.015,1.015,0,0,1,1.016-1.016h15.57a1.015,1.015,0,0,1,1.016,1.016" fill="#453838"/>
            <path id="Path_146" data-name="Path 146" d="M242.971,3124.762l-9.045-8.841a1.353,1.353,0,0,1,0-1.937l.942-.92a1.364,1.364,0,0,1,1.893,0l7.63,7.457,22.4-21.9a1.365,1.365,0,0,1,1.893,0l.942.921a1.352,1.352,0,0,1,0,1.937l-23.817,23.279a2.046,2.046,0,0,1-2.838,0" fill="#671112"/>
          </g>
          <path id="Accent" d="M0,0H276.854a0,0,0,0,1,0,0V60.357A14.256,14.256,0,0,1,262.6,74.613H14.256A14.256,14.256,0,0,1,0,60.357V0A0,0,0,0,1,0,0Z" transform="translate(85.933 3280.899)" fill="#fdd7c2" opacity="0.6"/>
          <g id="BmsLogo">
            <g id="Group_108" data-name="Group 108">
              <path id="Path_152" data-name="Path 152" d="M255.861,3334.316a.292.292,0,0,1-.207-.4l.207-.714c.063-.206.222-.238.412-.158a6.224,6.224,0,0,0,2.252.46c1.079,0,2.221-.508,2.221-1.761,0-.888-.523-1.348-1.4-1.808l-2.014-1.079a2.866,2.866,0,0,1-1.745-2.569c0-1.824,1.7-2.807,3.363-2.807a5.81,5.81,0,0,1,2.585.507c.19.095.238.206.174.381l-.238.634c-.063.191-.206.238-.412.143a5.148,5.148,0,0,0-2.03-.46c-.888,0-1.92.413-1.92,1.475,0,.825.476,1.237,1.238,1.634l1.7.9c1.269.666,2.157,1.459,2.157,2.934,0,2.078-1.729,3.124-3.68,3.124A8.287,8.287,0,0,1,255.861,3334.316Zm7.612-2.426v-4.632a.278.278,0,0,1,.317-.317h.73c.206,0,.3.095.3.317v4.426c0,1.126.254,1.919,1.523,1.919a3.52,3.52,0,0,0,2.093-.936v-5.409a.278.278,0,0,1,.317-.317h.73c.206,0,.3.095.3.317v7.027c0,.222-.079.317-.3.317h-.7c-.19,0-.3-.079-.3-.286l-.016-.507a3.832,3.832,0,0,1-2.506.951C264.139,3334.76,263.473,3333.587,263.473,3331.89Zm8.1,5.789v-10.421c0-.222.079-.317.3-.317h.651c.19,0,.3.08.3.286l.016.555a3.231,3.231,0,0,1,2.363-1.015c2.252,0,3.251,1.887,3.251,3.933,0,2.11-1.142,4.06-3.441,4.06a2.743,2.743,0,0,1-2.094-.888v3.807a.29.29,0,0,1-.317.333h-.714A.29.29,0,0,1,271.577,3337.679Zm5.472-6.947c0-1.38-.46-2.887-2.11-2.887a2.666,2.666,0,0,0-2.014,1.015v3.728a2.3,2.3,0,0,0,1.919,1.11C276.478,3333.7,277.049,3332.143,277.049,3330.732Zm2.838,6.947v-10.421c0-.222.079-.317.3-.317h.651c.19,0,.3.08.3.286l.016.555a3.231,3.231,0,0,1,2.363-1.015c2.252,0,3.251,1.887,3.251,3.933,0,2.11-1.142,4.06-3.442,4.06a2.742,2.742,0,0,1-2.093-.888v3.807a.29.29,0,0,1-.317.333H280.2A.29.29,0,0,1,279.887,3337.679Zm5.471-6.947c0-1.38-.459-2.887-2.109-2.887a2.666,2.666,0,0,0-2.014,1.015v3.728a2.3,2.3,0,0,0,1.919,1.11C284.787,3333.7,285.358,3332.143,285.358,3330.732Zm2.474.016c0-2.237,1.284-3.981,3.648-3.981,2.458,0,3.568,1.7,3.568,4,0,2.236-1.3,4-3.663,4C288.926,3334.76,287.832,3333.016,287.832,3330.748Zm5.821.032c0-1.475-.54-2.966-2.189-2.966-1.713,0-2.237,1.506-2.237,2.9,0,1.459.492,3,2.174,3C293.066,3333.714,293.653,3332.254,293.653,3330.78Zm2.758,3.489v-7.011c0-.222.08-.317.3-.317h.7c.19,0,.3.08.3.286l.016.539a2.209,2.209,0,0,1,1.855-1c.349,0,.587.047.555.285l-.111.714a.2.2,0,0,1-.222.19,4.112,4.112,0,0,0-.46-.047,2.076,2.076,0,0,0-1.586.951v5.409a.29.29,0,0,1-.317.333h-.714A.29.29,0,0,1,296.411,3334.269Zm5.678-2.015v-4.361h-.873c-.174,0-.237-.064-.237-.238v-.476c0-.174.063-.238.237-.238h.873v-1.792c0-.206.047-.3.238-.333l.793-.111c.222-.032.317.063.317.27v1.966h1.856c.174,0,.237.064.237.238v.476c0,.174-.063.238-.237.238h-1.856v4.266c0,1.031.19,1.539,1.126,1.539a2.9,2.9,0,0,0,.967-.175c.159-.063.286-.031.334.143l.142.476c.048.174-.016.254-.206.333a4.534,4.534,0,0,1-1.491.285C302.47,3334.76,302.089,3333.872,302.089,3332.254ZM312.4,3335.7l5.157-5.157a.623.623,0,0,0,0-.88l-5.157-5.156a.622.622,0,0,0-.88.879l4.717,4.717-4.717,4.717a.622.622,0,0,0,.88.88Zm-6.179-10.14a1.259,1.259,0,0,1,2.518,0,1.259,1.259,0,0,1-2.518,0Zm2.288,0a1.029,1.029,0,1,0-1.029,1.025A.984.984,0,0,0,308.509,3325.565Zm-1.385.576V3325c0-.035.014-.045.046-.045h.254c.255,0,.454.087.454.366a.363.363,0,0,1-.241.342l.287.478c.013.024.017.045-.025.045h-.119a.059.059,0,0,1-.059-.031l-.262-.457h-.146v.443c0,.034-.014.045-.042.045h-.105C307.138,3326.186,307.124,3326.175,307.124,3326.141Zm.311-.593a.221.221,0,0,0,.251-.223c0-.161-.1-.217-.276-.217h-.1v.44ZM202.668,3308a.887.887,0,1,0,1.774,0v-5.951a.887.887,0,0,0-1.774,0Zm-2.83-1.165a.915.915,0,0,0,1.829,0v-8.805a.915.915,0,1,0-1.829,0Zm-2.831-.675a.915.915,0,1,0,1.83,0v-9.809a.915.915,0,0,0-1.83,0Zm-2.83.212a.914.914,0,1,0,1.829,0v-7.295a.914.914,0,1,0-1.829,0Zm2.637,8.286a.9.9,0,0,1-.8.5.882.882,0,0,1-.388-.089,7.234,7.234,0,0,1-4.275-6.911v-3.575a.891.891,0,1,1,1.782,0v3.575a5.486,5.486,0,0,0,3.271,5.307.892.892,0,0,1,.412,1.191" fill="#595454"/>
              <path id="Path_153" data-name="Path 153" d="M208.158,3334.285l3.981-10.389a.3.3,0,0,1,.285-.222h.841a.278.278,0,0,1,.286.19l3.917,10.421c.079.19.047.317-.206.317h-1.015c-.222,0-.317-.064-.381-.254l-1.063-2.982H210.7l-1.1,2.982c-.063.19-.158.254-.38.254h-.873C208.11,3334.6,208.079,3334.475,208.158,3334.285Zm6.265-4.013-1.634-4.71h-.016l-1.7,4.71Zm3.631.508a3.674,3.674,0,0,1,3.791-4.013,4.676,4.676,0,0,1,2.046.46c.142.079.206.174.142.333l-.174.491c-.048.143-.143.207-.333.127a3.717,3.717,0,0,0-1.618-.364c-1.507,0-2.459,1.126-2.459,2.9,0,1.618.7,3.014,2.4,3.014a4.02,4.02,0,0,0,1.76-.365.214.214,0,0,1,.317.127l.143.444c.063.19.032.285-.174.38a5.026,5.026,0,0,1-2.142.444C219.259,3334.76,218.054,3333.143,218.054,3330.78Zm6.708,0a3.674,3.674,0,0,1,3.791-4.013,4.676,4.676,0,0,1,2.046.46c.142.079.206.174.142.333l-.174.491c-.048.143-.143.207-.333.127a3.717,3.717,0,0,0-1.618-.364c-1.506,0-2.458,1.126-2.458,2.9,0,1.618.7,3.014,2.395,3.014a4.02,4.02,0,0,0,1.76-.365.214.214,0,0,1,.317.127l.143.444c.063.19.032.285-.174.38a5.026,5.026,0,0,1-2.142.444C225.967,3334.76,224.762,3333.143,224.762,3330.78Zm6.677-.016c0-2.316,1.364-4,3.647-4a3.048,3.048,0,0,1,3.109,3.362v.4c0,.365-.064.444-.476.444H232.85a2.457,2.457,0,0,0,2.442,2.68,5.085,5.085,0,0,0,1.951-.333c.143-.063.286-.063.349.111l.19.524c.064.174.016.253-.158.349a6.186,6.186,0,0,1-2.506.459C232.707,3334.76,231.439,3333.143,231.439,3330.764Zm5.424-.714v-.285a1.769,1.769,0,0,0-1.84-1.951,2.194,2.194,0,0,0-2.141,2.236Zm2.521,4.2c-.143-.079-.207-.174-.143-.317l.206-.539a.2.2,0,0,1,.3-.143,5.1,5.1,0,0,0,1.84.476c.92,0,1.539-.46,1.539-1.206,0-.618-.444-.952-1.19-1.237l-1.062-.412a2.158,2.158,0,0,1-1.586-2c0-1.4,1.237-2.109,2.632-2.109a4.755,4.755,0,0,1,2.047.428.218.218,0,0,1,.142.3l-.19.524c-.048.158-.159.19-.317.127a4.614,4.614,0,0,0-1.65-.381c-.936,0-1.348.476-1.348,1.015s.365.793,1.031,1.079l1.221.523a2.234,2.234,0,0,1,1.6,2.014c0,1.459-1.221,2.363-2.9,2.363A5.1,5.1,0,0,1,239.384,3334.253Zm6.279,0c-.142-.079-.206-.174-.142-.317l.206-.539a.2.2,0,0,1,.3-.143,5.1,5.1,0,0,0,1.84.476c.92,0,1.539-.46,1.539-1.206,0-.618-.444-.952-1.19-1.237l-1.063-.412a2.159,2.159,0,0,1-1.586-2c0-1.4,1.237-2.109,2.633-2.109a4.747,4.747,0,0,1,2.046.428.219.219,0,0,1,.143.3l-.19.524c-.048.158-.159.19-.317.127a4.614,4.614,0,0,0-1.65-.381c-.936,0-1.348.476-1.348,1.015s.365.793,1.031,1.079l1.221.523a2.234,2.234,0,0,1,1.6,2.014c0,1.459-1.221,2.363-2.9,2.363A5.1,5.1,0,0,1,245.663,3334.253Zm70.408-32.285c0,.648-.3.952-.811.952s-.811-.3-.811-.952.295-.969.811-.969.811.322.811.969m14.254,6.613c0,1.994-.7,2.643-1.836,2.643s-1.835-.649-1.835-2.643V3307.5c0-1.994.7-2.642,1.835-2.642s1.836.648,1.836,2.642Zm-1.677-4.889a2.021,2.021,0,0,0-1.915,1.171h-.063v-3.7h-1.329v11.076h1.329v-1.012h.063a2.022,2.022,0,0,0,1.915,1.17c2.073,0,3.022-1.424,3.022-3.734v-1.234c0-2.31-.949-3.734-3.022-3.734m-5.956,4.889c0,1.994-.7,2.643-1.836,2.643s-1.835-.649-1.835-2.643V3307.5c0-1.994.7-2.642,1.835-2.642s1.836.648,1.836,2.642Zm-1.678-4.889a2.02,2.02,0,0,0-1.914,1.171h-.063v-3.7h-1.329v11.076h1.329v-1.012h.063a2.021,2.021,0,0,0,1.914,1.17c2.073,0,3.023-1.424,3.023-3.734v-1.234c0-2.31-.95-3.734-3.023-3.734m-6.418.158h1.329v8.386H314.6Zm-3.036,0h1.329v8.386H311.56v-1.076H311.5a2.155,2.155,0,0,1-2.058,1.234c-1.566,0-2.531-.886-2.531-2.864v-5.68h1.345v5.491c0,1.345.554,1.93,1.551,1.93.965,0,1.756-.649,1.756-2.278Zm-9.254,7.374c-1.139,0-1.835-.649-1.835-2.643V3307.5c0-1.994.7-2.642,1.835-2.642s1.836.648,1.836,2.642v1.076c0,1.994-.7,2.643-1.836,2.643m1.82-6.361h-.065a2.035,2.035,0,0,0-1.913-1.171c-2.073,0-3.022,1.424-3.022,3.734v1.234c0,2.31.949,3.734,3.022,3.734a2.036,2.036,0,0,0,1.913-1.17h.065v3.7h1.329V3303.85h-1.329Zm-6.006,4.446c0,1.978-1.36,3.085-3.449,3.085-1.962,0-3.576-.949-3.782-3.069h1.472a2.063,2.063,0,0,0,2.294,1.835,1.785,1.785,0,0,0,2.041-1.772c0-3.149-5.633-1.329-5.633-5.459,0-1.772,1.408-2.927,3.371-2.927,1.9,0,3.481.933,3.576,3.117h-1.472a1.911,1.911,0,0,0-2.12-1.883c-1.345,0-1.931.791-1.931,1.63,0,2.785,5.633,1.139,5.633,5.443m-10.564.617c0,1.614-1.2,2.468-2.959,2.468s-2.942-.759-3.037-2.468h1.329c.047,1.029.807,1.361,1.708,1.361s1.63-.4,1.63-1.266c0-2.041-4.572-.633-4.572-3.94,0-1.377,1.013-2.389,2.863-2.389,1.694,0,2.817.839,2.944,2.468h-1.329a1.423,1.423,0,0,0-1.615-1.361c-.965,0-1.566.443-1.566,1.282,0,1.978,4.6.76,4.6,3.845m-7.119-6.076h.411v1.3h-.333c-1.328,0-2.2.664-2.2,2.421v4.667h-1.329v-8.386h1.329v1.5h.064a2.037,2.037,0,0,1,2.057-1.5m-7.951,1.013c1.077,0,1.66.634,1.676,2.563h-3.509c.018-1.929.71-2.563,1.833-2.563m0-1.171c-2.072,0-3.18,1.487-3.18,3.734v1.234c0,2.31,1.108,3.734,3.18,3.734a2.822,2.822,0,0,0,2.975-2.484H274.1a1.489,1.489,0,0,1-1.614,1.314c-1.139,0-1.835-.649-1.835-2.643v-.111h4.857v-1.044c0-2.247-.949-3.734-3.022-3.734m-4.916.158h1.345l-3.718,11.076h-1.376l.933-2.626-2.722-8.45h1.409l2.009,6.535h.064Zm-8.719-2.69h2.256v11.076H259.7V3302.7h-.079l-2.832,7.707h-1.725l-2.8-7.707h-.08v9.541H250.79V3301.16h2.366l2.792,7.693h.08Zm-14.15,0h1.329v11.076H244.7Zm-2.75,7.421c0,1.994-.7,2.643-1.835,2.643s-1.835-.649-1.835-2.643V3307.5c0-1.994.7-2.642,1.835-2.642s1.835.648,1.835,2.642Zm-1.835-4.889c-2.073,0-3.18,1.424-3.18,3.734v1.234c0,2.31,1.107,3.734,3.18,3.734s3.18-1.424,3.18-3.734v-1.234c0-2.31-1.107-3.734-3.18-3.734m-5.73.158h1.8v1.171h-1.8v4.636c0,1.218.316,1.471,1.123,1.471.221,0,.475-.031.681-.047v1.14a5.039,5.039,0,0,1-.823.079c-1.646,0-2.31-.649-2.31-2.438v-4.841h-1.409v-1.171h1.409v-2.69h1.329Zm-3.067,6.076c0,1.614-1.2,2.468-2.959,2.468-1.772,0-2.943-.759-3.038-2.468h1.329c.048,1.029.807,1.361,1.709,1.361s1.63-.4,1.63-1.266c0-2.041-4.573-.633-4.573-3.94,0-1.377,1.012-2.389,2.864-2.389,1.693,0,2.816.839,2.943,2.468H229.9a1.423,1.423,0,0,0-1.614-1.361c-.965,0-1.566.443-1.566,1.282,0,1.978,4.6.76,4.6,3.845m-7.227-7.958c0,.648-.294.952-.811.952s-.811-.3-.811-.952.295-.969.811-.969.811.322.811.969m-1.475,1.882h1.329v8.386h-1.329Zm-1.594,0h.411v1.3H221.1c-1.329,0-2.2.664-2.2,2.421v4.667h-1.328v-8.386H218.9v1.5h.064a2.037,2.037,0,0,1,2.057-1.5m-6.114,5.269c0,1.37-1.079,1.883-2.655,1.883h-1.81v-3.993h1.836c1.551,0,2.629.515,2.629,1.936Zm-4.465-6.709h1.628c1.551,0,2.342.587,2.342,1.64v.111c0,1.27-1.1,1.677-2.54,1.677h-1.43Zm3.471,3.906,0-.055a2.346,2.346,0,0,0,1.865-2.325v-.19c0-1.419-1.154-2.586-3.507-2.586H209.02v11.076h3.491c2.287,0,3.857-1.149,3.857-2.99v-.111a2.762,2.762,0,0,0-2.453-2.819m118.074-2.918v-1.982h.6v-.256H331.1v.256h.594v1.982Zm2.957,0v-2.238h-.473l-.553,1.733H333.9l-.547-1.733h-.495v2.238h.281v-1.928h.016l.607,1.928h.269l.61-1.928h.016v1.928Zm-3.1,14.6a.177.177,0,0,0-.178-.177H209.024a.177.177,0,0,0,0,.355H331.67A.178.178,0,0,0,331.848,3318Z" fill="#595454"/>
            </g>
          </g>
          <g id="RadioWavesIcon">
            <path id="Path_160" data-name="Path 160" d="M132.327,3319.009c0,.021,0,.043,0,.065a10.014,10.014,0,0,0,1.9,5.863,6.558,6.558,0,0,0,.44.57,1.814,1.814,0,0,0,2.7-2.419s-.022-.024-.054-.065l.008-.008.014.014a1.912,1.912,0,0,1-.17-.207,6.606,6.606,0,0,1,0-7.619,2.191,2.191,0,0,1,.172-.21l-.014.014-.008-.007c.032-.041.054-.066.054-.066a1.814,1.814,0,0,0-2.705-2.418,6.608,6.608,0,0,0-.441.573,10.013,10.013,0,0,0-1.894,5.859Z" fill="#671112"/>
            <path id="Path_161" data-name="Path 161" d="M129.656,3308.744a1.779,1.779,0,0,1,1.413,2.861,13.244,13.244,0,0,0-2.044,7.347,14.577,14.577,0,0,0,2.082,7.641,1.78,1.78,0,0,1-2.9,2.059,17.832,17.832,0,0,1-2.739-9.7,16.527,16.527,0,0,1,2.776-9.509A1.778,1.778,0,0,1,129.656,3308.744Z" fill="#671112"/>
            <path id="Path_162" data-name="Path 162" d="M123.126,3305.346a1.78,1.78,0,0,1,1.424,2.846,19.466,19.466,0,0,0-2.94,10.712,21.039,21.039,0,0,0,2.977,11.1,1.781,1.781,0,1,1-2.926,2.03,24.5,24.5,0,0,1-3.612-13.131,22.615,22.615,0,0,1,3.649-12.843A1.777,1.777,0,0,1,123.126,3305.346Z" fill="#671112"/>
            <path id="Path_163" data-name="Path 163" d="M116.688,3301.819a1.781,1.781,0,0,1,1.425,2.846,25.7,25.7,0,0,0-3.913,14.189,28.107,28.107,0,0,0,3.953,14.682,1.78,1.78,0,0,1-2.928,2.026,31.153,31.153,0,0,1-4.586-16.708c0-10.019,4.433-16.068,4.622-16.32A1.776,1.776,0,0,1,116.688,3301.819Z" fill="#671112"/>
          </g>
        </g>
      </g>
    </svg>

  )
}
