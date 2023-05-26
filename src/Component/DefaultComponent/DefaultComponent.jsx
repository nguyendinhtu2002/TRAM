import React from 'react'
import HeaderComponent from '../HeaderComponent/Header'

const DefaultComponent = ({ children }) => {
    return (
        <div>
            <HeaderComponent />
            {children}
        </div>
    )
}

export default DefaultComponent