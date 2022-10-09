import logo from "./logo.svg";
import "./App.css";

// Компоненты
// функциональные

// классовые
/* <App/>  */

function Greeting(props) {
  console.log("props :>> ", props);
  return <div>Hello!</div>;
}

function App() {
  return <Greeting name="Masha" />; // = Greeting({name:'Masha'})
}

export default App;
