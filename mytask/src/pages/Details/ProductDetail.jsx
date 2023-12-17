import React, { useEffect, useState } from 'react'
import './details.css'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from '../../components/dynamic/Loader/Spinner'
import axios from 'axios'
import apiUrl from '../../utils/api'

export const ProductDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [item, setItem] = useState()
    const [active, setActive] = useState(false)

    useEffect(() => {
        const getItem = async () => {
            axios.get(`${apiUrl.productAPI}/${id}`)
                .then(response => setItem(response.data))
                .catch(error => console.log(error))
        }
        getItem()

    }, [])

    if (item === null) {
        return <Spinner />
    }


    const getRating = (value) => {
        const reytinq = Math.round(value)
        let star = ''
        for (let i = 0; i < reytinq; i++) {
            star += '*'
        }
        return star
    }

    return (
        <div className='py-5'>
            {
                item ? <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="image">
                                <img src={item.image} alt=''></img>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <h5>{item.title}</h5>
                            <button className={active ? 'btn btn-warning' : 'btn btn-success'} onClick={() => setActive(!active)}>{active ? 'Less Info' : 'More Info'}</button>
                            {
                                active ? <div>
                                    <p>{item.description}</p>
                                    <p>{item.price} AZN</p>
                                    <p>Rating: {item.rating.rate}/5 ({item.rating.rate}) rating</p>
                                    <p>
                                        {getRating(item.rating.rate)}
                                    </p>
                                </div> : null
                            }
                        </div>
                    </div>
                </div> : 'Product Not Found...'
            }
        </div>
    )
}
