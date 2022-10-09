import logo from "./logo.svg";
import "./App.css";

// Компоненты
// функциональные

// классовые
/* <App/>  */

// Выражения джаваскрипта в разметке JSX заключаются в {}

function Greeting(props) {
  console.log(
    "props.name :>> ",
    props.name
  );
  return <div>Hello! {props.name}</div>;
}

function App() {
  return <Greeting name="Masha" />; // = Greeting({name:'Masha'})
}

export default App;
