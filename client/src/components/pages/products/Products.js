import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import Spinner from '../../layout/Spinner'
import Product from './Product'

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const getProducts = async () => {
        setLoading(true)
        const res = await axios.get('/api/products')

        setProducts(res.data)
        setLoading(false)
    }
    useEffect(() =>
        getProducts()
        , [])


    return (

        <Fragment>
            {loading ? <Spinner /> :
                <div className="grid-3 ">
                    {products.map((product) => (
                        <Product key={product._id} product={product} />
                    )
                    )}
                </div>
            }
        </Fragment>

    )
}

export default Products
