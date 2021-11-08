import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={17}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.504 13.237c-3.59 0-6.5-2.821-6.5-6.301S2.914.634 6.504.634s6.5 2.821 6.5 6.302c0 1.45-.506 2.786-1.355 3.852l4.65 4.508-1.17 1.133-4.65-4.508a6.603 6.603 0 01-3.975 1.316zm-4.5-6.302c0 2.41 2.015 4.363 4.5 4.363 2.486 0 4.5-1.953 4.5-4.363s-2.014-4.363-4.5-4.363c-2.485 0-4.5 1.954-4.5 4.363z"
        fill="#EB2D7C"
      />
    </Svg>
  )
}

export default SvgComponent
