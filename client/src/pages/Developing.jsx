import Button from "../components/commons/Button/Button";
import { Layout } from "./Layout";
import developImage from "../assets/homer-simpson.gif";

export const Developing = () => {
  return (
    <Layout>
      <div className="section-text">
        <h2>Oops! Esta pagina está en desarrollo</h2>
        <div>
          <p>
            Proximamente vas a poder disfrutar nuestra pagina al 100%, te
            pedimos disculpas
          </p>
          <Button
            text="Volver a la Home"
            variant="primary"
            onClick={() => (window.location.href = "/")}
          />
        </div>
        <img src={developImage} alt="Desarrollando..." />
      </div>
    </Layout>
  );
};
