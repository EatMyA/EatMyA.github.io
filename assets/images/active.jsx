import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={14}
      height={10}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M1 3.5L5.696 8 13 1" stroke="#fff" strokeWidth={2} />
    </Svg>
  )
}

export default SvgComponent
