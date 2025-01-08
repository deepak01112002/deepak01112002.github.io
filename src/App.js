import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import { RotatingTriangles } from  'react-loader-spinner'
import ParticlesBg from "particles-bg";


function App() {
   const [loader,setLoader] = useState(true)

   useEffect(()=>{
      const interval = setTimeout(()=>{
         setLoader(false)
      },2000)

     return ()=>{
         clearTimeout(interval)
     }
   },[])
  


  return <div className="App">
   {/* <--------Navbar------------> */}
   {loader ? <div className="loader">
   <RotatingTriangles
  visible={true}
  height="150"
  width="150"
  ariaLabel="rotating-triangels-loading"
  wrapperStyle={{}}
  wrapperClass="rotating-triangels-wrapper"
/>
   </div> :<Home/> }


   
  </div>;
}

export default App;
