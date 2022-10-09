function ThemeButton(props) {
  const { isLightTheme } = props;

  // Инлайн стили - в объекте
  // имена свойств - в camelCase

  // Инлайн стили используем тогда, когда они динамически формируются
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
      className=""
    >
      {isLightTheme ? "Light" : "Dark"}
    </button>
  );
}

export default ThemeButton;
