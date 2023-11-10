import Banner from "../components/commons/Banner/Banner";
import CategoriaSection from "../components/home/categoriaSection/CategoriaSection";
import MarcasSection from "../components/home/marcasSection/MarcasSection";
import OfertasSection from "../components/home/ofertasSection/OfertasSection";
import { homeBanner } from "../components/home/homeBanner";
import { Layout } from "./Layout";

export const Home = () => {
  return (
    <Layout>
      <Banner images={homeBanner}/>
      <MarcasSection/>
      <OfertasSection/>
      <CategoriaSection categoriaTitle='notebooks'/>
      <CategoriaSection categoriaTitle='monitores'/>
      <CategoriaSection categoriaTitle='motherboards'/>
      <CategoriaSection categoriaTitle='microprocesadores'/>
    </Layout>
  )
}