import { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../../context/CartContext";
import closeIcon from "../../../assets/icons/cerrar.png";
import Button from "../Button/Button";
import { Wallet } from "@mercadopago/sdk-react";
import { useMercadoPago } from "../../../hooks/useMercadoPago";
import Loader from "../Loader/Loader";

const Cart = ({ isOpen }) => {
  const {
    closeCart,
    cartItems,
    decreaseCartQuantity,
    increaseCartQuantity,
    getItemQuantity,
  } = useContext(CartContext);

  const { preferenceId, handleBuy, isLoading } = useMercadoPago();
  return (
    <>
      <section id="cartContainer" className={isOpen ? "actived" : "desactived"}>
        {isLoading && <Loader />}
        <div className="cart">
          <div id="closeIcon">
            <img src={closeIcon} alt="Close cart" onClick={closeCart}/>
          </div>
          <h2>Tu Carrito:</h2>
          {cartItems.map((item, idx) => (
            <div key={idx} className="cartItem">
              <div className="col">
                <h3>{item.name}</h3>
                <div className="btn-container">
                  <Button
                    text="-"
                    variant="secondary_icon"
                    onClick={() => decreaseCartQuantity(item)}
                  />
                  <p className="quantity">{item.quantity}</p>
                  <Button
                    text="+"
                    variant="secondary_icon"
                    onClick={() => increaseCartQuantity(item)}
                    disabled={item.stock <= getItemQuantity(item._id)}
                  />
                </div>
              </div>
              <span className="price">${item.quantity * item.price}</span>
            </div>
          ))}
          <div className="totalPrice">

          </div>
          <Button
            text="Pagar"
            variant="primary"
            onClick={() => handleBuy(cartItems)}
            disabled={preferenceId ? true : false}
          />
          {preferenceId && <Wallet initialization={{ preferenceId }} />}
        </div>
        <div className="background" onClick={closeCart}></div>
      </section>
    </>
  );
};

export default Cart;
