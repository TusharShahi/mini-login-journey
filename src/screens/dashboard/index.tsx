import { useState } from "react";
import Heading1 from "../../components/atoms/headings/heading1";
import Para from "../../components/atoms/para";
import Modal from "../../components/molecules/modal";
import CreatePost from "../../components/organisms/create-post";
import styles from "./styles.module.css";
import AsButton from "../../hocs/as-button";
import Login from "../../components/organisms/login";

const useUserDetails = () => {
  return { name: "Jane" };
};

const Dashboard = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const isLoggedIn = false;
  const { name } = useUserDetails();

  const handleCreateClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  return (
    <>
      <div className={styles.content}>
        <Heading1 variant="banner">Hello {name}</Heading1>
        <Para>
          How are you doing today? Would you like to share something with the
          community 🤗
        </Para>
        <main className={styles.main}>
          <AsButton activate={!isLoggedIn}>
            <CreatePost onClick={handleCreateClick} />
          </AsButton>
        </main>
      </div>
      {showLoginModal && (
        <Modal onClose={handleCloseModal}>
          <Login />
        </Modal>
      )}
    </>
  );
};

export default Dashboard;
