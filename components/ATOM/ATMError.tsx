import React from 'react'

const ATMError = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div>
                <p className='text-3xl text-red-400'>
                    Network Problem....................
                </p>
                <p>Please Check Your Internet Connection</p>
            </div>
        </div>
    )
}

export default ATMError;
