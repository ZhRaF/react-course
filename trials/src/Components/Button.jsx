import React from 'react'

 function Button({handleClick}) {
  return (
    <>
    {console.log('button render')}
    <button onClick={handleClick}>increment</button>
    </>
  )
}
export default React.memo(Button)
