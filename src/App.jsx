import { NavBar } from "./components/navBar"
import { Hero } from "./components/hero"
import { Skills } from "./components/skills"
import { Proyects } from "./components/proyects"
import { WorkExp } from "./components/workexp"
import { ContactMe } from "./components/contactme"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function App (){
  return(
    <div>
      <section id=""><NavBar></NavBar></section>
      <section id="home"><Hero></Hero></section>
      <section id="skills"><Skills></Skills></section>
      <section id="projects"><Proyects></Proyects></section>
      <section id=""><WorkExp></WorkExp></section>
      <section id="contact"><ContactMe></ContactMe></section>
    </div>
  )
}
