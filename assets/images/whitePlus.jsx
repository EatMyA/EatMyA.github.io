import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={17}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.3 7.2h7.2v1.6H9.3V16H7.7V8.8H.5V7.2h7.2V0h1.6v7.2z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
