import React from 'react'

function TestPage() {
    return (
        <div className='max-h-screen h-screen bg-blue-300'>
            <div className='flex'>
                <div className='bg-red-500 h-screen flex-1'>1</div>
                <div className='bg-green-500 h-screen flex-1'></div>
            </div>
        </div>
    )
}

export default TestPage;