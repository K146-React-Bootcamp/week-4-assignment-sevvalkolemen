import React from "react";
import Header from "../../component/header";
import { useTheme } from "../../context/ThemeContext";
import imgRouter from "../img/img-router.jpg";

function About() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <img
              src={imgRouter}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-8">
            <h4>About</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
              amet. Cum laborum nostrum assumenda laboriosam fugiat, vero
              dolores voluptas dolorem dolor atque. Consequuntur velit
              voluptates consectetur commodi quisquam corporis ad. Voluptate
              mollitia praesentium nobis, nulla maxime debitis necessitatibus,
              expedita incidunt in excepturi dignissimos! Tempore voluptatibus
              porro eius nisi provident, laborum cumque sint mollitia vitae,
              minima repellat, autem eveniet deserunt nulla! Atque nisi
              veritatis esse iste voluptate! Tenetur dolorem harum ipsa
              assumenda quas officiis distinctio quos, dolore impedit ullam
              temporibus quis officia est similique. Dignissimos perspiciatis
              fugit at maxime corporis veritatis. Totam qui facilis nisi, enim,
              numquam, blanditiis vitae nam fugit in est sunt obcaecati animi
              quaerat quo dicta esse. Perspiciatis, nesciunt modi eveniet animi
              tempora officiis perferendis quasi ipsa! Minima! Consequatur ipsum
              doloremque eligendi maxime dolorum, magni eveniet voluptates
              commodi ullam, laboriosam expedita esse? Maiores nesciunt illo,
              quod deserunt non ullam veniam? Repudiandae natus quaerat
              assumenda. Pariatur esse aut corrupti!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
