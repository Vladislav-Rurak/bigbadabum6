// Выражения джаваскрипта в разметке JSX заключаются в {}

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
