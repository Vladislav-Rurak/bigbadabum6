function ThemeButton(props) {
  const { isLightTheme } = props;
  return (
    <button>
      {isLightTheme ? "Light" : "Dark"}
    </button>
  );
}

export default ThemeButton;
