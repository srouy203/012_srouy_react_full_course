import React, { useState } from 'react'
import { useEffect } from 'react'

function UseEffectmouseover() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const setPostsition = (e) => {
        console.log('Update set Position');
        setX(e.clientX)
        setY(e.clientY)
    }
    
    useEffect(()=>{
        console.log('render useEffect');
        window.addEventListener('mousemove', setPostsition)

        return ()=> {
            console.log('Unmount UseEffect')
            window.removeEventListener('mousemove', setPostsition)
        }
    }, [])

  return (
    <div>
        X: {x} Y: {y}
    </div>
  )
}

export default UseEffectmouseover
