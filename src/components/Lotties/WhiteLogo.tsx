import React from 'react'
import Lottie from 'lottie-react'
import white_logo from '@assets/lotties/logo_white.json'


function WhiteLogo() {
    return (
        <div className='w-2/3 lg:w-1/4'>
            <Lottie animationData={white_logo} loop></Lottie>
        </div>

    )
}

export default WhiteLogo