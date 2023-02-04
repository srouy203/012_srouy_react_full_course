import React from 'react'

const ForwardingRefChild = React.forwardRef((props, ref) => {
    return(
        <>
            <input type="text" ref={ref}/>
        </>
    )
})

export default ForwardingRefChild
