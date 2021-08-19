import React from 'react'
import { Fragment } from 'react'




const ProductCategoriesItem = ({ cat }) => {

    return (
        <Fragment>
            <div className='containerCat'>
                <img className='imageCat' style={{ height: "600px" }} src={cat.image} alt="" />
                <div className='overlayCat'>
                    <div className="textCat">
                        <p style={{ color: "black", fontSize: "40px" }}>{cat.name}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductCategoriesItem
