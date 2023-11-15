import Link from 'next/link';
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // Additional props if needed
    css?: string;
    to?: string;
    onClick?: () => void;
}

const Buttonv2: React.FC<ButtonProps> = ({ children, css, to, ...rest }) => {
    return (
        <div>
            {to ? <Link href={`${to}`}>
                <button className={`text-xs sm:text-sm text-white bg-trasparent border rounded-xl sec_desc uppercase font-inter font-light text-center hover:bg-white/10 hover:transition-all ${css}`} {...rest}>
                    {children}
                </button>
            </Link>
                :
                <button className={`text-xs sm:text-sm text-white bg-trasparent border rounded-xl sec_desc uppercase font-inter font-light text-center hover:bg-white/10 hover:transition-all ${css}`} {...rest}>
                    {children}
                </button>
            }
        </div >
    );
};

export default Buttonv2;
