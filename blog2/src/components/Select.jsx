import React from "react";
import { useId } from "react";

function Select({
    options,
    label,
    className,
    ...props ,
} ,ref){
 const id=useId
 return(
        <div className="w-full">
            {label && 
                   ( <label
                    htmlFor={id}
                    className="inline-block mb-1 pl-1"
                     >
                        {label}
                    </label>)
            }
            <select
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none
             focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            id={id}
            ref={ref}
            options={options.map((opt)=>{
                <option 
                key={opt} //WE used this for optimization to make sure that all values are different
                value={opt}>
                     {opt}
                </option>}
                    )}
            type="text" 
            {...props}>
            </select>
            
        </div>
 )
}
export default React.forwardRef(Select)