import "./App.css"
import Home from "./Components/Pages/Home";
import HomePage from "./Components/Pages/HomePage";
import ResponsiveAppBar from "../src/Components/AppBar/AppBar"

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>

      <HomePage/>
    </div>
  );
}

export default App;
