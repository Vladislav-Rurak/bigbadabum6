function ThemeButton(props) {
  const { isLightTheme } = props;
  // Инлайн стили - в объекте
  // имена свойств - в camelCase
  const inLineStyles = {
    color: isLightTheme
      ? "grey"
      : "white",
    backgroundColor: isLightTheme
      ? "white"
      : "black",
  };

  return (
    <button
      type="button"
      style={inLineStyles}
    >
      {isLightTheme ? "Light" : "Dark"}
    </button>
  );
}

export default ThemeButton;
