import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={52}
      height={52}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M36.407 25.593h-20.83"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.87 19.364a3 3 0 104.243-4.243 3 3 0 00-4.242 4.243zM23.87 36.364a3 3 0 104.243-4.243 3 3 0 00-4.242 4.243z"
        fill="#EF5DA8"
      />
    </Svg>
  )
}

export default SvgComponent
