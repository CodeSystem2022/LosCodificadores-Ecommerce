import "./PreFooter.css";
import enviosIcon from '../../../assets/icons/enviado.png'
import pagoIcon from '../../../assets/icons/mano.png'
import soporteIcon from '../../../assets/icons/apoyo.png'

const PreFooter = () => {
  return (
    <section id="preFooterContainer">
      <article
        className="preFooterCard"
        onClick={() => (window.location.href = "/envios")}
      >
        <img src={enviosIcon} alt="preFooter icon" />
        <h2>Envios</h2>
        <p>Hacemos envios a todo el pais, consulta por tu codigo postal</p>
      </article>
      <article
        className="preFooterCard"
        onClick={() => (window.location.href = "/metodos_pago")}
      >
        <img src={pagoIcon} alt="preFooter icon" />
        <h2>Métodos de pago</h2>
        <p>Aceptamos multiples medios de pago implementando Mercado Pago</p>
      </article>
      <article
        className="preFooterCard"
        onClick={() => (window.location.href = "/contacto")}
      >
        <img src={soporteIcon} alt="preFooter icon" />
        <h2>Soporte</h2>
        <p>
          ¿Tenés algun tipo de problema? Ponete en contacto, lo solucionamos
        </p>
      </article>
    </section>
  );
};

export default PreFooter;