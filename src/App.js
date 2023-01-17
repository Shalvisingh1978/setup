
import './App.css';
import Navbar from "./Navbar"
import Textform from "./Textform"
import About from "./About"

function App() {
  return (
    <>
   <Navbar  title="NavShal"
    info="Home"
    usefullinks="Links"
    aboutinfo="About" />
    <div className="container">
    <Textform heading = "Enter The Text Below" />
    <About />
    </div>
  

 </>
  );
}

export default App;
