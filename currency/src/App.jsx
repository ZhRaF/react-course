import { useState ,useEffect } from 'react'
import Inputbox from './component/Inputbox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount,setAmount]=useState(0)
  const [convertedAmount,setConvertedAmount]=useState(0)
  const [from,setFrom]=useState('dzd')
  const [to,setTo]=useState('usd')


   const data= useCurrencyInfo(from)
   const currencyOptions=Object.keys(data);




  const convert=()=>{ setConvertedAmount(amount * data[to])  }

  const swap = () => {
    setFrom(prevFrom => to);
    setTo(prevTo => from);
    setConvertedAmount(prevConvertedAmount => amount);
    setAmount(prevAmount => convertedAmount);
   }

  return (
    <>
    <div className='w-full h-screen flex-wrap justify-center items-center bg-center bg-cover bg-no-repeat flex items-center justify-center h-screen'
         style={{backgroundImage :'url(https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
             >
      <div className=' bg-transparent rounded-2xl backdrop-filter opacity-90 backdrop-blur-lg w-1/2 h-80 p-4 '>
        <form 
          className='h-full relative flex gap-1 flex-col m-auto'
          onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}>
          <Inputbox 
          label="from"
          amount={amount}
          currencyOptions={currencyOptions}
          onAmountChnage={(amount)=>setAmount(amount)}
          onCurrencyChange={(currency)=>setFrom(currency)}
          selectedCurrency={from}

          ></Inputbox>
         <button 
         className='bg-blue-600 px-2 py-2 text-white font-bold uppercase rounded-lg w-fit block mx-auto top '
         onClick={swap}>swap</button>
          <Inputbox 
          label="to"
          currencyOptions={currencyOptions}
          amountDisabled={true}
          selectedCurrency={to}
          onCurrencyChange={(currency)=>setTo(currency)}
          amount={convertedAmount}

           ></Inputbox>
           <button type='submit' className='w-full text-white px-4 py-3 rounded-lg bg-blue-600'>convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </form>
      </div>

    </div>
    </>
  )
}

export default App
