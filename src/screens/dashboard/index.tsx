import Heading1 from "../../components/atoms/headings/heading1";
import Para from "../../components/atoms/para";
import CreatePost from "../../components/organisms/create-post";
import styles from "./styles.module.css";

const useUserDetails = () => {
  return { name: "Jane" };
};

const Dashboard = () => {
  const { name } = useUserDetails();

  return (
    <div className={styles.content}>
      <Heading1 variant="banner">Hello {name}</Heading1>
      <Para>
        How are you doing today? Would you like to share something with the
        community 🤗
      </Para>
      <main className={styles.main}>
        <CreatePost />
      </main>
    </div>
  );
};

export default Dashboard;
