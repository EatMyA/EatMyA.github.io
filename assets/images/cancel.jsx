import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        fill="#D6CFE6"
      />
      <Path
        d="M7.271 15.37c-.355.348-.37.986.007 1.356.37.37 1.009.356 1.357.007L12 13.367l3.365 3.36a.968.968 0 001.357-.008c.37-.37.37-.994.007-1.357l-3.365-3.358 3.365-3.366a.975.975 0 00-.007-1.357.967.967 0 00-1.357-.007L12 10.633 8.635 7.267c-.348-.349-.987-.363-1.357.007-.377.37-.362 1.008-.007 1.364l3.365 3.366-3.365 3.366z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
