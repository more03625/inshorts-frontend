import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';
export default function PageNotFound() {
    return (
        <>
            <Header />
            <div className="container py-5 mb-lg-3">
                <div className="row justify-content-center pt-lg-4 text-center">
                    <div className="col-lg-5 col-md-7 col-sm-9">
                        <img className="d-block mx-auto mb-5" src={'../../assets/images/logo/404.png'} width="340" alt="404 Error" />
                        <h1 className="h3">404 error</h1>
                        <h3 className="h5 fw-normal mb-4">We can't seem to find the page you are looking for.</h3>
                        <p className="fs-md mb-4">
                            <u>Here are some helpful links instead:</u>
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="row">
                            <div className="col-sm-4 mb-3">
                                <Link className="card h-100 border-0 shadow-sm" to={'/'}>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center"><i className="ci-home text-primary h4 mb-0"></i>
                                            <div className="ps-3">
                                                <h5 className="fs-sm mb-0">Homepage</h5>
                                                <span className="text-muted fs-ms">Return to homepage</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-sm-4 mb-3">
                                <Link className="card h-100 border-0 shadow-sm" to={'/category'}>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <i className="ci-search text-success h4 mb-0"></i>
                                            <div className="ps-3">
                                                <h5 className="fs-sm mb-0">By Category</h5>
                                                <span className="text-muted fs-ms">get news by category</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-sm-4 mb-3">
                                <Link className="card h-100 border-0 shadow-sm" to={'/trending'}>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center"><i className="ci-help text-info h4 mb-0"></i>
                                            <div className="ps-3">
                                                <h5 className="fs-sm mb-0">Help &amp; Support</h5>
                                                <span className="text-muted fs-ms">Visit our help center</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
