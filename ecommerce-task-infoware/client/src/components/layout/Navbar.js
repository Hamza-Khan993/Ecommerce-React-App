import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext';
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>
    createStyles({

        regLog: {
            display: "flex",
            padding: "0rem",
            gap: "20px",
            alignItems: "center",

            "@media (max-width: 950px)": {
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                alignItems: "initial"
            }
        },
        loginButton: {
            marginLeft: "20px",
            // padding: "15px",
            fontSize: "18px",

            "@media (max-width: 950px)": {
                display: "block",
                width: "100%"
            }
        },

        regButton: {
            marginRight: "20px",
            // padding: "15px",
            fontSize: "18px",


            "@media (max-width: 950px)": {
                display: "block",
                width: "100%"
            }
        },
    }),
);


const Navbar = ({ title, icon }) => {
    const classes = useStyles();

    const authContext = useContext(AuthContext);

    const { isAuthenticated, logout, user, loadUser } = authContext;

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, []);

    const onLogout = () => {
        logout();
    };

    const authLinks = (
        <Fragment>
            <li>Hello {user && user.name}</li>
            <li style={{ marginLeft: "20px" }}>
                <Link className="btn btn-dark" onClick={onLogout} to='/'>
                    <i className='fas fa-sign-out-alt' />{' '}
                    <span className='hide-sm'>Logout</span>
                </Link>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <li>
                <Link className={`${classes.regButton} btn btn-dark`} to='/register'>Register</Link>
            </li>
            <li>
                <Link className={`${classes.loginButton} btn btn-dark`} to='/login'>Login</Link>
            </li>
        </Fragment>
    );
    return (
        <nav style={{ border: 'none' }} className="navbar navbar-expand-lg navbar-light bg-light">
            <div style={{ alignItems: "flex-start", marginTop: "20px" }} className="container-fluid">
                <Link className="navbar-brand" to="/"><i className={icon} style={{ marginRight: "10px" }}></i> {title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item h5">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item h5">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                    </ul>
                    <ul className={classes.regLog} >
                        {isAuthenticated ? authLinks : guestLinks}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: "DenyDesigns",
    icon: "fas fa-store-alt"
}

export default Navbar
