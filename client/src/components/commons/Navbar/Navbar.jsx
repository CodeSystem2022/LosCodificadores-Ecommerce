import gamertechLogo from "../../../assets/logos/gamertech.png";
import cartIcon from "../../../assets/icons/cart.png";
import Filters from "../../productos/filters/Filters";
import "./Navbar.css";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { ProductContext } from "../../../context/ProductContext";

function Navbar({ filters }) {
  const [navProducts, setNavProducts] = useState([]);
  const { getProductBySearch } = useContext(ProductContext);
  const { openCart, cartQuantity } = useContext(CartContext);
  function handleChange(e) {
    if (e.target.value) {
      getProductBySearch(e.target.value).then((res) =>
        setNavProducts(res.products)
      );
    } else {
      setNavProducts([]);
    }
  }
  return (
    <div className="navContainer">
      <nav>
        <a href="/">
          <img src={gamertechLogo} alt="enterprise logo" />
        </a>
        <div>
          <input type="text" onChange={(e)=>handleChange(e)}/>
          <div
            className={
              navProducts.length > 0
                ? "navbarProducts actived"
                : "navbarProducts desactived"
            }
          >
            {navProducts.map((product) => (
              <p
                key={product._id}
                onClick={() =>
                  (window.location.href = `/producto/${product._id}`)
                }
              >
                {product.name}
              </p>
            ))}
          </div>
        </div>
        <ul>
          <li>
            <a href="/productos">Productos</a>
          </li>
          <li>
            <a href="/armapc">Arma tu PC</a>
          </li>
          <li>
            <a href="https://wa.me/2604846152" target="_blank" rel="noreferrer">Contacto</a>
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
                <option value="teclados">Teclados</option>
              </select>
            </li>
          )}
        </ul>
        <div className="btn-container cartIcon">
          <img
            src={cartIcon}
            alt="open cart"
            id="cartIcon"
            onClick={openCart}
          />
          <div id="quantity">{cartQuantity}</div>
        </div>
      </nav>
      {filters && <Filters />}
    </div>
  );
}

export default Navbar;
