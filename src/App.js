import logo from "./crap.jpeg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Project in <i>development</i>.
          </p>
        </header>

        <main>
          <Dictionary/>
        </main>

        <footer className="text-center">
          <p>Project coded by Daniela Passos</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
