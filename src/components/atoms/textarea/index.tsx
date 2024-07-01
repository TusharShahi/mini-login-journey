import styles from "./styles.module.css";

interface TextBoxProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: JSX.Element;
}

// Functional component with proper types
const TextBox: React.FC<TextBoxProps> = (props) => {
  const { icon, ...textAreaProps } = props;
  return (
    <div className={styles.wrapper}>
      <div aria-hidden className={styles.iconWrapper}>
        {icon}
      </div>
      <textarea className={styles.textArea} {...textAreaProps} />
    </div>
  );
};

export default TextBox;
