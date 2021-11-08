import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={16}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.563 9.2L14.621 0 16 1.4 5.563 12 0 6.35l1.379-1.4L5.563 9.2z"
        fill="#EB2D7C"
      />
    </Svg>
  )
}

export default SvgComponent
