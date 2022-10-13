import React from "react";
import Header from "../../component/header";
import { useTheme } from "../../context/ThemeContext";

function Concat() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Header />
      <div className="container">
        <div className="row">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Your Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="col-3">
            <button type="button" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Concat;
