import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={23}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20.7 0H2.3C1.035 0 .012 1.012.012 2.25L0 15.75C0 16.988 1.035 18 2.3 18h18.4c1.265 0 2.3-1.012 2.3-2.25V2.25C23 1.012 21.965 0 20.7 0zm-.46 4.781l-8.13 4.973a1.185 1.185 0 01-1.22 0L2.76 4.78a.972.972 0 01-.469-.597.936.936 0 01.119-.743.966.966 0 01.631-.43.999.999 0 01.754.15L11.5 7.875l7.705-4.714a.989.989 0 01.754-.15.99.99 0 01.631.43.943.943 0 01-.35 1.34z"
        fill="#543393"
      />
    </Svg>
  )
}

export default SvgComponent
