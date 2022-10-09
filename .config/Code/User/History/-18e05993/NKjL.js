// Выражения джаваскрипта в разметке JSX заключаются в {}
inp;

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
