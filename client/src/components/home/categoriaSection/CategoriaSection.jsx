import Carrusel from '../../commons/Carrusel/Carrusel'
import './CategoriaSection.css'

const CategoriaSection = ({categoriaTitle, }) => {
    const CATEGORY_PRODUCTS = [
        {
          id: 0,
          title: "Noblex - Intel i3",
          description: "Intel i3, SSD 256GB, DDR4 8GB, BLA BLA BLA",
          images: [
            "/src/assets/images/products/0/1.jpg",
            "/src/assets/images/products/0/2.jpg",
            "/src/assets/images/products/0/3.jpg",
            "/src/assets/images/products/0/4.jpg",
          ],
        },
        {
          id: 1,
          title: "Noblex - Intel i3",
          description: "Intel i3, SSD 256GB, DDR4 8GB, BLA BLA BLA",
          images: [
            "/src/assets/images/products/1/1.jpg",
            "/src/assets/images/products/1/2.jpg",
            "/src/assets/images/products/1/3.jpg",
            "/src/assets/images/products/1/4.jpg",
          ],
        },
        {
          id: 2,
          title: "Noblex - Intel i3",
          description: "Intel i3, SSD 256GB, DDR4 8GB, BLA BLA BLA",
          images: [
            "/src/assets/images/products/2/1.jpg",
            "/src/assets/images/products/2/2.jpg",
            "/src/assets/images/products/2/3.jpg",
            "/src/assets/images/products/2/4.jpg",
          ],
        },
        {
          id: 3,
          title: "Noblex - Intel i3",
          description: "Intel i3, SSD 256GB, DDR4 8GB, BLA BLA BLA",
          images: [
            "/src/assets/images/products/3/1.jpg",
            "/src/assets/images/products/3/2.jpg",
            "/src/assets/images/products/3/3.jpg",
            "/src/assets/images/products/3/4.jpg",
          ],
        },
        {
          id: 4,
          title: "Noblex - Intel i3",
          description: "Intel i3, SSD 256GB, DDR4 8GB, BLA BLA BLA",
          images: [
            "/src/assets/images/products/4/1.jpg",
            "/src/assets/images/products/4/2.jpg",
            "/src/assets/images/products/4/3.jpg",
            "/src/assets/images/products/4/4.jpg",
          ],
        },
        {
          id: 5,
          title: "Noblex - Intel i3",
          description: "Intel i3, SSD 256GB, DDR4 8GB, BLA BLA BLA",
          images: [
            "/src/assets/images/products/5/1.jpg",
            "/src/assets/images/products/5/2.jpg",
            "/src/assets/images/products/5/3.jpg",
            "/src/assets/images/products/5/4.jpg",
          ],
        },
      ];
  return (
    <section className='categoriaContainer'>
        <div className="title-link">
            <h2>{categoriaTitle}</h2>
            <a href={'/productos/' + categoriaTitle}>Ver {categoriaTitle}</a>
        </div>
        <Carrusel items={CATEGORY_PRODUCTS} variant='categoria' />
    </section>
  )
}

export default CategoriaSection