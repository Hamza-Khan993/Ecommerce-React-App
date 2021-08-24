import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, createStyles } from '@material-ui/core/styles';

const Images = [
    {

        "src": "https://www.theelevate.in/images/Beds/modern-bed-designs.png"
    },
    {
        "src": "https://i.pinimg.com/originals/a8/76/e1/a876e1b547bb61097ddd12531b351ee0.png"
    },
    {
        "src": "https://i.pinimg.com/originals/14/0e/c9/140ec928e22e7f9235bf59672c2fcbf4.png"
    },

]

const useStyles = makeStyles((theme) =>
    createStyles({
        mainContainer: {
            display: "grid",
            gridTemplateColumns: "repeat(12,1fr)",
            position: "relative",

            "@media (max-width: 920px)": {
                display: "grid",
            }
        },

        topImage: {
            gridColumn: "1 /span 8",
            gridRow: "1",
            zIndex: "1",
            paddingTop: "50px",
            position: "relative",
            "@media (max-width: 920px)": {
                gridColumn: "1 / -1",
                gridRow: "2"
            }
        },
        bottomImage: {
            gridColumn: "4 / -1",
            gridRow: "1",
            "@media (max-width: 920px)": {
                gridColumn: "1 / -1",
                gridRow: "1"
            }
        },
        contentBg: {
            position: "absolute",
            bottom: "0",
            // width: "100%",
            padding: "20px",
            top: "55%",
            left: "40%",
            transform: "translate(-50%,-50%)",

            "@media (max-width: 620px)": {
                top: "45%",
            }

        },
        slidesImage: {
            height: "700px",
            // width: "100%",
            // float: "right",

            "@media (max-width: 920px)": {
                height: "500px",
                width: "900px"
            },
            "@media (max-width: 600px)": {
                height: "400px",
                width: "600px"
            }

        }

    }),
);


const Slides2 = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <div>

                <div id="carouselExampleIndicators" className={`carousel slide`} data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className={`carousel-inner `}>
                        <div className={`carousel-item active ${classes.mainContainer}`}>
                            <div className={classes.topImage}>
                                <img style={{ opacity: "0.5", height: "600px" }} src="https://wallpapercave.com/wp/mOj6vHu.png" alt="" />
                                <div className={classes.contentBg}>
                                    <p style={{ color: "white", fontSize: "20px" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur tempore magnam, autem atque provident necessitatibus natus nemo nisi quam! Numquam, tempore? Esse aut ducimus delectus molestiae alias temporibus inventore animi!</p>
                                    <Link to="/products"><button style={{ opacity: "0.5", fontSize: "30px", transition: "0.30s ease-in-out" }} className="btn shop-now ">Shop Now</button></Link>
                                </div>
                            </div>
                            <div className={classes.bottomImage}>
                                <img src={Images[0].src} className={`${classes.slidesImage} d-block`} alt="..." />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div>
                                <img src={Images[1].src} className={`${classes.slidesImage} d-block`} alt="..." />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Images[2].src} className={`${classes.slidesImage} d-block`} alt="..." />
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
            </div>


        </Fragment >
    )
}

export default Slides2
