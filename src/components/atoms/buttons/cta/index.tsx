import styles from "./styles.module.css";

type CTAButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const CTAButton: React.FC<CTAButtonProps> = (props) => {
  return <button className={styles.button} {...props}></button>;
};

export default CTAButton;
