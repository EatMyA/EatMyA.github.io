import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={23}
      height={19}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M3.138 1.5h16.727c1.15 0 2.091.9 2.091 2v12c0 1.1-.94 2-2.09 2H3.137c-1.15 0-2.091-.9-2.091-2v-12c0-1.1.94-2 2.09-2z"
        stroke="#543393"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.956 3.5l-10.455 7-10.454-7"
        stroke="#543393"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
