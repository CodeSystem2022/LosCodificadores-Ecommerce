import { Card } from '../../commons/Card/Card'
import './ProductosGrid.css'

const ProductosGrid = ({products}) => {
  return (
    <section className="productsGrid">
        {products?.map((product) => (
          <Card item={product} key={product.id} />
        ))}
      </section>
  )
}

export default ProductosGrid