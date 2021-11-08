import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={18}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M7.23 1h3.562v13.333H7.23V1zM13.465 4.333h3.561v10h-3.561v-10zM1 8.5h3.561v5.833H1V8.5z"
        stroke="#EB2D7C"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
