import React from 'react'

function Count({content , value}) {
  return (
    <>
    {console.log("count render")} 
    <div>{content + " " + value }</div>
    </>
  )
}

export default React.memo(Count)