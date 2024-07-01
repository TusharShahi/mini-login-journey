import styles from "./styles.module.css";

type RowColumnProps = React.HTMLAttributes<HTMLDivElement>;

const Row: React.FC<RowColumnProps> = (props) => {
  return <div className={styles.row} {...props}></div>;
};

const Column: React.FC<RowColumnProps> = (props) => {
  return <div className={styles.column} {...props}></div>;
};

export { Row, Column };
