import Button from '../Button/Button'
import './Card.css'

export const Card = ({id, title, description, images, className})=>{
    return <article className={className + ' card'} id={id}>
        <img src={images[0]} alt="product" />
        <h2>{title}</h2>
        <p>{description.length > 40 ? description.slice(0, 40) + '...' : description }</p>
        <div className="btnContainer">
            <Button text="Ver producto" variant="primary"/>
        </div>
    </article>
}
