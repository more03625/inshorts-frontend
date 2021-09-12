import React from "react";
import { Link } from "react-router-dom";
import { Host } from "../../../helpers/comman_helper";
const Header = () => {
    return (
        <>
            <header className="bg-light shadow-sm navbar-sticky">
                <div className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <Link className="navbar-brand d-none d-sm-block flex-shrink-0 me-4 order-lg-1" to="/admin/dashboard">
                            <img src={Host + '/uploads/logo/news-db-pc-light-logo.png'} width="142" alt="NewsDB" />
                        </Link>
                        <Link className="navbar-brand d-sm-none me-2 order-lg-1" to="/admin/dashboard">
                            <img src={Host + '/uploads/logo/news-db-mobile-light-logo.png'} width="74" alt="NewsDB Mobile" />
                        </Link>
                        <div className="navbar-toolbar d-flex align-items-center order-lg-3">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapse"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <a
                                className="navbar-tool d-none d-lg-flex"
                                href="#"
                                data-bs-toggle="collapse"
                                data-bs-target="#searchBox"
                                role="button"
                                aria-expanded="false"
                                aria-controls="searchBox"
                            >
                                <span className="navbar-tool-tooltip">Search</span>
                                <div className="navbar-tool-icon-box">
                                    <i className="navbar-tool-icon ci-search"></i>
                                </div>
                            </a>
                            <a
                                className="navbar-tool d-none d-lg-flex"
                                href="dashboard-favorites.html"
                            >
                                <span className="navbar-tool-tooltip">Favorites</span>
                                <div className="navbar-tool-icon-box">
                                    <i className="navbar-tool-icon ci-heart"></i>
                                </div>
                            </a>
                            <div className="navbar-tool dropdown ms-2">
                                <a
                                    className="navbar-tool-icon-box border dropdown-toggle"
                                    href="dashboard-sales.html"
                                >
                                    <img
                                        src="img/marketplace/account/avatar-sm.png"
                                        width="32"
                                        alt="Createx Studio"
                                    />
                                </a>
                                <a className="navbar-tool-text ms-n1" href="dashboard-sales.html">
                                    <small>Createx Std.</small>$1,375.00
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <div style={{ minWidth: "14rem" }}>
                                        <h6 className="dropdown-header">Account</h6>

                                        <a
                                            className="dropdown-item d-flex align-items-center"
                                            href="dashboard-favorites.html"
                                        >
                                            <i className="ci-heart opacity-60 me-2"></i>Favorites
                                            <span className="fs-xs text-muted ms-auto">4</span>
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <h6 className="dropdown-header">Seller Dashboard</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="navbar-tool ms-4">
                                <a
                                    className="navbar-tool-icon-box bg-secondary dropdown-toggle"
                                    href="marketplace-cart.html"
                                >
                                    <span className="navbar-tool-label">3</span>
                                    <i className="navbar-tool-icon ci-cart"></i>
                                </a>
                            </div>
                        </div>
                        <div
                            className="collapse navbar-collapse me-auto order-lg-2"
                            id="navbarCollapse"
                        >
                            <div className="input-group d-lg-none my-3">
                                <i className="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"
                                ></i>
                                <input
                                    className="form-control rounded-start"
                                    type="text"
                                    placeholder="Search marketplace"
                                />
                            </div>
                            <ul className="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle ps-lg-0"
                                        href="#"
                                        data-bs-toggle="dropdown"
                                    >
                                        <i className="ci-menu align-middle mt-n1 me-2"></i>Categories
                                    </a>
                                    <ul className="dropdown-menu py-1">
                                        <li className="dropdown">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                            >
                                                Photos
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">
                                        Back to main demo
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="search-box collapse" id="searchBox">
                    <div className="card pt-2 pb-4 border-0 rounded-0">
                        <div className="container">
                            <div className="input-group">
                                <i
                                    className="
                      ci-search
                      position-absolute
                      top-50
                      start-0
                      translate-middle-y
                      text-muted
                      fs-base
                      ms-3
                    "
                                ></i>
                                <input
                                    className="form-control rounded-start"
                                    type="text"
                                    placeholder="Search marketplace"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
