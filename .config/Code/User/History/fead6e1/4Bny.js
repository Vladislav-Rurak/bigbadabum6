import logo from "./logo.svg";
import "./App.css";

// Компоненты
// функциональные

// классовые
/* <App/>  */

function Greeting() {
  return <div>Hello</div>;
}

function App() {
  return <Greeting />; // = Greeting()
}

export default App;
