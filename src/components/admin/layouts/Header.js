import React from "react";
import { Link } from "react-router-dom";
import { getUserToken, Host, logout } from "../../../helpers/comman_helper";
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


                            <div className="navbar-tool dropdown ms-2">
                                <a
                                    className="navbar-tool-icon-box border dropdown-toggle"
                                    href="#"
                                >
                                    <img
                                        src={Host + '/uploads/logo/news-db-pc-light-logo.png'}
                                        width="32"
                                        alt="NewsDB Logo"
                                    />
                                </a>
                                <a className="navbar-tool-text ms-n1" href="#">
                                    <small>{getUserToken().data.name}</small> #Editors
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <div style={{ minWidth: "14rem" }}>
                                        <h6 className="dropdown-header">Account</h6>

                                        <a
                                            className="dropdown-item d-flex align-items-center"
                                            href="#"
                                            onClick={logout}
                                        >

                                            <i className="ci-arrow-right-circle opacity-60 me-2"></i>Logout

                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </header>
        </>
    );
}

export default Header;
