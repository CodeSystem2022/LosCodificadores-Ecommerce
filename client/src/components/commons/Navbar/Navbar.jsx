import gamertechLogo from "../../../assets/logos/gamertech.png";
import Button from "../Button/Button";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navContainer">
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
        <li>
          <select name="categorias" id="categorias">
            <option value="notebooks">Portatiles</option>
            <option value="monitores">Monitores</option>
            <option value="gabinetes">Gabinetes</option>
          </select>
        </li>
      </ul>
      <div className="btn-container">
        <Button text="Ingresar" variant="secondary" />
        <Button text="Crear cuenta" variant="primary" />
      </div>
    </nav>
  );
}

export default Navbar;
