import React from "react"

const LinearGradient: React.FC = () => {

    return (
        <div 
            className='absolute inset-0 z-0 pointer-events-none' 
            style={{backgroundImage: 'linear-gradient(0deg,rgba(2,0,36,0) 0%, rgba(194,139,12,0.2) 35%, rgba(96,57,19,0.3) 100%)'}}
        />
    )
}

export default LinearGradient