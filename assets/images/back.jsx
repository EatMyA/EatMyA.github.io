import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={12}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.285 19.373l.626-.622c.196-.196.304-.457.304-.735 0-.279-.108-.54-.304-.735l-7.1-7.1 7.108-7.108c.196-.195.304-.456.304-.735 0-.278-.108-.539-.304-.735l-.623-.622a1.04 1.04 0 00-1.47 0L.335 9.443C.138 9.64 0 9.9 0 10.18v.004c0 .278.138.539.334.734l8.47 8.455c.195.196.464.303.742.304.279 0 .543-.108.739-.304z"
        fill="#EB2D7C"
      />
    </Svg>
  )
}

export default SvgComponent
