import * as React from "react"
import {memo, SVGProps} from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="16px"
        height="16px"
        fill="currentColor"
        viewBox="0 0 32 32"
        {...props}
    >
            <path fill="currentColor"
                d="M29 0H7a3 3 0 0 0-3 3v2H3a3 3 0 0 0-3 3v20a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V3a3 3 0 0 0-3-3zm1 28c0 1.102-.898 2-2 2H4c-1.103 0-2-.898-2-2V8a1 1 0 0 1 1-1h1v20a1 1 0 1 0 2 0V3a1 1 0 0 1 1-1h22c.551 0 1 .448 1 1v25z"/>
            <path
                fill="currentColor"
                d="M19.498 13.005h8a.5.5 0 1 0 0-1h-8a.5.5 0 0 0 0 1zm0-3h8a.5.5 0 1 0 0-1h-8a.5.5 0 0 0 0 1zm0-3h8a.5.5 0 1 0 0-1h-8a.5.5 0 0 0 0 1zM16.5 27.004h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm0-3h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm0-3h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm11 6h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm0-3h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm0-3h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm0-6h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1zm0 3h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1zM9 13h7a1 1 0 0 0 1-1V5.004a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1V12a1 1 0 0 0 1 1zm1-7h5v5h-5V6z"/>
    </svg>
)

const NewsIcon = memo(SvgComponent)
export default NewsIcon