import logo from "./logo.svg";
import "./App.css";

// Компоненты
// функциональные

// классовые
/* <App/>  */

function App() {
  return (
    <Greeting
      name="Masha"
      isGreeting={true}
    />
  ); // = Greeting({name:'Masha', isGreeting: true})
}

export default App;
