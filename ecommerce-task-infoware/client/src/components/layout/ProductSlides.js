import { makeStyles } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';
import React from 'react'
import { Fragment } from 'react'
// import products from '../pages/products/ProductsData'


const useStyles = makeStyles((theme) =>
    createStyles({
        slidesImage: {
            height: "600px",
            width: "600px",
            margin: "auto"
        }
    }),
);


const ProductSlides = ({ image1, image2, image3 }) => {
    const classes = useStyles();
    return (

        <Fragment>

            <div id="carouselExampleIndicators" className={`${classes.bottomImage} carousel carousel-dark slide`} data-bs-ride="carousel" data-bs-interval="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image1} className={`${classes.slidesImage} d-block`} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className={`${classes.slidesImage} d-block`} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className={`${classes.slidesImage} d-block`} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </Fragment>
    )
}

export default ProductSlides
