import "./MarcasSection.css";
import Carrusel from "../../commons/Carrusel/Carrusel";
import { MARCAS } from "./Marcas";

const MarcasSection = () => {
  return (
    <section id="marcasSection">
      <div className="section-text">
        <h2>Garantizamos eficiencia y calidad</h2>
        <span>De la mano de las marcas líderes</span>
      </div>
      <Carrusel items={MARCAS} itemsPerView={5}/>
    </section>
  );
};

export default MarcasSection;
