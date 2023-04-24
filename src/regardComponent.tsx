import React from "react";
import getTeacherName from "./teacherService";
import classes from "./styles.scss";
import jpgImage from "./content/lemon_jpg.jpg";

export const RegardComponent: React.FC = () => {
  return (
    <div>
      <h1 className={classes["custom-title"]}>Bundling</h1>
      <div id="jpgImg">
        <img src={jpgImage}></img>
      </div>
      <p>Hola {getTeacherName()}</p>
      <p>Entorno {process.env.MESSAGE} </p>
    </div>
  );
};
