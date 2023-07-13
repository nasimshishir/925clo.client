import Link from 'next/link';
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // Additional props if needed
    css?: string;
    to?: string;
}

const Buttonv2: React.FC<ButtonProps> = ({ children, css, to, ...rest }) => {
    return (
        <div>
            <Link href={`${to}`}>
                <button className="btn text-white bg-trasparent border w-72 py-3 rounded-xl text-[.7rem] uppercase font-inter font-light text-center" {...rest}>
                    {children}
                </button>
            </Link>
        </div >
    );
};

export default Buttonv2;
