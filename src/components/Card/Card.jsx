import { Link } from 'react-router-dom'
import './Card.css'

export const Card = ({id, title, price, address, date, img}) => {
    return (
        <Link to={`/product/${id}`} className="card">
            <div className="card--img">
                <img src={img} alt="card-img"/>
            </div>
            <h5 className="card--title">{title}</h5>
            <div className="card--price">{price} ₽</div>
            <div className="card--desc-box">
                <span className="card--desc">{address}</span>
                <span className="card--desc">{date}</span>
            </div>
        </Link>
    )
}