import "./App.css";
import Hello from "./components/Hello/Hello";
import Nav from "./components/Nav/Nav";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="app">
      <Nav />
      <Hello />
      <Skills />
    </div>
  );
}

export default App;
