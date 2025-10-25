import Contact from "./Components/Contacts";
import Experience from "./Components/Experience";
import Hero from "./components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact  />  
    </div>
  );
}

export default App;