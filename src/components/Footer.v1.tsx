import Image from 'next/image';
import React from 'react';
import logo from '@assets/logo_footer.webp'

const Footerv1: React.FC = () => {
    return (
        <footer className='absolute bottom-0 left-0 bg-primary_orange p-10'>
            <div className='grid grid-cols-2'>
                <div>
                    <Image className='' src={logo} alt='testing' width={0} height={250} />
                </div>
                <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque soluta quos perferendis at nulla repudiandae vel, impedit quasi facere minima, ratione quia beatae quis delectus laudantium suscipit aliquid necessitatibus debitis dignissimos error veniam temporibus consectetur? Consequuntur error vero eius facilis maxime ex omnis eligendi! Culpa debitis repellendus iste itaque impedit!
                </div>
            </div>
        </footer>
    )
}

export default Footerv1;