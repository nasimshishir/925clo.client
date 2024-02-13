import * as React from "react"

interface LeftAngleProps {
    color?: string
    width?: number
    height?: number
}

function LeftAngle({ color, height, width }: LeftAngleProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width ? width : 9}
            height={height ? height : 16}
            viewBox="0 0 9 16"
            fill="none"

        >
            <path d="M7.992 1l-7 7 7 7" stroke={color ? color : "#fff"} />
        </svg>
    )
}

export default LeftAngle

