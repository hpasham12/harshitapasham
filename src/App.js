import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Experience/>
      <ContactMe/>
    </div>
  );
}

export default App;
