import styles from "./styles.module.css";

type TextButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const TextButton: React.FC<TextButtonProps> = (props) => {
  const { children } = props;
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default TextButton;
