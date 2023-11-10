import Button from "../components/commons/Button/Button"
import { Layout } from "./Layout"
import errorImage from '../assets/error404.gif'

export const Error404 = () => {
  return (
    <Layout>
        <div className="section-text">
        <h2>Oops! La página que desea visitar no está disponible</h2>
        <div>
          <Button
            text="Volver a la Home"
            variant="primary"
            onClick={() => (window.location.href = "/")}
          />
        </div>
        <img src={errorImage} alt="Error 404..." />
      </div>
    </Layout>
  )
}