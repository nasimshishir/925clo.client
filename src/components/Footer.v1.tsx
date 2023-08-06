import Image from 'next/image';
import React from 'react';
import logo from '@assets/logo_footer.webp'

const Footerv1: React.FC = () => {
    return (
        <footer className='bg-primary_orange p-10'>
            <div className='grid grid-cols-2'>
                <div>
                    <Image className='' src={logo} alt='testing' width={0} height={250} />
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </footer>
    )
}

export default Footerv1;