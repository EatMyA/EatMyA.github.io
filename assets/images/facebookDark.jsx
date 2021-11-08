import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={23}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12.387c0 5.718 4.152 10.472 9.583 11.436v-8.306H6.708v-3.194h2.875V9.767c0-2.875 1.853-4.471 4.473-4.471.83 0 1.725.127 2.555.255V8.49h-1.47c-1.405 0-1.724.702-1.724 1.598v2.235h3.066l-.51 3.194h-2.556v8.306C18.847 22.86 23 18.106 23 12.387 23 6.027 17.825.823 11.5.823S0 6.027 0 12.387z"
        fill="#2E0C59"
      />
    </Svg>
  )
}

export default SvgComponent
