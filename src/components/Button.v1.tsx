import Link from 'next/link';
import React, { ButtonHTMLAttributes } from 'react';
import { Url } from 'url';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // Additional props if needed
    css?: string;
    to?: string;
}

const Buttonv1: React.FC<ButtonProps> = ({ children, css, to, ...rest }) => {

    return (
        <div>
            <Link href={`${to}`}>
                <button className={`btn text-white bg-primary_orange py-4 rounded-xl text-[.7rem] uppercase font-inter font-light text-center hover:bg-secondary_orange hover:transition-all ${css}`} {...rest}>
                    {children}
                </button>
            </Link>
        </div >
    );
};

export default Buttonv1;
