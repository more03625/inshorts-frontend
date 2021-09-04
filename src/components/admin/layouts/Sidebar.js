import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
    return (
        <>
            <aside className="col-lg-4 pe-xl-5">
                <div className="d-block d-lg-none p-4">
                    <a
                        className="btn btn-outline-accent d-block"
                        href="#account-menu"
                        data-bs-toggle="collapse"
                    >
                        <i className="ci-menu me-2"></i>Account menu
                    </a>
                </div>
                <div className="h-100 border-end mb-2">
                    <div className="d-lg-block collapse" id="account-menu">
                        <div className="bg-secondary p-4">
                            <h3 className="fs-sm mb-0 text-muted">Account</h3>
                        </div>
                        <ul className="list-unstyled mb-0">
                            <li className="border-bottom mb-0">
                                <Link
                                    className="
                    nav-link-style
                    d-flex
                    align-items-center
                    px-4
                    py-3
                  " to="/admin/dashboard">
                                    <i className="ci-settings opacity-60 me-2"></i>Dashboard
                                </Link>
                            </li>
                            <li className="border-bottom mb-0">
                                <Link
                                    className="
                    nav-link-style
                    d-flex
                    align-items-center
                    px-4
                    py-3
                  "
                                    to="/admin/add-shorts"
                                >
                                    <i className="ci-basket opacity-60 me-2"></i>Add Shorts
                                </Link>
                            </li>
                            <li className="mb-0">
                                <Link
                                    className="
                    nav-link-style
                    d-flex
                    align-items-center
                    px-4
                    py-3
                  "
                                    to="/admin/edit-shorts"
                                >
                                    <i className="ci-heart opacity-60 me-2"></i>Edit Shorts
                                    <span className="fs-sm text-muted ms-auto">4</span>
                                </Link>
                            </li>
                        </ul>

                        <hr />
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
