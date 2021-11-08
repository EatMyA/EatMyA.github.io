import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={22}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0_572:5054)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.772 0a8.792 8.792 0 105.363 15.748l.127-.108.127.118 6.272 6.271 1.338-1.397-6.399-6.398.108-.137a8.646 8.646 0 001.827-5.363A8.792 8.792 0 008.772 0zm0 15.973a7.21 7.21 0 117.2-7.21 7.219 7.219 0 01-7.2 7.21z"
          fill="#20203A"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_572:5054">
          <Path fill="#fff" d="M0 0h22v22H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
