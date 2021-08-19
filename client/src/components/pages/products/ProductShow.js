import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../../layout/Spinner'
import ProductSlides from '../../layout/ProductSlides'
import ProductInfo from './ProductInfo'



const ProductShow = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const [images, setImages] = useState([])

    const getProduct = async () => {

        setLoading(true)

        const res = await axios.get(`/api/product/${id}`)

        setProduct(res.data)
        setImages(res.data.images)

        setLoading(false)

    }
    useEffect(() =>
        getProduct()

        //eslint-disable-next-line
        , [])

    return (

        <Fragment>
            {loading ? <Spinner /> :
                <div style={{ margin: "10px 50px " }} className="grid-2 ">
                    <div >
                        <ProductSlides
                            image1={images[0]}
                            image2={images[1]}
                            image3={images[2]} />

                    </div>
                    <div style={{ justifySelf: "center", textAlign: "center", alignSelf: "center" }}>
                        <ProductInfo product={product} />
                    </div>
                </div>
            }
        </Fragment>

    )
}

export default ProductShow
