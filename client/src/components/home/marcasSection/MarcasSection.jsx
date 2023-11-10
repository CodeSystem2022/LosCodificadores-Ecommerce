import "./MarcasSection.css";
import Carrusel from "../../commons/Carrusel/Carrusel";
import { MARCAS } from "./Marcas";

const MarcasSection = () => {
  return (
    <section id="marcasSection">
      <div className="section-text">
        <h2>Garantizamos eficiencia y calidad</h2>
        <span>Algo lindo que se nos ocurra</span>
      </div>
      <Carrusel items={MARCAS} itemsPerView={5}/>
    </section>
  );
};

export default MarcasSection;
