import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    const { id, title, price, image } = props.data
    return (
        <div className='col-lg-3'>
            <div className="card" >
                <div className="card-image">
                    <Link to={`/products/${id}`}>
                        <img src={image} className="card-img-top" alt="..." />
                    </Link>
                </div>
                <div className="card-body py-5">
                    <h5 className="card-title">{title}</h5>
                    <p>{price} ₼</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard