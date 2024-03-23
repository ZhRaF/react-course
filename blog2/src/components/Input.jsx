 import React, { useId } from 'react'
const Input = React.forwardRef(
    function Input({
        label,
        placeholder='',
        type='text',
        className='',
        ...props}
        ,ref){
            // core of the function
             const id=useId()
            return(
             <div className='w-full'>
                { label && 
                         (<label htmlFor={id}
                         className='inline-block mb-1 pl-1'
                         >
                             {label}
                         </label>)

                }
             <Input
              type={type}
              placeholder={placeholder}
              className={`px-3 py-2 rounded-lg bg-white
               text-black outline-none focus:bg-gray-50
                duration-200 border border-gray-200 w-full
                ${className}`}
              { ...props}
              id={id}
              ref={ref}

             />
            </div>
            )
        })
 
 export default  Input 