import Link from 'next/link';
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // Additional props if needed
    css?: string;
    to?: string;
}

const Buttonv1: React.FC<ButtonProps> = ({ children, css, to, ...rest }) => {

    return (
        <div>
            {to ? <Link href={`${to}`}>
                <button className={`text-xs sm:text-sm text-white bg-primary_orange border border-primary_orange rounded-[1rem] uppercase font-inter font-light text-center hover:bg-secondary_orange hover:transition-all ${css}`} {...rest}>
                    {children}
                </button>
            </Link> :
                <button className={`text-xs sm:text-sm text-white bg-primary_orange border border-primary_orange rounded-[1rem] uppercase font-inter font-light text-center hover:bg-secondary_orange hover:transition-all ${css}`} {...rest}>
                    {children}
                </button>
            }
        </div >
    );
};

export default Buttonv1;
