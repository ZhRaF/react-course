 import React  , {useId} from "react"
 const Inputbox = ({
    label,
    amount,
    onAmountChnage,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency= "dzd",
    amountDisabled=false,
    currencyDisabled=false,


})=>{
    const id = useId()

    return (
    <>
<div className="bg-white rounded-md p-3 h-1/3 ">
    <div className="flex justify-between items-center text-gray-500 px-1 "> 
         <label htmlFor={id}>{label}</label>
         <h4>Currency Type</h4>
      </div>
      <div className="flex justify-between items-center ">
        <input
        id={id} 
        type="number"
        className=" outline-none font-bold rounded-lg placeholder-slate-600  my-2"
        placeholder="amount"
        disabled={amountDisabled}
        value={amount}
        onChange={(e)=>{ onAmountChnage && onAmountChnage(Number(e.target.value))}}
         />
         <select 
         name="" id=""
         className="font-bold cursor-pointer rounded-lg bg-gray-200 p-2 outline-none"
         value={selectedCurrency}
         onChange={(e)=>{ onCurrencyChange && onCurrencyChange(e.target.value)}}
         disabled={currencyDisabled}
         >
         { currencyOptions.map((currency) => (
            <option className="font-bold" key={currency} value={currency}>{currency}</option>
         )
            )
        }

          
         </select>        
      </div>
</div>
     
    </>
)}
export default Inputbox