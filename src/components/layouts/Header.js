import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthModal from './AuthModal';
import { Host, Endpoints, getUserToken, logout } from "../../helpers/comman_helper";
import axios from "axios";
const Header = () => {

    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        var url = Host + Endpoints.category
        const result = await axios.get(url);
        if (result.data.error === true) {
            alert('Recived error| Please reload the app')
        } else {
            setCategories(result.data.data.detail);
        }
    }
    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>
            {/*<body className="toolbar-enabled">*/}
            <AuthModal />
            <main className="page-wrapper">
                <header className="shadow-sm">
                    <div className="navbar-sticky bg-light">
                        <div className="navbar navbar-expand-lg navbar-light">
                            <div className="container">
                                <Link className="navbar-brand d-none d-sm-block flex-shrink-0" to="/">
                                    <img src={Host + '/uploads/logo/news-db-pc-light-logo.png'} width="142" alt="NewsDB" />

                                </Link>
                                <a className="navbar-brand d-sm-none flex-shrink-0 me-2" to="/">
                                    <img src={Host + '/uploads/logo/news-db-mobile-light-logo.png'} width="74" alt="NewsDB Mobile" />
                                </a>
                                <div className="input-group d-none d-lg-flex mx-4">
                                    <input className="form-control rounded-end pe-5" type="text" placeholder="Search for products" /><i className="ci-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3"></i>
                                </div>
                                <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span className="navbar-toggler-icon"></span></button><a className="navbar-tool navbar-stuck-toggler" href="#"><span className="navbar-tool-tooltip">Expand menu</span>
                                        <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-menu"></i></div></a>
                                    {
                                        getUserToken() === null ? (
                                            <a className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" href="#signin-modal" data-bs-toggle="modal">
                                                <div className="navbar-tool-icon-box">
                                                    <i className="navbar-tool-icon ci-user"></i>
                                                </div>
                                                <div className="navbar-tool-text ms-n3">
                                                    <small>Hello, Sign in</small>My Account
                                                </div>
                                            </a>
                                        ) : (
                                            <a className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" href="#" onClick={logout}>
                                                <div className="navbar-tool-icon-box">
                                                    <i className="navbar-tool-icon ci-user"></i>
                                                </div>
                                                <div className="navbar-tool-text ms-n3">
                                                    Logout
                                                </div>
                                            </a>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2">
                            <div className="container">
                                <div className="collapse navbar-collapse" id="navbarCollapse">
                                    <div className="input-group d-lg-none my-3"><i className="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"></i>
                                        <input className="form-control rounded-start" type="text" placeholder="Search for products" />
                                    </div>
                                    <ul className="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">

                                        <li className="nav-item dropdown">

                                            <a className="nav-link dropdown-toggle ps-lg-0" href="#" data-bs-toggle="dropdown"><i className="ci-view-grid me-2"></i>Information</a>
                                            <div className="dropdown-menu p-0">
                                                <div className="d-flex flex-wrap flex-sm-nowrap px-2">
                                                    <div className="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                                                        <div className="widget widget-links mb-4">
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item">
                                                                    <Link className="widget-list-link" to={'#'}>About us</Link>
                                                                </li>
                                                                <li className="widget-list-item">
                                                                    <Link className="widget-list-link" to={'#'}>Contact us</Link>
                                                                </li>
                                                                <li className="widget-list-item">
                                                                    <Link className="widget-list-link" to={'#'}>Privacy Policy and Disclaimer</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Categories</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown position-static mb-0">
                                                    {
                                                        categories.map((value, index) => (
                                                            <Link key={index} className="dropdown-item py-2" to={`/category/${value.slug}/${value._id}`}>
                                                                <span className="d-block text-heading">{value.name}</span>
                                                                <small className="d-block text-muted">Short News <b>{value.name}</b></small>
                                                            </Link>
                                                        ))
                                                    }
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </main>


        </>
    )
}
export default Header;