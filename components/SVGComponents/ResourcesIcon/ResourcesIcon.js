/*===== Components =====*/
import React from "react"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function ResourcesIcon({ 
  //Props
  id, children, fillColor
}) {

  //console.log(author);

  return (
    <div className={componentStyles.ResourcesIcon}>
      <svg width="38.474" height="38.474" viewBox="0 0 38.474 38.474">
        <defs>
          <clipPath id="clip-path-ResourcesIcon">
            <rect id="Rectangle_2089" data-name="Rectangle 2089" width="38.474" height="38.474" fill="#fff"/>
          </clipPath>
        </defs>
        <g id="Group_1581" data-name="Group 1581" transform="translate(0 0)">
          <g id="Group_1581-2" data-name="Group 1581" transform="translate(0 0)" clip-path="url(#clip-path-ResourcesIcon)">
            <path id="Path_5290" data-name="Path 5290" d="M37.6,0H25.082a6.355,6.355,0,0,0-5.553,3.474A6.352,6.352,0,0,0,13.977,0H.876A.875.875,0,0,0,0,.874V33.52a.874.874,0,0,0,.876.874H14.7A3.842,3.842,0,0,1,18.612,37.9a.641.641,0,0,0,.632.575h.572a.639.639,0,0,0,.63-.575,3.843,3.843,0,0,1,3.917-3.505H37.6a.874.874,0,0,0,.876-.874V.874A.875.875,0,0,0,37.6,0M22.735,24.485A4.664,4.664,0,1,1,27.4,19.821a4.67,4.67,0,0,1-4.664,4.664M14.7,32.646H1.75V1.75H13.977a4.984,4.984,0,0,1,4.677,5.233v7.9a6.406,6.406,0,0,0,0,9.885v9.448a5.619,5.619,0,0,0-3.96-1.566m22.031-.135a.135.135,0,0,1-.135.135H24.362A5.618,5.618,0,0,0,20.4,34.212v-8.42a6.39,6.39,0,0,0,5.861-.622l4.972,4.974a.586.586,0,0,0,.825,0l.412-.414a.58.58,0,0,0,0-.823l-4.892-4.894A6.408,6.408,0,0,0,20.4,13.849v-7a4.968,4.968,0,0,1,4.677-5.1h11.51a.135.135,0,0,1,.135.135Z" transform="translate(0 -0.001)" fill="#fff"/>
          </g>
        </g>
      </svg>


    </div>
      
  )
}
