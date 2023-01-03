import React,{useEffect} from "react"
import Home from "./Components/Pages/Home";
import HomePage from "./Components/Pages/HomePage";
import ResponsiveAppBar from "../src/Components/AppBar/AppBar"
import "./App.css"


function App() {

  useEffect(()=>{
    document.title="Norberto Manzanos Coding City"
  },[])
  return (
    <div className="App">
      <ResponsiveAppBar/>

      <HomePage/>
    </div>
  );
}

export default App;
