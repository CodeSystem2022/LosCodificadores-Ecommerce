import { Card } from "../../commons/Card/Card";
import "./OfertasSection.css";

const OFFERED_PRODUCTS = [
  {
    id: 0,
    title: "Noblex - Intel i3",
    description: "Intel i3, SSD 256GB, DDR4 8GB, BLA BLA BLA",
    images: [
      "/src/assets/images/products/0/1.jpg",
      "/src/assets/images/products/0/2.jpg",
      "/src/assets/images/products/0/3.jpg",
      "/src/assets/images/products/0/4.jpg",
    ],
  },
  {
    id: 1,
    title: "Noblex - Intel i3",
    description: "Intel i3, SSD 256GB, DDR4 8GB, BLA BLA BLA",
    images: [
      "/src/assets/images/products/1/1.jpg",
      "/src/assets/images/products/1/2.jpg",
      "/src/assets/images/products/1/3.jpg",
      "/src/assets/images/products/1/4.jpg",
    ],
  },
  {
    id: 2,
    title: "Noblex - Intel i3",
    description: "Intel i3, SSD 256GB, DDR4 8GB, BLA BLA BLA",
    images: [
      "/src/assets/images/products/2/1.jpg",
      "/src/assets/images/products/2/2.jpg",
      "/src/assets/images/products/2/3.jpg",
      "/src/assets/images/products/2/4.jpg",
    ],
  },
  {
    id: 3,
    title: "Noblex - Intel i3",
    description: "Intel i3, SSD 256GB, DDR4 8GB, BLA BLA BLA",
    images: [
      "/src/assets/images/products/3/1.jpg",
      "/src/assets/images/products/3/2.jpg",
      "/src/assets/images/products/3/3.jpg",
      "/src/assets/images/products/3/4.jpg",
    ],
  },
];

const OfertasSection = () => {
  return (
    <section id="ofertasSection">
      <div className="section-text">
        <h2>Las mejores ofertas</h2>
        <span>En todos nuestras computadoras y artefactos</span>
      </div>
      <div className="itemsContainer">
        {OFFERED_PRODUCTS.map((product) => (
          <Card
            key={product.id}
            item={product}
          />
        ))}
      </div>
    </section>
  );
};

export default OfertasSection;
