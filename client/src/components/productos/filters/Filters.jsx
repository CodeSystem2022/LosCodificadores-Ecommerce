import { useContext } from "react";
import Button from "../../commons/Button/Button";
import "./Filters.css";
import { ProductContext } from "../../../context/ProductContext";

const Filters = () => {
  const { orderProductsByHigherPrice, orderProductsByLowerPrice } = useContext(ProductContext);

  return (
    <div className="filterButtonsContainer">
      <select
        name="categorias"
        id="categorias"
        onChange={(e) =>
          (window.location.href = `/productos/${e.target.value}`)
        }
      >
        <option value={null} selected disabled>
          Categorias
        </option>
        <option value="notebooks">Portatiles</option>
        <option value="monitores">Monitores</option>
        <option value="gabinetes">Gabinetes</option>
        <option value="memorias_ram">Memorias ram</option>
        <option value="motherboards">Placas madre</option>
        <option value="discos">Discos rígidos</option>
        <option value="microprocesadores">Procesadores</option>
        <option value="placas_video">Placas de video</option>
        <option value="fuentes">Fuentes de energía</option>
        <option value="coolers">Coolers</option>
        <option value="teclados">Teclados</option>
      </select>
      <div className="btn-container">
        <Button variant="primary" text="Menor precio" onClick={()=> orderProductsByLowerPrice()} />
        <Button variant="primary" text="Mayor precio" onClick={()=> orderProductsByHigherPrice()}/>
      </div>
      <a href="/productos">Limpiar filtros</a>
    </div>
  );
};

export default Filters;