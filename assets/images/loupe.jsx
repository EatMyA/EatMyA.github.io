import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={23}
      height={23}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.3 18.1a8.8 8.8 0 116.952-3.404l5.926 5.926-1.556 1.556-5.926-5.926A8.762 8.762 0 019.3 18.1zm6.6-8.8a6.6 6.6 0 11-13.2 0 6.6 6.6 0 0113.2 0z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
