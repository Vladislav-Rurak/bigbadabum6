// Выражения джаваскрипта в разметке JSX заключаются в {}
import ",/Greeting.css";
function Greeting(props) {
  const { name, isGreeting } = props;
  return (
    <div className="button">
      {isGreeting ? "Hello" : "Goodbuy"}{" "}
      {name}!
    </div>
  );
}

export default Greeting;
