import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState('white');

  return (
<div  style={{ backgroundColor: color }} className='w-full  duration-200 h-screen'> 
      <div className='fixed flex flex-wrap justify-center bottom-14 px-2'>
      <button className='bg-red-500' onClick={() => setColor('red')}>red</button>
        <button className='bg-green-500' onClick={() => setColor('green')}>green</button>
        <button className='bg-yellow-500' onClick={() => setColor('yellow')}>yellow</button>

      </div>
   
</div>
  );
}








// smart componenet example

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Card age="21"/>
//       <Card/>
//       <Card age="11" name="rym" />

//     </>
//   )
// }

export default App
