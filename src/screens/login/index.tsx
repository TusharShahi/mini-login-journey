import Login from "../../components/organisms/login";
import styles from "./styles.module.css";

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin: handleLogin }) => {
  return (
    <main>
      <div className={styles.content}>
        <Login onRegisterClick={() => null} onLogin={handleLogin} />
      </div>
    </main>
  );
};

export default LoginScreen;
