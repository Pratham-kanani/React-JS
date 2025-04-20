import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter >= 0 && counter < 20){

    //Even though there are four setCounter,
    //it does not add value 4 because all of
    //them updates the same previous counter
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    //If we actually want to do that
    //we need to put this in a call back function 
    //expected by useState's setCounter
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)


    }else{
      setCounter(0)
    }
  }

  const reduceValue = () => {
    if(counter > 0){
    setCounter(counter - 1)
    }else{
      setCounter(0)
    }
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button> <br />
      <button onClick={reduceValue}>Reduce Vlaue {counter}</button>
    </>
  )
}

export default App
