import React from 'react'
import createStyles from '@material-ui/styles/createStyles';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) =>
    createStyles({
        buynowButton: {
            fontSize: "20px",
            marginTop: "20px",
            transition: "all 0.25s ",

            "&:hover": {
                background: "black",
                color: "white"

            }
        }
    }
    ));

const ProductInfo = ({ product }) => {
    const classes = useStyles();

    return (
        <div>
            <h3 style={{ borderBottom: "2px solid grey", padding: "10px" }}>{product.name}</h3>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>{product.description}</p>

            <br />
            <br />
            <p>PRODUCT DETAILS</p>
            <p style={{ width: "300px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit neque sapiente nesciunt.</p>

            <Link to="/register">
                <button className={`btn ${classes.buynowButton}`}>BUY NOW</button>
            </Link>
        </div>
    )
}

export default ProductInfo
