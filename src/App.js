import logo from './logo.svg';
import './App.css';
import Main from './component/Main';
import Navbar from './component/Navbar';
import React from 'react';
import Count from './Count';
import Box from './Box';


// import Navbar from './component/Navbar';

export default function App() {

  const [count , setCount] = new React.useState(0)

  let Add =  () => {
    setCount(count+1)
  }
  let sub = () => {
    setCount(count-1)

  }
  
  const [data , setData ] = new React.useState(["data 1", "data 2"]);

  function addDatahelper () {

    setData ( prev => {
      return [...prev ,  "data" ] 
    } )

  }

  const dataArr = data.map(d => {
    return <p> {d} </p> 
  })



  

  // console.log("APP")

  // Boxes object 

  const Boxes = [
    {
      num : 1,
      isOn : true 
    },{
      num : 2,
      isOn : false 
    },{
      num : 3,
      isOn : true 
    },{
      num : 4,
      isOn : false 
    },{
      num : 5,
      isOn : true 
    },{
      num : 6,
      isOn : true 
    }

  ]


  const [BoxNumber , SetBoxNumber] = React.useState(Boxes)

  const BoxDivs = BoxNumber.map((b )=> { return (
    <>
    <Box num = {b.num}  ifOn = {b.isOn}/> <br />

    </>
  )}  )
  return (
    <div className="App">
      <Navbar />
      <Main />
      <img src="./images/mypic.jpg" width= "60px" alt="" />

      <br />
      <br />
      <div> {count}</div>
      <button onClick={Add}> +  </button>
      <button onClick={sub} > - </button>

      <button onClick={() => { return setCount(count +1 )}}> + </button>

      <br />
      <br />

      <button onClick={addDatahelper}> Add data</button>

      {dataArr}
      <Count number = {count}  /> 

      {BoxDivs}
    </div>
  );
}


