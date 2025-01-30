import React from 'react'
import cover from '../../assets/cover.png'

const header = () => {
    return (
        <div className="relative">
            <img 
                src={cover} 
                alt="Header Cover" 
                className="w-full h-screen object-cover" 
            />
        </div>
    )
}

export default header