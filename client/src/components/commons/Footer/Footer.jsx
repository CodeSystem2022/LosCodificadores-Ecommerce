import "./Footer.css";
import gamertechLogo from "../../../assets/logos/gamertech.png";
import whatsappIcon from '../../../assets/icons/whatsapp.png'
import facebookIcon from '../../../assets/icons/facebook.png'
import instagramIcon from '../../../assets/icons/instagram.png'
import twitterIcon from '../../../assets/icons/twitter.png'

const Footer = () => {
  return (
    <footer>
      <div className="enterpriseInfo">
        <a href="/">
          <img src={gamertechLogo} alt="enterprise logo" />
        </a>
        <p>
          Venta de Computadoras, Notebooks, Monitores, Impresoras, Accesorios
          Gamers y todo lo que necesites en Computacion. Con 21 Años de
          Experiencia. Desde 2002 hasta Hoy.
        </p>
      </div>
      <div className="links">
        <h2>Información</h2>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/armapc">Arma tu PC</a>
          </li>
          <li>
            <a href="/productos">Productos</a>
          </li>
          <li>
            <a href="/pedidos">Mis pedidos</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
        </ul>
      </div>
      <div className="links">
        <h2>Categorias</h2>
        <ul>
          <li>
            <a href="/productos/notebooks">Notebooks</a>
          </li>
          <li>
            <a href="/productos/teclados">Teclados</a>
          </li>
          <li>
            <a href="/productos/mouses">Mouse</a>
          </li>
          <li>
            <a href="/productos/auriculares">Auriculares</a>
          </li>
          <li>
            <a href="/productos/consolas">Consolas</a>
          </li>
          <li>
            <a href="/productos/impresoras">Impresoras</a>
          </li>
          <li>
            <a href="/productos/ofertas">Ofertas</a>
          </li>
        </ul>
      </div>
      <div className="links">
        <h2>Contactanos</h2>
        <ul>
          <li>Av. Urquiza 7581</li>
          <li>
            <a href="mailto">gamertech@info.com</a>
          </li>
          <li>
            <a href="call">2604847251</a>
          </li>
          <li>Lunes a Sábados de 9 a 18hrs</li>
        </ul>
      </div>
      <div className="redes">
        <h2>¡Seguinos en nuestras redes!</h2>
        <div className="redes-icons">
          <a href="">
            <img src={whatsappIcon} alt="whatsapp icon" />
          </a>
          <a href="">
            <img src={facebookIcon} alt="facebook icon" />
          </a>
          <a href="">
            <img src={instagramIcon} alt="instagram icon" />
          </a>
          <a href="">
            <img src={twitterIcon} alt="twitter icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
