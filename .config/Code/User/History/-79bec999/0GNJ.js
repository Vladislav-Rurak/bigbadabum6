function ThemeButton(props) {
  const { name, topic } = props;
  return (
    <button>
      {topic ? "Light" : "Dark"}
    </button>
  );
}

export default ThemeButton;
