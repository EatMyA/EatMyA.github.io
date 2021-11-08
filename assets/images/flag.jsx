import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={21}
      height={13}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M.035.043h20.92v12.912H.034V.043z" fill="#fff" />
      <Path
        d="M9.449 7.786v5.17h2.092v-5.17h9.413v-2.58h-9.413V.042H9.449v5.162H.035v2.581H9.45z"
        fill="#CF142B"
      />
      <Path
        d="M12.239 4.223V.043h6.773l-6.774 4.18zm0 4.553v4.18h6.773l-6.774-4.18zm-3.488 0v4.18H1.978l6.773-4.18zm0-4.553V.043H1.978l6.773 4.18zM.035 1.243v3.104h5.03L.034 1.243zm20.92 0v3.104h-5.03l5.03-3.104zm0 10.512V8.651h-5.03l5.03 3.104zm-20.92 0V8.651h5.03l-5.03 3.104z"
        fill="#00247D"
      />
      <Path
        d="M20.954.043h-1.162L12.83 4.347h1.162L20.965.043h-.01zM8.16 8.651H6.997L.035 12.955h1.162L8.17 8.651h-.01zm-2.314-4.3h1.161L.036.042v.722L5.844 4.35zm9.296 4.298H13.98l6.972 4.308v-.722l-5.81-3.586z"
        fill="#CF142B"
      />
    </Svg>
  )
}

export default SvgComponent
