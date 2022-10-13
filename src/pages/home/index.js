import React from "react";
import Header from "../../component/header";
import { useTheme } from "../../context/ThemeContext";

function Home() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <h4 className="text-center">Welcome to our website</h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
