import React, { useState } from 'react'

function ModifyCount(props){

    const handleInput = (event)=>{

        props.changeCount(event.target.value)

    }
    return(
        <>
        <h1>Childern Component</h1>

        <input type="number" onChange={handleInput} />
         <button onClick={props.increaseCount} className='py-2 px-4 rounded-lg text-white bg-orange-400 '>Increase Count</button>
        </>
       
    )
}

function ServicePage() {
   const [count,setCount] =  useState(0)

   const increaseCount = ()=>{
    setCount(count + 1)
   }
   const changeCount  = (value)=>{
    setCount(value)
   }


  return (
    <div>
      <h1 className='font-bold text-5xl text-center'>This is Services Page</h1>

        <button  onClick={increaseCount} className='py-2 px-4 rounded-lg text-white bg-green-400 ' >INrease from Service</button>

        <div className='p-5 m-5 rounded-xl bg-indigo-400 text-white text-5xl text-center'>
            {count}
        </div> 
        <ModifyCount changeCount = {changeCount}  increaseCount = {increaseCount} />
        <ModifyCount changeCount = {changeCount}  increaseCount = {increaseCount} />
        <ModifyCount changeCount = {changeCount}  increaseCount = {increaseCount} />
        <ModifyCount changeCount = {changeCount}  increaseCount = {increaseCount} />
    </div>
  )
}

export default ServicePage
