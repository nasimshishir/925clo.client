import * as React from "react"

function SvgComponent() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={20}
            viewBox="0 0 12 20"
            fill="none"
        >
            <rect
                x={0.5}
                y={10.1094}
                width={11}
                height={9.28571}
                rx={1.5}
                stroke="#000"
            />
            <path
                d="M9.638 9.826V4.429A3.429 3.429 0 006.21 1v0A3.429 3.429 0 002.78 4.429v1.758"
                stroke="#000"
            />
        </svg>
    )
}

export default SvgComponent
