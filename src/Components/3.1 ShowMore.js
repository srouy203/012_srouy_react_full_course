import React, { useState } from 'react'

const ShowMore = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }
  return (
    <div>
        <h2>Click the button to show more...</h2>
        {
            show ? (
                <>
                    <p>This is the text...........</p>
                    <button onClick={handleClick}>Show less</button>
                </>
            ) : (
                <>
                    <button onClick={handleClick}>Show more</button>
                </>
            )
        }
      
    </div>
  )
}

export default ShowMore
