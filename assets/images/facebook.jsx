import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={23}
      height={23}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 11.564C0 17.282 4.152 22.036 9.583 23v-8.306H6.708V11.5h2.875V8.944c0-2.875 1.853-4.471 4.473-4.471.83 0 1.725.127 2.555.254v2.94h-1.47c-1.405 0-1.724.702-1.724 1.597V11.5h3.066l-.51 3.194h-2.556V23C18.847 22.036 23 17.283 23 11.564 23 5.204 17.825 0 11.5 0S0 5.204 0 11.564z"
        fill="#543393"
      />
    </Svg>
  )
}

export default SvgComponent
