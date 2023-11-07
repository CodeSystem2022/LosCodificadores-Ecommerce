import './Loader.css'
import loaderImage from '../../../assets/loader.gif'

const Loader = () => {
  return (
    <section id="loader">
        <img src={loaderImage} alt="cargando..." />
    </section>
  )
}

export default Loader