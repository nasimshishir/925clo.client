import Link from 'next/link';
import React, { ButtonHTMLAttributes } from 'react';
import { Url } from 'url';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // Additional props if needed
    css?: string;
    to?: string;
}

const Buttonv3: React.FC<ButtonProps> = ({ children, css, to, ...rest }) => {

    return (
        <div>
            <button className={`btn text-secondary_orange bg-white w-full lg:w-72 py-3 rounded-xl text-[.7rem] uppercase font-inter font-light text-center ${css}`} {...rest}>
                {children}
            </button>
        </div >
    );
};

export default Buttonv3;
