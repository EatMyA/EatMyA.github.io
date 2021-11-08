import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={96}
      height={96}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 96C21.49 96 0 74.51 0 48S21.49 0 48 0s48 21.49 48 48-21.49 48-48 48zm0-8.726c21.69 0 39.274-17.583 39.274-39.273C87.274 26.31 69.69 8.728 48 8.728c-21.69 0-39.273 17.583-39.273 39.273 0 21.69 17.583 39.273 39.273 39.273zm14.37-55.45L39.273 54.92 29.268 44.914l-6.171 6.172 16.176 16.176 29.268-29.267-6.171-6.172z"
        fill="#EB2D7C"
      />
    </Svg>
  )
}

export default SvgComponent
