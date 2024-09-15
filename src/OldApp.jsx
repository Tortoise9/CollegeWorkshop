import { useState,useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Welcome(props){
  return <h1>Hello, {props.name}! , you are {props.gender} </h1>

}


function Counter(){
  const [count,setCount] = useState(0)
  const [nextVar,setNextVar] = useState(0)


  useEffect(
    ()=>{
      console.log('COUNTER MOUNTED')
      
      setCount(count+5)
    },[nextVar]
  )


  function chNext(){
    setNextVar(nextVar+1)
  }



  function increase(){
    // count++
    setCount(count+1)
    console.log(count)
  }

  return <div>
  <h1>The Count Value : {count} </h1>

  <button onClick={increase} onMouseEnter={
    ()=>{
      console.log("MOUSE Entered")
  }
  }>INCREASE</button>


  <button onClick={chNext}>CHANGE NEXT COUNT {nextVar}</button>
</div>
}

function MeroForm(){
  const [firstName,setFirstName] = useState("")
  const [premiumUser,setPremiumUser] = useState(true)

  // if(premiumUser){
  //   return <h2>You are a Premium User, you can enjoy premium features</h2>
  // }
  // else{
  //  return <h2>You are a Normal User, you can enjoy normal features</h2>
  // }

  return <div>
    <br />
    <br />
    <br />
    <h1>This is my form</h1>
    <button onClick={()=>{
      setPremiumUser(!premiumUser)
    }}>Toggle Premium</button>

    {
      premiumUser ? (<h1>You are Permium User</h1>):(<h1>You are Normal User</h1>)
    }
   

    <h2>FirstName Value is : {firstName||"N/A"}</h2>

    <form  >
      <label htmlFor="firstName">FirstName</label>
      <input value={firstName} id="firstName" type="text" onChange={
        (e)=>{
          console.log("input changed ", e.target.value)
          setFirstName(e.target.value)
        }
      }  />

    </form>
  </div>
}

function Games(){

const [games,setGames] = useState(["Volleyball","Basketball","Circket"])

  return (
    <div>
      <h1>This displays Games</h1>
    <ul>
    {/* <li>Volleyball</li> */}
    {games.map((game,index)=>{

      return <li key={index} >{game}</li>
    })}

    </ul>

    {games.map((game,index)=>{
      return <Game key={index} title={game} />
    })}

    </div>
  )

}


function Game(props){
  return (
    <div style={{
      padding:"10px",
      color:"green",
      backgroundColor:"cyan",
      borderRadius:"10px",
      margin:"10px"
    }}>
      <h1 className="game-title" >{props.title}</h1>
     

    </div>
  )
}




function App(){
  let person_name = "RAM SHARMA"

  return <div> 
    <Welcome name={person_name}  gender = "MALE" />
        <Welcome name = "GITA SHARMA" gender="FEMALE" />
        <Counter />
        <MeroForm/>
        <Games/>
         </div>
  
}

export default App;


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
