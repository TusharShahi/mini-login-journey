import styles from "./styles.module.css";

type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  value: string;
  placeholder?: string;
};

const PasswordInput: React.FC<PasswordInputProps> = ({
  name,
  label,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <>
      <label className={styles.label}>{label}</label>
      <input
        type="password"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className={styles.input}
      />
    </>
  );
};

export default PasswordInput;
