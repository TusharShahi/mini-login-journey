import styles from "./styles.module.css";

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton: React.FC<IconButtonProps> = (props) => {
  return <button className={styles.button} {...props} />;
};

export default IconButton;
