import getTeacherName from './teacherService';
import "./styles.scss";
import jpgImage from "./content/lemon_jpg.jpg";

// Logo
const imagejpg = document.createElement("img");
imagejpg.src = jpgImage;
document.getElementById("jpgImg").appendChild(imagejpg);

// Saludo
const teacher = getTeacherName();
console.log(teacher);
const messageToDisplay = `Hola ${teacher}`;
document.write(messageToDisplay);

