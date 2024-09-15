import React, { useState } from 'react'
import Product from './Product'

function ProductPage() {



  const [products ,setProducts] = useState([]) 
  useState( ()=>{
  fetch('https://dummyjson.com/products').then(response=>response.json()).then(responseJson=>{
    
    setProducts(responseJson.products)
  })
 
  },[])
  
  // run first time 
  return (
    <div>
      {/* This is Product Page */}


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-3">
       {/* {
        JSON.stringify(products)
       } */}
{
  products.map((product)=>{
    return(
      <Product key={products.id} product={product} />
    )
  })
}

      </div>



    </div>
  )
}

export default ProductPage
