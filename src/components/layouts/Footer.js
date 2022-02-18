import React from "react";
import Logo from '../../assets/images/news-db-pc-light-logo.png'
import { Link } from "react-router-dom";
import { appVersion } from "../../helpers/comman_helper";
const Footer = () => {
    return (
        <>
            <footer className="footer bg-dark pt-5">
                {/* <div className="container">
                    <div className="row pb-2">
                        <div className="col-md-4 col-sm-6">
                            <div className="widget widget-links widget-light pb-2 mb-4">
                                <h3 className="widget-title text-light">Information</h3>
                                <ul className="widget-list">
                                    <li className="widget-list-item">
                                        <Link className="widget-list-link" target="_blank" to={{ pathname: 'https://www.newsdb.in/about-us' }}>About us</Link>
                                        <Link className="widget-list-link" target="_blank" to={{ pathname: 'https://www.newsdb.in/contact-us' }}>Contact us</Link>
                                        <Link className="widget-list-link" target="_blank" to={{ pathname: 'https://www.newsdb.in/privacy-policy-and-disclaimer' }}>Privacy Policy and Disclaimer</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div> */}
                <div className="pt-5 bg-darker">
                    <div className="container">
                        <hr className="hr-light mb-5" />
                        <div className="row pb-2">
                            <div className="col-md-6 text-center text-md-start mb-4">
                                <div className="text-nowrap mb-4">
                                    <Link className="d-inline-block align-middle mt-n1 me-3" to='/'>
                                        <img className="d-block" src="../../../assets/images/logo/NewsDB_footer.png" width="117" alt="Cartzilla" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 text-center text-md-end mb-4">
                                <div className="mb-3">
                                    <a className="btn-social bs-light bs-facebook ms-2 mb-2"  target="_blank" href="https://www.facebook.com/newsdb.in"><i className="ci-facebook"></i></a>
                                    <a className="btn-social bs-light bs-instagram ms-2 mb-2" target="_blank" href="http://instagram.com/newsdb.in"><i className="ci-instagram"></i></a>
                                    <a className="btn-social bs-light bs-pinterest ms-2 mb-2" target="_blank" href="https://in.pinterest.com/newsdbindia"><i className="ci-pinterest"></i></a>
                                </div>

                                <div className="row pb-2">
                            <div className="pb-4 fs-xs text-light opacity-50">App version {appVersion}</div>
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
                    <a className="d-table-cell handheld-toolbar-item" href="#signin-modal" data-bs-toggle="modal">
                        <span className="handheld-toolbar-icon"><i className="ci-heart"></i>
                        </span>
                        <span className="handheld-toolbar-label">Login</span>
                    </a>
                </div>
            </div>
            <a className="btn-scroll-top" href="#top" data-scroll><span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span><i className="btn-scroll-top-icon ci-arrow-up">   </i></a>

        </>
    )

}
export default Footer;