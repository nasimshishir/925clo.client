import Link from 'next/link';
import React, { ButtonHTMLAttributes } from 'react';
import { Url, UrlObject } from 'url';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // Additional props if needed
    css?: string;
    to?: Rstring;
}

const Buttonv1: React.FC<ButtonProps> = ({ children, css, to, ...rest }) => {

    return (
        <div>
            {to ? <Link href={`${to}`}>
                <button className={`block text-white bg-primary_orange border border-primary_orange rounded-xl sec_desc uppercase font-inter font-light text-center hover:bg-secondary_orange hover:transition-all ${css}`} {...rest}>
                    {children}
                </button>
            </Link> :
                <button className={`block text-white bg-primary_orange border border-primary_orange rounded-xl sec_desc uppercase font-inter font-light text-center hover:bg-secondary_orange hover:transition-all ${css}`} {...rest}>
                    {children}
                </button>
            }
        </div >
    );
};

export default Buttonv1;
