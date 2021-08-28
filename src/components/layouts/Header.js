import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            {/*<body className="toolbar-enabled">*/}

            <div className="modal fade" id="signin-modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-secondary">
                            <ul className="nav nav-tabs card-header-tabs" role="tablist">
                                <li className="nav-item"><a className="nav-link fw-medium active" href="#signin-tab" data-bs-toggle="tab" role="tab" aria-selected="true"><i className="ci-unlocked me-2 mt-n1"></i>Sign in</a></li>
                                <li className="nav-item"><a className="nav-link fw-medium" href="#signup-tab" data-bs-toggle="tab" role="tab" aria-selected="false"><i className="ci-user me-2 mt-n1"></i>Sign up</a></li>
                            </ul>
                            <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body tab-content py-4">
                            <form className="needs-validation tab-pane fade show active" autoComplete="off" noValidate id="signin-tab">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="si-email">Email address</label>
                                    <input className="form-control" type="email" id="si-email" placeholder="johndoe@example.com" required />
                                    <div className="invalid-feedback">Please provide a valid email address.</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="si-password">Password</label>
                                    <div className="password-toggle">
                                        <input className="form-control" type="password" id="si-password" required />
                                        <label className="password-toggle-btn" aria-label="Show/hide password">
                                            <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3 d-flex flex-wrap justify-content-between">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" id="si-remember" />
                                        <label className="form-check-label" htmlFor="si-remember">Remember me</label>
                                    </div><a className="fs-sm" href="#">Forgot password?</a>
                                </div>
                                <button className="btn btn-primary btn-shadow d-block w-100" type="submit">Sign in</button>
                            </form>
                            <form className="needs-validation tab-pane fade" autoComplete="off" noValidate id="signup-tab">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="su-name">Full name</label>
                                    <input className="form-control" type="text" id="su-name" placeholder="John Doe" required />
                                    <div className="invalid-feedback">Please fill in your name.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="su-email">Email address</label>
                                    <input className="form-control" type="email" id="su-email" placeholder="johndoe@example.com" required />
                                    <div className="invalid-feedback">Please provide a valid email address.</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="su-password">Password</label>
                                    <div className="password-toggle">
                                        <input className="form-control" type="password" id="su-password" required />
                                        <label className="password-toggle-btn" aria-label="Show/hide password">
                                            <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="su-password-confirm">Confirm password</label>
                                    <div className="password-toggle">
                                        <input className="form-control" type="password" id="su-password-confirm" required />
                                        <label className="password-toggle-btn" aria-label="Show/hide password">
                                            <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                                        </label>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-shadow d-block w-100" type="submit">Sign up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <main className="page-wrapper">
                <header className="shadow-sm">
                    <div className="navbar-sticky bg-light">
                        <div className="navbar navbar-expand-lg navbar-light">
                            <div className="container">
                                <Link className="navbar-brand d-none d-sm-block flex-shrink-0" to="/">
                                    <img src="/assets/images/news-db-pc-light-logo.png" width="142" alt="NewsDB" />
                                </Link>
                                <a className="navbar-brand d-sm-none flex-shrink-0 me-2" to="/">
                                    <img src="img/logo-icon.png" width="74" alt="NewsDB" /></a>
                                <div className="input-group d-none d-lg-flex mx-4">
                                    <input className="form-control rounded-end pe-5" type="text" placeholder="Search for products" /><i className="ci-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3"></i>
                                </div>
                                <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span className="navbar-toggler-icon"></span></button><a className="navbar-tool navbar-stuck-toggler" href="#"><span className="navbar-tool-tooltip">Expand menu</span>
                                        <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-menu"></i></div></a>

                                    <a className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" href="#signin-modal" data-bs-toggle="modal">
                                        <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-user"></i></div>
                                        <div className="navbar-tool-text ms-n3"><small>Hello, Sign in</small>My Account</div></a>


                                </div>
                            </div>
                        </div>
                        <div className="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2">
                            <div className="container">
                                <div className="collapse navbar-collapse" id="navbarCollapse">
                                    <div className="input-group d-lg-none my-3"><i className="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"></i>
                                        <input className="form-control rounded-start" type="text" placeholder="Search for products" />
                                    </div>

                                    {/*
                                    <ul className="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle ps-lg-0" href="#" data-bs-toggle="dropdown">
                                                <i className="ci-view-grid me-2"></i>Departments</a>
                                            <div className="dropdown-menu px-2 pb-4">
                                                <div className="d-flex flex-wrap flex-sm-nowrap">
                                                    <div className="mega-dropdown-column pt-3 pt-sm-4 px-2 px-lg-3">
                                                        <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="img/shop/departments/01.jpg" alt="Clothing" /></a>
                                                            <h6 className="fs-base mb-2">Clothing</h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Women's clothing</a></li>
                                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Men's clothing</a></li>
                                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Kid's clothing</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                                                        <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="img/shop/departments/02.jpg" alt="Shoes" /></a>
                                                            <h6 className="fs-base mb-2">Shoes</h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Women's shoes</a></li>
                                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Men's shoes</a></li>
                                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Kid's shoes</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                                                        <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="img/shop/departments/03.jpg" alt="Gadgets" /></a>
                                                            <h6 className="fs-base mb-2">Gadgets</h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Smartphones &amp; Tablets</a></li>
                                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Wearable gadgets</a></li>
                                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">E-book readers</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-wrap flex-sm-nowrap">
                                                    <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                                                        <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="img/shop/departments/04.jpg" alt="Furniture" /></a>
                                                            <h6 className="fs-base mb-2">Furniture &amp; Decor</h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Home furniture</a></li>
                                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Office furniture</a></li>
                                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Lighting and decoration</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                                                        <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="img/shop/departments/05.jpg" alt="Accessories" /></a>
                                                            <h6 className="fs-base mb-2">Accessories</h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Hats</a></li>
                                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Sunglasses</a></li>
                                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Bags</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                                                        <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="img/shop/departments/06.jpg" alt="Entertainment" /></a>
                                                            <h6 className="fs-base mb-2">Entertainment</h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Kid's toys</a></li>
                                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Video games</a></li>
                                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Outdoor / Camping</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    */}

                                    <ul className="navbar-nav">

                                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"><i className="ci-view-grid me-2"></i>Information</a>
                                            <div className="dropdown-menu p-0">
                                                <div className="d-flex flex-wrap flex-sm-nowrap px-2">
                                                    <div className="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                                                        <div className="widget widget-links mb-4">
                                                            <h6 className="fs-base mb-3">Shop layouts</h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-grid-ls.html">Shop Grid - Left Sidebar</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-grid-rs.html">Shop Grid - Right Sidebar</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-grid-ft.html">Shop Grid - Filters on Top</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-list-ls.html">Shop List - Left Sidebar</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-list-rs.html">Shop List - Right Sidebar</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-list-ft.html">Shop List - Filters on Top</a></li>
                                                            </ul>
                                                        </div>

                                                    </div>


                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Categories</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown position-static mb-0">
                                                    <a className="dropdown-item py-2" href="home-fashion-store-v1.html">
                                                        <span className="d-block text-heading">Business</span>
                                                        <small className="d-block text-muted">Short News <b>Business</b></small>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        {/*
                                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop</a>
                                            <div className="dropdown-menu p-0">
                                                <div className="d-flex flex-wrap flex-sm-nowrap px-2">
                                                    <div className="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                                                        <div className="widget widget-links mb-4">
                                                            <h6 className="fs-base mb-3">Shop layouts</h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-grid-ls.html">Shop Grid - Left Sidebar</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-grid-rs.html">Shop Grid - Right Sidebar</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-grid-ft.html">Shop Grid - Filters on Top</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-list-ls.html">Shop List - Left Sidebar</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-list-rs.html">Shop List - Right Sidebar</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-list-ft.html">Shop List - Filters on Top</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="widget widget-links">
                                                            <h6 className="fs-base mb-3">Marketplace</h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item"><a className="widget-list-link" href="marketplace-category.html">Category Page</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="marketplace-single.html">Single Item Page</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="marketplace-vendor.html">Vendor Page</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="marketplace-cart.html">Cart</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="marketplace-checkout.html">Checkout</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                                                        <div className="widget widget-links">
                                                            <h6 className="fs-base mb-3">Shop pages</h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-categories.html">Shop Categories</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-single-v1.html">Product Page v.1</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-single-v2.html">Product Page v.2</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="shop-cart.html">Cart</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="checkout-details.html">Checkout - Details</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="checkout-shipping.html">Checkout - Shipping</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="checkout-payment.html">Checkout - Payment</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="checkout-review.html">Checkout - Review</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="checkout-complete.html">Checkout - Complete</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="order-tracking.html">Order Tracking</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="comparison.html">Product Comparison</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                                                        <div className="widget widget-links mb-4">
                                                            <h6 className="fs-base mb-3">Grocery store</h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item"><a className="widget-list-link" href="grocery-catalog.html">Product Catalog</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="grocery-single.html">Single Product Page</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="grocery-checkout.html">Checkout</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="widget widget-links">
                                                            <h6 className="fs-base mb-3">Food Delivery</h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-category.html">Category Page</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-single.html">Single Item (Restaurant)</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-cart.html">Cart (Your Order)</a></li>
                                                                <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-checkout.html">Checkout (Address &amp; Payment)</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        
                                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Account</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop User Account</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="account-orders.html">Orders History</a></li>
                                                        <li><a className="dropdown-item" href="account-profile.html">Profile Settings</a></li>
                                                        <li><a className="dropdown-item" href="account-address.html">Account Addresses</a></li>
                                                        <li><a className="dropdown-item" href="account-payment.html">Payment Methods</a></li>
                                                        <li><a className="dropdown-item" href="account-wishlist.html">Wishlist</a></li>
                                                        <li><a className="dropdown-item" href="account-tickets.html">My Tickets</a></li>
                                                        <li><a className="dropdown-item" href="account-single-ticket.html">Single Ticket</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Vendor Dashboard</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="dashboard-settings.html">Settings</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-purchases.html">Purchases</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-favorites.html">Favorites</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-sales.html">Sales</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-products.html">Products</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-add-new-product.html">Add New Product</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-payouts.html">Payouts</a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="dropdown-item" href="account-signin.html">Sign In / Sign Up</a></li>
                                                <li><a className="dropdown-item" href="account-password-recovery.html">Password Recovery</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Pages</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Navbar Variants</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="navbar-1-level-light.html">1 Level Light</a></li>
                                                        <li><a className="dropdown-item" href="navbar-1-level-dark.html">1 Level Dark</a></li>
                                                        <li><a className="dropdown-item" href="navbar-2-level-light.html">2 Level Light</a></li>
                                                        <li><a className="dropdown-item" href="navbar-2-level-dark.html">2 Level Dark</a></li>
                                                        <li><a className="dropdown-item" href="navbar-3-level-light.html">3 Level Light</a></li>
                                                        <li><a className="dropdown-item" href="navbar-3-level-dark.html">3 Level Dark</a></li>
                                                        <li><a className="dropdown-item" href="home-electronics-store.html">Electronics Store</a></li>
                                                        <li><a className="dropdown-item" href="home-marketplace.html">Marketplace</a></li>
                                                        <li><a className="dropdown-item" href="home-grocery-store.html">Side Menu (Grocery)</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="about.html">About Us</a></li>
                                                <li><a className="dropdown-item" href="contacts.html">Contacts</a></li>
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Help Center</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="help-topics.html">Help Topics</a></li>
                                                        <li><a className="dropdown-item" href="help-single-topic.html">Single Topic</a></li>
                                                        <li><a className="dropdown-item" href="help-submit-request.html">Submit a Request</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">404 Not Found</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="404-simple.html">404 - Simple Text</a></li>
                                                        <li><a className="dropdown-item" href="404-illustration.html">404 - Illustration</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="sticky-footer.html">Sticky Footer Demo</a></li>
                                            </ul>
                                        </li>
                                       
                                        <li className="nav-item dropdown active"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Blog</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog List Layouts</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="blog-list-sidebar.html">List with Sidebar</a></li>
                                                        <li><a className="dropdown-item" href="blog-list.html">List no Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog Grid Layouts</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="blog-grid-sidebar.html">Grid with Sidebar</a></li>
                                                        <li><a className="dropdown-item" href="blog-grid.html">Grid no Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Single Post Layouts</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="blog-single-sidebar.html">Article with Sidebar</a></li>
                                                        <li><a className="dropdown-item" href="blog-single.html">Article no Sidebar</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Docs / Components</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="docs/dev-setup.html">
                                                    <div className="d-flex">
                                                        <div className="lead text-muted pt-1"><i className="ci-book"></i></div>
                                                        <div className="ms-2"><span className="d-block text-heading">Documentation</span><small className="d-block text-muted">Kick-start customization</small></div>
                                                    </div></a></li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="components/typography.html">
                                                    <div className="d-flex">
                                                        <div className="lead text-muted pt-1"><i className="ci-server"></i></div>
                                                        <div className="ms-2"><span className="d-block text-heading">Components<span className="badge bg-info ms-2">40+</span></span><small className="d-block text-muted">Faster page building</small></div>
                                                    </div></a></li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="docs/changelog.html">
                                                    <div className="d-flex">
                                                        <div className="lead text-muted pt-1"><i className="ci-edit"></i></div>
                                                        <div className="ms-2"><span className="d-block text-heading">Changelog<span className="badge bg-success ms-2">v2.3.0</span></span><small className="d-block text-muted">Regular updates</small></div>
                                                    </div></a></li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="mailto:support@createx.studio">
                                                    <div className="d-flex">
                                                        <div className="lead text-muted pt-1"><i className="ci-help"></i></div>
                                                        <div className="ms-2"><span className="d-block text-heading">Support</span><small className="d-block text-muted">support@createx.studio</small></div>
                                                    </div></a></li>
                                            </ul>
                                        </li>
                                         */}
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