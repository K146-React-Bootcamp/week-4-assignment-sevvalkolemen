import React from "react";
import Header from "../../component/header";
import { useTheme } from "../../context/ThemeContext";
import error from "../img/error.png";

function ErrorPage() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <img className="rounded mx-auto d-block" style={{width: "450px", height: "350px"}} src={error}></img>
          <h2 className="text-center mt-2">Not Found</h2>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
