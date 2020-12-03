import React from 'react';
import {useState , useEffect} from 'react';
import Header from  './Header';
import Body from './Body';
import Footer from './Footer';
import index from './index.css';

function App(){

return(

  <div> 

    <Header />
    <Body />
   <Footer />
  </div>
)

}


export default App;




/*//import Ccomp from './Ccomp';
//import Fcomp from './Fcomp';

const courses = ['angular' , 'react' , 'vue'];

  const courselist = courses.map(name=>{
    return <h1>{//name}</h1>
  })*/
  /* <div>

     <Ccomp name = "Pooja"/>
     <Fcomp name = "Sangle"/>
  <h1> Length of array {courses.length}</h1>
  <h1> Array at index :::: {courses[2]}</h1>
 <h1> Array elements are {courses.length} </h1>
  <h1> Array  elements are {courselist}</h1>
  function showit(){
  //alert("Second button");
  <div>

      <button onClick ={()=> {//alert ("Button Clicked");}} > Click Me </button>
      <button onClick = {showit } > Click Me  </button>

      <input type="text" onChange = {()=> {//alert ("Input updated");}}/>
    </div>
}
 import  {useState} from 'react';
import './App.css';

function App() {

  const [name, setusername] = useState("Pooja")

  function dataupdated(){

    setusername("J")
  }

  return (
<div >
 < h1> Default value is {//name}</h1>

 <button onClick ={dataupdated}> Click Me </button>
 <button text={() => //</h1>alert()}> Click Me </button>
  
  </div>
    
   
  );
}

    </div>*/