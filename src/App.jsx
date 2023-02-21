import { useState } from 'react'
import './App.css'

function App() {
  //creating a state to display on the screen
  const[no,setNo] = useState("")


  //function to print the button value on the screen
  const handleClick = (e) => {
      // setNo(no.concat(e.target.id))    OR
      setNo(prevNo => prevNo.concat(e.target.id))
  }
  
  //function  to clear the contents on the screen
  const clear = () => {
    setNo("")
  }
  
  //function to delete the latest element on  the screen
  const del = () => {
    // setNo(no.slice(0,-1))   OR
    setNo(prevNo => prevNo.slice(0,-1))
  }
  
  //function to calculate the result
  const result = () => {
    try{
      setNo(eval(no).toString())   //if you dont convert the answer to a string then you wont be able to do additional changes to the answer
    }
    catch(error){
      setNo("")
    }
  }

  return (
    <div className="App">

      <div className="innerBox">
            <br />
            <div className='screen'>{no}</div>

            <div className="buttons">

                <button id="AC" onClick={clear} className="btnAC">AC</button>
                <button id="DEL" onClick={del} className="btnD">DEL</button>
                <button id="*" onClick={handleClick} className="btno">*</button>
                <button id="1" onClick={handleClick} className="btn">1</button>
        
                <button id="2" onClick={handleClick} className="btn">2</button>
                <button id="3" onClick={handleClick} className="btn">3</button>
                <button id="+" onClick={handleClick} className="btno">+</button>
                <button id="4" onClick={handleClick} className="btn">4</button>
        
                <button id="5" onClick={handleClick} className="btn">5</button>
                <button id="6" onClick={handleClick} className="btn">6</button>
                <button id="/" onClick={handleClick} className="btno">/</button>
                <button id="7" onClick={handleClick} className="btn">7</button>
        
                <button id="8" onClick={handleClick} className="btn">8</button>
                <button id="9" onClick={handleClick} className="btn">9</button>
                <button id="-" onClick={handleClick} className="btno">-</button>
                <button id="0" onClick={handleClick} className="btn">0</button>
        
                <button id="00" onClick={handleClick} className="btn">00</button>
                <button  onClick={result} className="btnC">=</button>

            </div>

      </div>
 
        

    </div>
  )
}

export default App
