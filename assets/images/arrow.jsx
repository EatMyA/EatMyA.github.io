import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={14}
      height={9}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2 2l5 5 5-5"
        stroke="#20203A"
        strokeWidth={2}
        strokeLinecap="square"
      />
    </Svg>
  )
}

export default SvgComponent
