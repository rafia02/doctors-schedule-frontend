import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className='mt-16'>
            <div className="flex items-center justify-center">
                <div className="relative w-24 h-24">
                    {/* Outer circle */}
                    <div className="absolute inset-0 mx-auto my-auto w-24 h-24 rounded-full border-4 border-solid border-transparent border-t-blue-500 animate-spin-smooth"></div>

                    {/* Inner circle */}
                    <div className="absolute inset-0 mx-auto my-auto w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingSpinner