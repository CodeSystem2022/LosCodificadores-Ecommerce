import gamertechLogo from "../../../assets/logos/gamertech.png";
import Filters from "../../productos/filters/Filters";
import Button from "../Button/Button";
import "./Navbar.css";

function Navbar({ filters }) {
  console.log(filters);
  return (
    <div className="navContainer">
      <nav>
        <a href="/">
          <img src={gamertechLogo} alt="enterprise logo" />
        </a>
        <input type="text" />
        <ul>
          <li>
            <a href="/productos">Productos</a>
          </li>
          <li>
            <a href="/armapc">Arma tu PC</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
          {!filters && (
            <li>
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
              </select>
            </li>
          )}
        </ul>
        <div className="btn-container">
          <Button text="Ingresar" variant="secondary" />
          <Button text="Crear cuenta" variant="primary" />
        </div>
      </nav>
      {filters && <Filters />}
    </div>
  );
}

export default Navbar;
