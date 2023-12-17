import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './product.css'
import ProductCard from '../../components/dynamic/Card/ProductCard'
import Spinner from '../../components/dynamic/Loader/Spinner'
import apiUrl from '../../utils/api'

const Products = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = async () => {
      axios.get(`${apiUrl.productAPI}`)
        .then(response => setItems(response.data))
        .catch(error => console.log(error))
    }
    getItems()

  }, [])

  if (items.length === 0) {
    return <Spinner />
  }

  return (
    <div className='container py-5'>
      <div className="row gy-4">

        {
          items && items.map(item => {
            return (
              <ProductCard data={item} key={item.id} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Products