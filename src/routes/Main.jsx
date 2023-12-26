import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'

const Products = lazy(() => import('../pages/Products'))
const Product = lazy(() => import('../pages/Product'))
const CreateProduct = lazy(() => import('../pages/Product/Create'))
const Cart = lazy(() => import('../pages/Cart'))
const Home = lazy(() => import('../pages/Home'))

export default function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route element={<Suspense><Home /></Suspense>} index />
                    <Route path='cart' element={<Suspense><Cart /></Suspense>} />
                    <Route path='product'>
                        <Route path='create' element={<Suspense><CreateProduct /></Suspense>} />
                        <Route path=':id' element={<Suspense><Product /></Suspense>} />
                    </Route>
                    <Route path='products' element={<Suspense><Products /></Suspense>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
