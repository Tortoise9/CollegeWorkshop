import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
    console.log(props)
    const markPrice = props.product.price
   const discout_percent = props.product.discountPercentage
   
   const discount = (markPrice*discout_percent)/100
   const sellingPrice = (markPrice-discount).toFixed(2)
    
  return (
    <div className="">
        
    


<div className='w-full bg-green-200 rounded-xl p-2 '>
    <img src={props.product.thumbnail}className='h-48 w-full object-contain' alt="" />

    <h1 className='mt-2 font-bold text-xl p-2  '>{props.product.title}</h1>
    <h2 className='pl-2 line-through text-red-500 font-bold'>Rs {markPrice}</h2>
    <h2 className='pl-2 font-bold text-green-500'>Rs {sellingPrice}</h2>

    <div className='mt-2 bg-blue-500 py-2 px-4 w-full cursor-pointer text-white text-center rounded-xl' >
    <Link to={`/products/${props.product.id}`}> See More</Link>
      </div>


</div>

</div>
 
  )
}

export default Product