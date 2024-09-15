import React,{useContext,createContext, useState} from 'react'
import ContactDetails from './ContactDetails'
export const contactContext =  createContext(null)

function ContactPage() {

  const [contactData,setContactData] =useState({
    name:'Pi Innovations',
    email:'contact@pi-innovations.com.np',
    phone:['+9779868250580','+9779866718115'],
    address:'Biratnagar,Nepal'
  })

  return (
    <contactContext.Provider value={{ contactData  }}>
      <h1>This is Contact Page</h1>

      <ContactDetails />

    </contactContext.Provider>
  )
}

export default ContactPage
