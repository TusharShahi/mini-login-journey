import styles from "./styles.module.css";

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => {
  return (
    <>
      <label>{label}</label>
      <input type="text" {...props} className={styles.input} />
    </>
  );
};

export default TextInput;
