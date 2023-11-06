import "./MarcasSection.css";
import asusLogo from "../../../assets/marcas/asusLogo.png";
import asusProducts from "../../../assets/marcas/asusProducts.jpg";
import Carrusel from "../../commons/Carrusel/Carrusel";

const MARCAS = [
  {
    id: 0,
    logo: asusLogo,
    image: asusProducts,
  },
  {
    id: 1,
    logo: asusLogo,
    image: asusProducts,
  },
  {
    id: 2,
    logo: asusLogo,
    image: asusProducts,
  },
  {
    id: 3,
    logo: asusLogo,
    image: asusProducts,
  },
  {
    id: 4,
    logo: asusLogo,
    image: asusProducts,
  },
  {
    id: 5,
    logo: asusLogo,
    image: asusProducts,
  },
  {
    id: 6,
    logo: asusLogo,
    image: asusProducts,
  },
  {
    id: 7,
    logo: asusLogo,
    image: asusProducts,
  },
];

const MarcasSection = () => {
  return (
    <section id="marcasSection">
      <div className="section-text">
        <h2>Garantizamos eficiencia y calidad</h2>
        <span>Algo lindo que se nos ocurra</span>
      </div>
      <Carrusel items={MARCAS} />
    </section>
  );
};

export default MarcasSection;
