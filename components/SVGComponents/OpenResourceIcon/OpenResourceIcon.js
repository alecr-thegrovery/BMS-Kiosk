/*===== Components =====*/
import React from "react"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function OpenResourceIcon({ 
  //Props
  id, children, fillColor
}) {

  //console.log(author);

  return (
    <div className={componentStyles.OpenResourceIcon}>
      <svg  width="43.584" height="39.992" viewBox="0 0 43.584 39.992">
        <defs>
          <clipPath id="clip-path-OpenResourceIcon">
            <rect id="Rectangle_2126" data-name="Rectangle 2126" width="43.584" height="39.992" fill="none"/>
          </clipPath>
        </defs>
        <g id="Group_1640" data-name="Group 1640" transform="translate(0 0)">
          <g id="Group_1639" data-name="Group 1639" transform="translate(0 0)" clip-path="url(#clip-path-OpenResourceIcon)">
            <path id="Path_5346" data-name="Path 5346" d="M32.016,5.078l9.011,9.381-9.011,9.381V19.1l-2.69,0a31.646,31.646,0,0,0-17.173,5.446c.927-5.011,3.153-8.781,6.651-11.25A19.922,19.922,0,0,1,29.393,10l2.623-.065V5.078ZM29.33,7.2C24.506,7.321,8.859,9.346,8.972,30.6c0,0,8.346-8.674,20.358-8.691v5.6a1.222,1.222,0,0,0,2.094.908L42.7,16.673a3.222,3.222,0,0,0,0-4.427L31.278.351a1.136,1.136,0,0,0-1.948.843Zm-27.7,32.79H34.47V32.519a.443.443,0,0,0-.76-.328l-1.679,1.751a.481.481,0,0,0-.13.329V37.1H3.17V10.651a.587.587,0,0,0-.574-.6H.574a.587.587,0,0,0-.574.6V38.289a1.668,1.668,0,0,0,1.631,1.7" transform="translate(0 0)" fill="#595454"/>
            <path id="Path_5347" data-name="Path 5347" d="M29.838,3.994l9.011,9.381-9.011,9.381V18.014l-2.691,0A31.652,31.652,0,0,0,9.975,23.464c.927-5.011,3.153-8.781,6.651-11.25A19.918,19.918,0,0,1,27.215,8.921l2.623-.065V3.994Z" transform="translate(2.178 1.085)" fill="#c0f2fb"/>
          </g>
        </g>
      </svg>


    </div>
      
  )
}
