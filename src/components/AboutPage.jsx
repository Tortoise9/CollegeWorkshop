import React, { createContext, useEffect,useState } from 'react'



export const AboutContext = createContext(null)
import AboutData from './AboutData'


function AboutPage() {

 
  const [about, setAbout] = useState({
    title: 'About Page',
    description: 'This is the about page',
    data:33,
    members:[
      {name:'John',age:25},
      {name:'Jane',age:30}
      ]
    
  })

  useEffect(()=>{
    document.title = "About Page"
  },[])
  return (
    <AboutContext.Provider value={{ about , setAbout }} >
      <div>
        <AboutData/>
          <h1 className='font-bold text-5xl text-center'>This is About Page</h1>
      </div>
    </AboutContext.Provider>
    
  )
}

export default AboutPage
