// import "./ThemeButton.css"; className='button'
import styles from "./ThemeButton.module.css";

function ThemeButton(props) {
  const { isLightTheme } = props;
  console.log("styles :>> ", styles);
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
      className={styles.button}
    >
      {isLightTheme ? "Light" : "Dark"}
    </button>
  );
}

export default ThemeButton;
