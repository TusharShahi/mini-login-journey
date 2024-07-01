import styles from "./styles.module.css";

interface ParaProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const Para: React.FC<ParaProps> = (props) => {
  return <p className={styles.para} {...props} />;
};

export default Para;
