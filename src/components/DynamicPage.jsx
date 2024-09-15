import React from 'react'
import { useParams } from 'react-router-dom'

function DynamicPage() {

  const  { id } = useParams()
  return (
    <div>
      <h1 className='text-5xl text-center'>This is Dynamic Page ID is {id}</h1>
    </div>
  )
}

export default DynamicPage
