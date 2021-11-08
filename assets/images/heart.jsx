import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={23}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.196 19.741a.729.729 0 01-.53-.22l-8.84-8.84a6.261 6.261 0 118.87-8.84l.53.53.47-.53a6.25 6.25 0 018.84 8.84l-8.84 8.84a.74.74 0 01-.5.22zm-4.95-18.23a4.71 4.71 0 00-3.36 1.39 4.76 4.76 0 000 6.72l8.31 8.31 8.31-8.31a4.76 4.76 0 000-6.72 4.76 4.76 0 00-6.72 0l-1.09 1.06a.75.75 0 01-1.06 0l-1.03-1.06a4.74 4.74 0 00-3.36-1.39z"
        fill="#F2F0F5"
      />
    </Svg>
  )
}

export default SvgComponent
