import * as React from "react"

interface RightAngleProps {
    color?: string
    width?: number
    height?: number
}

function RightAngle({ color, height, width }: RightAngleProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width ? width : 9}
            height={height ? height : 16}
            viewBox="0 0 9 16"
            fill="none"

        >
            <path d="M1.008 1l7 7-7 7" stroke={color ? color : "#fff"} />
        </svg>
    )
}

export default RightAngle

