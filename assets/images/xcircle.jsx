import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.366.366a1.25 1.25 0 011.768 0L8 6.232 13.866.366a1.25 1.25 0 011.768 1.768L9.768 8l5.866 5.866a1.25 1.25 0 01-1.768 1.768L8 9.768l-5.866 5.866a1.25 1.25 0 01-1.768-1.768L6.232 8 .366 2.134a1.25 1.25 0 010-1.768z"
        fill="#20203A"
      />
    </Svg>
  )
}

export default SvgComponent
