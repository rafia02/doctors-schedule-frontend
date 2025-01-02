import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className='mt-14'>
            {/* <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                    <div className="absolute inset-0 mx-auto my-auto w-24 h-24 rounded-full border-4 border-solid border-transparent border-t-blue-500 animate-spin-smooth"></div>
                    <div className="absolute inset-0 mx-auto my-auto w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-pulse">Loading</div>
                </div>
            </div> */}

            <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                    {/* Outer Ring */}
                    <div className="absolute w-full h-full border-8 border-blue-800 border-t-transparent rounded-full animate-spin border-dotted"></div>
                    {/* Inner Ring */}
                    <div className="absolute w-16 h-16 top-8 left-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin-slow border-dotted"></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingSpinner