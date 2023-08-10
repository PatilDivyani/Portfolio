import "./App.css";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

 function App() {
  return (
    <>
      <Navbar />
      <main>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
      </main>
    </>
  );
}
export default App;