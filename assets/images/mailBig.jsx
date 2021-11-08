import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={64}
      height={65}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M10.665 11.166h42.667c2.933 0 5.333 2.4 5.333 5.334v32c0 2.933-2.4 5.333-5.333 5.333H10.665c-2.933 0-5.333-2.4-5.333-5.333v-32c0-2.934 2.4-5.334 5.333-5.334z"
        stroke="#EB2D7C"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M58.665 16.5L32 35.167 5.332 16.5"
        stroke="#EB2D7C"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
