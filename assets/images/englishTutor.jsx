import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={47}
      height={47}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Mask
        id="prefix__a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={47}
        height={47}
      >
        <Path fill="#fff" d="M0 0h47v47H0z" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path d="M-47 0h93.95v46.995H-47V0z" fill="#fff" />
        <Path
          d="M-4.723 28.183v18.812h9.397V28.183H46.95v-9.395H4.674V0h-9.397v18.788H-47v9.395h42.277z"
          fill="#EB2D7C"
        />
        <Path
          d="M7.806 15.212V0h30.419L7.806 15.212zm0 16.57v15.213h30.419L7.806 31.782zm-15.662 0v15.213h-30.418l30.418-15.213zm0-16.57V0h-30.418l30.418 15.212zM-47 4.368v11.296h22.587L-47 4.369zm93.95 0v11.296H24.364L46.95 4.369zm0 38.258V31.33H24.363L46.95 42.626zm-93.95 0V31.33h22.587L-47 42.626z"
          fill="#543393"
        />
        <Path
          d="M46.95 0h-5.217L10.465 15.665h5.219L47 0h-.05zm-57.465 31.33h-5.218L-47 46.993h5.218l31.317-15.665h-.05zm-10.394-15.653h5.218L-47 0v2.627l26.09 13.05zm41.753 15.646h-5.218L46.934 47v-2.627l-26.09-13.05z"
          fill="#EB2D7C"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
