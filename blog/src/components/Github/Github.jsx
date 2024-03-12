import React, { useEffect, useState } from 'react'


function Github() {

  const [input,setInput]=useState("")
  const [data,setData]=useState([])


  useEffect(() => {
    fetch(`https://api.github.com/users/${input}/repos`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setData(data)}) 
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  },[input]);

  return (
    <div className='text-center m-4 bg-gray-600 p-4 text-white text-3xl'>
      <input 
       className=' m-2 pb-3 text-center placeholder:text-lg rounded-lg w-1/3 text-black placeholder:text-gray-700  bg-white outline-1  outline-slate-600'
       type="text"
       value={input} 
       onChange={(e)=>{setInput(e.target.value)}}
       placeholder='enter the git username' 
       />
       

<div className="relative overflow-x-auto mt-5">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-orange-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    name
                </th>
                <th scope="col" className="px-6 py-3">
                    stars
                </th>
                <th scope="col" className="px-6 py-3">
                    size
                </th>
                <th scope="col" className="px-6 py-3">
                  Link
                 </th>
            </tr>
        </thead>
        <tbody>
  {data.length > 0 ? (
    data.map(e => (
      <tr key={e.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {e.name}
        </th>
        <td className="px-6 py-4">
          {e.stargazers_count}
        </td>
        <td className="px-6 py-4">
          {e.size}
        </td>
        <td className="px-6 py-4">
          <a className="text-white" href={`https://github.com/${input}/${e.name}`} target="_blank">
            Link
          </a>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4" className="px-6 py-4 text-center">
        No data available
      </td>
    </tr>
  )}
</tbody>



    </table>
</div>

    </div>

  )
}

export default Github