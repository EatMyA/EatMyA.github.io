import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={27}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.943 20.562L22.806 23v-2.438h1.27c.7 0 1.269-.574 1.269-1.282v-7.69c0-.708-.569-1.282-1.27-1.282H13.922c-.701 0-1.27.574-1.27 1.281v7.691c0 .708.569 1.282 1.27 1.282h5.021z"
        stroke="#20203A"
        strokeWidth={1.5}
      />
      <Path
        d="M10.187 14.672l-5.15 3.251v-3.25H3.345a1.7 1.7 0 01-1.693-1.71V2.71A1.7 1.7 0 013.345 1h13.538a1.7 1.7 0 011.692 1.709v10.254a1.7 1.7 0 01-1.692 1.71h-6.696z"
        fill="#fff"
        stroke="#20203A"
        strokeWidth={1.5}
      />
    </Svg>
  )
}

export default SvgComponent
