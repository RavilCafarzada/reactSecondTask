import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Index/HomePage'
import Products from '../pages/Products/Products'
import Layout from '../layout/Layout';
import { ProductDetail } from '../pages/Details/ProductDetail';

export const PublicRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:id' element={<ProductDetail />} />
            </Routes>
        </Layout>
    )
}
