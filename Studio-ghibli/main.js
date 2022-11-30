import "./style.css";
//Importamos el header para poder usarlo aqui
import { Header } from "./Components/Header/Header";
import { Gallery } from "./pages/Gallery/Gallery";
import { Footer } from "./Components/Footer/Footer";

//Recuperamos lo que tenemos en el index con querySelector
const header = document.querySelector("header");
//Lo metemos en el HTML
header.innerHTML = Header();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

Gallery();