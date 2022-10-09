import "./App.css";
import Greeting from "./components/Greeting";

// Компоненты
// функциональные

// классовые
/* <App/>  */

function App() {
  return (
    <>
      <Greeting
        name="Masha"
        isGreeting={false}
      />
      <MyComp />
    </>
  ); // = Greeting({name:'Masha', isGreeting: true})
}

export default App;
