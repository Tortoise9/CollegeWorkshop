import React, { useContext } from 'react'
import { contactContext } from './ContactPage'

function ContactDetails() {

   const {contactData} =  useContext(contactContext)
  return (
    <div className='m-5 p-5 rounded-xl bg-indigo-400'>
      
        <h2 className='text-white font-bold text-2xl '>Contact Information</h2>
        <p>Name: {contactData.name} </p>
        <p>Email: {contactData.email} </p>
        
     
    </div>
  )
}

export default ContactDetails
