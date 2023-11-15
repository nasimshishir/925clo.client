import React from 'react'
import Lottie from 'lottie-react'
import white_logo from '@assets/lotties/logo_white.json'


function WhiteLogo() {
    return (
        <div className='w-4/5 lg:w-4/7 m-auto'>
            <Lottie animationData={white_logo} loop></Lottie>
        </div>

    )
}

export default WhiteLogo;