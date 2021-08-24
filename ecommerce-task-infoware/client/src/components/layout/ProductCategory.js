import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import ProductCategoriesItem from './ProductCategoriesItem'

const productCategories = [
    {

        "id": 1,
        "name": "Furnitures",
        "image": "https://cdn.shopify.com/s/files/1/0068/2302/t/185/assets/featured-collection-2-image.jpg?v=11563074031299091370"
    },
    {
        "id": 2,
        "name": "Beds",
        "image": "https://cdn.shopify.com/s/files/1/0068/2302/t/185/assets/featured-collection-3-image.jpg?v=10435905847560689641",
    },
    {
        "id": 3,
        "name": "Walls",
        "image": "https://cdn.shopify.com/s/files/1/0068/2302/t/185/assets/featured-collection-5-image.jpg?v=10330377674575777026",
    },
    {
        "id": 4,
        "name": "Accessories",
        "image": "https://cdn.shopify.com/s/files/1/0068/2302/t/185/assets/featured-collection-1-image.jpg?v=17080006236919072773"
    },
    {
        "id": 5,
        "name": "Pillows/Blankets",
        "image": "https://cdn.shopify.com/s/files/1/0068/2302/t/185/assets/featured-collection-4-image.jpg?v=3234072517853800449"
    },
    {
        "id": 6,
        "name": "Artists",
        "image": "https://cdn.shopify.com/s/files/1/0068/2302/t/185/assets/featured-collection-6-image.jpg?v=10802348137019038687"
    }
]

const ProductCategory = () => {
    return (
        <Fragment>
            <p style={{ textAlign: "center", fontSize: "35px", margin: "50px", borderBottom: "1px solid #c4df4e", left: "20%" }}>Our Products</p>
            <div className="grid-3 my-4">
                {productCategories.map((cat) => (
                    <Link to="#!">
                        <ProductCategoriesItem key={cat.id} cat={cat} />
                    </Link>
                )
                )}

            </div>
        </Fragment>
    )
}

export default ProductCategory
