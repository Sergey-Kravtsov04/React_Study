import React from 'react'


export const Components = ({ name, children }) => {
    let _name = name
    return (
        <>
            <div>Components {_name}</div>
            {children}
        </>
    )
}
