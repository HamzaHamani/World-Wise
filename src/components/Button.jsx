import styles from "./Button.module.css";
function Button({ children, type, oncClick }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={oncClick}>
      {children}
    </button>
  );
}

export default Button;
