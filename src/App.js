import "./App.css";
import About from "./components/About/About";
import Hello from "./components/Hello/Hello";
import Nav from "./components/Nav/Nav";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Nav />
      <Hello />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
