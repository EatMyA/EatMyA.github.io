import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={10}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.8 2.957v1.774h-.6c-.641 0-1.2.46-1.2 1.084v4.929c0 .625.559 1.084 1.2 1.084h7.2c.641 0 1.2-.46 1.2-1.084V5.815c0-.625-.559-1.084-1.2-1.084h-.6V2.957C7.8 1.324 6.457 0 4.8 0s-3 1.324-3 2.957zm4.8 0v1.774H3V2.957c0-.98.806-1.774 1.8-1.774s1.8.794 1.8 1.774zm-5.4 7.688v-4.73h7.2v4.73H1.2zM5.4 8.28a.596.596 0 01-.6.591.596.596 0 01-.6-.591c0-.327.269-.592.6-.592.331 0 .6.265.6.592z"
        fill="#20203A"
      />
    </Svg>
  )
}

export default SvgComponent
