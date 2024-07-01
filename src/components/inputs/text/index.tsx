import styles from "./styles.module.css";

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className={styles.input}
      />
    </>
  );
};

export default TextInput;
