import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActions, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import ProductItems from './ProductItems';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { Fragment } from 'react';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            maxWidth: '100%',
            margingTop: "20px"
        },
        cardContent: {
            flexDirection: 'row',
        },
        media: {
            height: "500px"
        },
        cardActions: {
            display: 'flex',
            justifyContent: 'flex-end'
        }
    }
    )
)
const Product = ({ product }) => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Card style={{ cursor: "pointer" }} onClick={() => history.push(`/product/${product._id}`)}>
            <img className={classes.media} src={product.images[0]} alt="" />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="subtitle1"> {product.description} </Typography>


                </div>
                <Typography style={{ marginTop: "10px" }} variant="h5" >
                    {product.price}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
