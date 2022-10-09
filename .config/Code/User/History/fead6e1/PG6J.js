import logo from "./logo.svg";
import "./App.css";

// Компоненты
// функциональные

// классовые
/* <App/>  */

function Greeting() {
  return <div>Hello!</div>;
}

function App() {
  return <Greeting name="Masha" />; // = Greeting({name:'Masha'})
}

export default App;
