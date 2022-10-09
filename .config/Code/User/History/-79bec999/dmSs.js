function ThemeButton(props) {
  const { name, topic } = props;
  return (
    <button>
      {ThemeButton ? "Light" : "Dark"}
    </button>
  );
}

export default ThemeButton;
