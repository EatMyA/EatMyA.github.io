import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={21}
      height={21}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M1.988 11.59a2 2 0 012-2H17.05a2 2 0 012 2v6a2 2 0 01-2 2H3.99a2 2 0 01-2-2v-6z"
        stroke="#543393"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.777 9.591V5.955c0-2.51 2.122-4.546 4.74-4.546 2.617 0 4.739 2.035 4.739 4.546V9.59"
        stroke="#543393"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
