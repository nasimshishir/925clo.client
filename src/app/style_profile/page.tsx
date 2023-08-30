import { Footerv1, Headerv2, Herov2, WishlistSidebar } from '@components';
import { NextPage } from 'next';
import React from 'react';


const styling: NextPage = () => {


    return (
        <div >
            <Headerv2 />
            <Herov2 />
            <Footerv1 />
        </div>

    )
}

export default styling;