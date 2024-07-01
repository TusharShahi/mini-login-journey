import { useState } from "react";
import "./App.css";
import Dashboard from "./screens/dashboard";
import LoginScreen from "./screens/login";

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  const handleLogin = () => {
    setShowDashboard(true);
  };

  return (
    <>{showDashboard ? <Dashboard /> : <LoginScreen onLogin={handleLogin} />}</>
  );
}

export default App;
