import { useState } from "react";
import Login from "../login";
import Register from "../register";

const LoginRegister: React.FC<{ onViewChange: () => void }> = ({
  onViewChange,
}) => {
  const [view, setView] = useState("register");

  const toggleView = () => {
    setView((prev) => {
      if (prev === "register") return "login";
      else return "register";
    });
    onViewChange();
  };

  return (
    <>
      {view === "login" && (
        <Login onLogin={() => null} onRegisterClick={toggleView} />
      )}
      {view === "register" && <Register onLoginClick={toggleView} />}
    </>
  );
};

export default LoginRegister;
