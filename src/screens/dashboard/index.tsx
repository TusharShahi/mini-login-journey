import { useRef, useState } from "react";
import Heading1 from "../../components/atoms/headings/heading1";
import Para from "../../components/atoms/para";
import Modal, { ModalHandle } from "../../components/molecules/modal";
import CreatePost from "../../components/organisms/create-post";
import LoginRegister from "../../components/organisms/login-register";
import AsButton from "../../hocs/as-button";
import styles from "./styles.module.css";

const useUserDetails = () => {
  return { name: "Jane" };
};

const Dashboard = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const isLoggedIn = false;
  const { name } = useUserDetails();

  const modalRef = useRef<ModalHandle | null>(null);

  const handleCreateClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  const handleViewChange = () => {
    modalRef.current?.realignFocus();
  };

  return (
    <>
      <div className={styles.content}>
        <main className={styles.main} aria-hidden={showLoginModal}>
          <Heading1 variant="banner">Hello {name}</Heading1>
          <Para>
            How are you doing today? Would you like to share something with the
            community 🤗
          </Para>
          <div className={styles.posts}>
            <AsButton onClick={handleCreateClick} activate={!isLoggedIn}>
              <CreatePost />
            </AsButton>
          </div>
        </main>
      </div>
      {showLoginModal && (
        <Modal onClose={handleCloseModal} controlFirstFocus ref={modalRef}>
          <LoginRegister onViewChange={handleViewChange} />
        </Modal>
      )}
    </>
  );
};

export default Dashboard;
