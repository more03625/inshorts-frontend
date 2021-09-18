import React from "react";
import Logo from '../../assets/images/news-db-pc-light-logo.png'
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <footer className="footer bg-dark pt-5">
                <div className="container">
                    <div className="row pb-2">
                        <div className="col-md-4 col-sm-6">
                            <div className="widget widget-links widget-light pb-2 mb-4">
                                <h3 className="widget-title text-light">Shop departments</h3>
                                <ul className="widget-list">
                                    <li className="widget-list-item">
                                        <Link className="widget-list-link" to={'#'}>About Us</Link>
                                        <Link className="widget-list-link" to={'#'}>Contact Us</Link>
                                        <Link className="widget-list-link" to={'#'}>Privacy Policy and Disclaimer</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/*
                        <div className="col-md-4">
                            <div className="widget pb-2 mb-4">
                                <h3 className="widget-title text-light pb-1">Stay informed</h3>
                                <form className="subscription-form validate" action="#" method="post" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                                    <div className="input-group flex-nowrap"><i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                        <input className="form-control rounded-start" type="email" name="EMAIL" placeholder="Your email" required />
                                        <button className="btn btn-primary" type="submit" name="subscribe">Subscribe*</button>
                                    </div>

                                    <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                                        <input className="subscription-form-antispam" type="text" name="b_c7103e2c981361a6639545bd5_29ca296126" tabIndex="-1" />
                                    </div>
                                    <div className="form-text text-light opacity-50">*Subscribe to our newsletter to receive early discount offers, updates and new products info.</div>
                                    <div className="subscription-status"></div>
                                </form>
                            </div>
                        </div>
                        */}
                    </div>
                </div>
                <div className="pt-5 bg-darker">
                    <div className="container">
                        <hr className="hr-light mb-5" />
                        <div className="row pb-2">
                            <div className="col-md-6 text-center text-md-start mb-4">
                                <div className="text-nowrap mb-4"><a className="d-inline-block align-middle mt-n1 me-3" href="#">
                                    <img className="d-block" src="../../../assets/images/logo/NewsDB_footer.png" width="117" alt="Cartzilla" /></a>
                                </div>
                            </div>
                            <div className="col-md-6 text-center text-md-end mb-4">
                                <div className="mb-3">
                                    <a className="btn-social bs-light bs-facebook ms-2 mb-2" href="https://www.facebook.com/newsdb.in"><i className="ci-facebook"></i></a>
                                    <a className="btn-social bs-light bs-instagram ms-2 mb-2" href="http://instagram.com/newsdb.in"><i className="ci-instagram"></i></a>
                                    <a className="btn-social bs-light bs-pinterest ms-2 mb-2" href="https://in.pinterest.com/newsdbindia"><i className="ci-pinterest"></i></a>
                                </div>

                            </div>
                        </div>
                        <div className="row pb-2">
                            <div className="pb-4 fs-xs text-light opacity-50 text-center text-md-start">© All rights reserved. Made by <a className="text-light" href="https://github.com/more03625" target="_blank" rel="noopener">Rahul More</a></div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="handheld-toolbar">
                <div className="d-table table-layout-fixed w-100">
                    <a className="d-table-cell handheld-toolbar-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#blog-sidebar">
                        <span className="handheld-toolbar-icon">
                            <i className="ci-sign-in"></i></span>
                        <span className="handheld-toolbar-label">Sidebar</span>
                    </a>
                    <a className="d-table-cell handheld-toolbar-item" href="account-wishlist.html">
                        <span className="handheld-toolbar-icon"><i className="ci-heart"></i>
                        </span>
                        <span className="handheld-toolbar-label">Wishlist</span>
                    </a>
                </div>
            </div>
            <a className="btn-scroll-top" href="#top" data-scroll><span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span><i className="btn-scroll-top-icon ci-arrow-up">   </i></a>

        </>
    )

}
export default Footer;