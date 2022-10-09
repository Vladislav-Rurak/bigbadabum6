// Выражения джаваскрипта в разметке JSX заключаются в {}
import ",/Greeting.css";
function Greeting(props) {
  const { name, isGreeting } = props;
  return (
    <div>
      {isGreeting ? "Hello" : "Goodbuy"}{" "}
      {name}!
    </div>
  );
}

export default Greeting;
