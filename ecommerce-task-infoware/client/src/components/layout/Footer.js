import React, { Fragment } from 'react'

const Footer = ({ email }) => {
    return (
        <Fragment >
            <div style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "rgb(218 220 226)", margin: "100px 20px" }} className="text-center">
                <div style={footerStyle} className="grid-4 ">
                    <div style={{ textAlign: "start" }}>
                        <p style={{ marginLeft: "0px" }}>COMPANY</p>
                        <ul style={footerList}>
                            <li><a href="#!">Shipping</a> </li>
                            <li><a href="#!">Return Policy</a> </li>
                            <li><a href="#!">Work With Us</a> </li>
                            <li><a href="#!">Terms And Conditions</a> </li>
                        </ul>
                    </div>
                    <div style={{ textAlign: "start" }}>
                        <p style={{ marginLeft: "0px" }}>FOLLOW US OUT THERE</p>
                        <ul style={footerList}>
                            <li><a href="#!"><i className="fab fa-facebook" /> <span>Facebook</span></a> </li>
                            <li><a href="#!"><i className="fab fa-twitter" /> <span>Twitter</span></a> </li>
                            <li><a href="#!"><i className="fab fa-pinterest-square" /> <span>Pintrest</span></a> </li>
                            <li><a href="#!"><i className="fab fa-instagram" /> <span>Instagram</span></a> </li>

                        </ul>
                    </div>
                    <div style={{ textAlign: "start" }}>
                        <p >THANK YOU</p>
                        <p style={{ marginTop: "40px" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, est. Reprehenderit nesciunt quis rerum sed, accusamus voluptatem provident magni eius error sapiente nobis, asperiores earum suscipit consectetur unde corrupti natus?</p>

                    </div>
                    <div style={{ textAlign: "start" }}>
                        <p>NEWSLETTER</p>
                        <form className="d-flex" style={{ marginTop: "20px" }}>
                            <input
                                type="text"
                                name="text"
                                placeholder="yours@gmail.com"
                                value={email}
                                style={{ flexGrow: 1 }}
                            />
                            <input
                                type="submit"
                                value="Subscribe"
                                className="btn btn-sm btn-dark"

                            />
                        </form>

                    </div>
                </div>
                <div style={{ marginTop: "20px" }}>
                    Copyright <span> <i className="fas fa-copyright"></i></span> 2020 Hamza Khan
                </div>
            </div>

        </Fragment>
    )
}

const footerStyle = {
    margin: "50px 100px 0",


}

const footerList = {
    marginTop: "40px",
    listStyleType: "none",
    textDecoration: "none",
    padding: "0rem"
}


export default Footer
