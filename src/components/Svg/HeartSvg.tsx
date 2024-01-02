import * as React from "react"

interface heartProps {
    color?: string
}

function HeartSvg(props: heartProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={23}
            height={20}
            viewBox="0 0 23 20"
            fill="none"
        >
            <path
                d="M9.858 2.567L11.5 3.84l1.642-1.272a5.585 5.585 0 017.142 8.58L11.5 19l-8.783-7.853a5.585 5.585 0 017.14-8.58z"
                stroke={props.color ? props.color : '#000'}
            />
        </svg>
    )
}

export default HeartSvg;
