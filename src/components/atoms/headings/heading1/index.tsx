import styles from "./styles.module.css";

const Heading1: React.FC<
  React.HTMLProps<HTMLHeadingElement> & {
    upperCase?: boolean;
    variant?: "banner";
  }
> = (props) => {
  const { upperCase, variant = "default" } = props;

  const className = `${styles.heading} ${upperCase ? styles.upperCase : ""} ${
    styles[variant]
  }`;
  return <h1 {...props} className={className} />;
};

export default Heading1;
