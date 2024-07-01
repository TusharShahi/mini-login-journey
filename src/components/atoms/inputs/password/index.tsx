import styles from "./styles.module.css";

type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  value: string;
  placeholder?: string;
};

const PasswordInput: React.FC<PasswordInputProps> = ({ label, ...props }) => {
  return (
    <>
      <label className={styles.label}>{label}</label>
      <input type="password" {...props} className={styles.input} />
    </>
  );
};

export default PasswordInput;
