import React, { useContext } from 'react'
import {AboutContext} from './AboutPage'

function AboutData() {

   const {about,setAbout} =  useContext(AboutContext)
  return (
    <div>
      <h2>{about.title}</h2>
      <p>{about.description}</p>
      <h1 className='bg-blue-500  p-5 m-5 rounded-xl text-5xl text-center text-white'>{about.data}</h1>
        <ul>
            {about.members.map((member,index)=>{
                return(
                    <li key={index}>{member.name}</li>

                )
            })}
        </ul>

        <button className='py-2 px-4 border rounded-xl m-5 hover:bg-orange-300' onClick={()=>{
            setAbout({...about,data:about.data+1})
        }}>Increase Count</button>
    </div>
  )
}

export default AboutData
