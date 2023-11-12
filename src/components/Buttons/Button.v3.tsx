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
            {to ? <Link href={`${to}`}>
                <button className={`text-secondary_orange bg-white rounded-xl text-xs sm:text-sm uppercase font-inter font-light text-center ${css}`} {...rest}>
                    {children}
                </button>
            </Link>
                :
                <button className={`text-secondary_orange bg-white rounded-xl text-xs sm:text-sm uppercase font-inter font-light text-center ${css}`} {...rest}>
                    {children}
                </button>}
        </div >
    );
};

export default Buttonv3;
