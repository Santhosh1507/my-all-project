import React, { useEffect, useState } from 'react'
export default function App() {

  const[length,setLength] = useState(12);
  const[password,setPassword] = useState("");
  const[number,setNumber] = useState(false);
  const[special,setSpecial] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);

  const handleChange = (e)=>{
    setLength(e.target.value);
  }

  const generatePassword = ()=>{
    console.log("Inside Function");
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijlkmnopqrstuvwxyz";
    if(number==true){
      str+="1234567890"
    }
    if(special==true){
      str+="!@#$~%&*+_-"
    }
    for(let i=0;i<length;i++){
      pass += str.charAt(Math.floor(Math.random()*str.length))
    }
    setPassword(pass);
  }

  const setNumberState = () => {
    setNumber(!number);
    setIsCheckedState();
  }

  const setSpecialState = () => {
    setSpecial(!special);
    setIsCheckedState1(); 
  }

  const setIsCheckedState = () => {
    setIsChecked(!isChecked);
  }
  const setIsCheckedState1 = () => {
    setIsChecked1(!isChecked1);
  }

  const allClear = () => {
    setPassword("");
    setLength(12);
    setNumber(false); 
    setSpecial(false);
    setIsChecked(false);
    setIsChecked1(false);
  }

  return (
    <>
    <div className='container'>
      <div className="title">
        <h1>Password Generator</h1>
      </div>
      <input type="text" name="passwordBox" id="passwordBox" readOnly value={password} />
      <div className="lengthBox">
        <label htmlFor="length">Length: <span>{length}</span></label>
        <input type="range" name="length" id="length" min={8} max={30} value={length} onChange={handleChange}/>
      </div>
      <div className="optionsBox">
        <input type="checkbox" checked={isChecked} name="number" id="number" onChange={setNumberState}/>
        <label htmlFor="number">Number</label>
        <input type="checkbox" checked={isChecked1} name="special" id="special" onChange={setSpecialState }/>
        <label htmlFor="special">Special Characters</label>
      </div>
      <input type="button" name='generateBtn' value={"Generate"} onClick={generatePassword}/>
      <div className="extraBtns">
      <input type="button" value="Clear" onClick={allClear} />
      <input type="button" value="Copy" onClick={()=>{
        navigator.clipboard.writeText(password);
        alert("Password Copied to Clipboard");
      }}/>
      </div>
    </div>
    <footer>
    <p>Made with ❤️ by Santhosh</p>
  </footer></>
  )
}
