{/*Body*/ }
<body class="is-sidebar">
    {/*Page loading spinner*/}

    <div class="page-loading active">
        <div class="page-loading-inner">
            <div class="page-spinner"></div>
            <span>Loading...</span>
        </div>
    </div>
    <main class="page-wrapper">
        {/*Sign In Modal*/}

        <div class="modal fade" id="modal-signin" tabIndex="-1">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content border-0">
                    <div class="view show" id="modal-signin-view">
                        <div class="modal-header border-0 bg-dark px-4">
                            <h4 class="modal-title text-light">Sign in</h4>
                            <button class="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="btn-close "></button>
                        </div>
                        <div class="modal-body px-4">
                            <p class="fs-ms text-muted">Sign in to your account using email and password provided during registration.</p>
                            <form class="needs-validation" novalidate>
                                <div class="mb-3">
                                    <div class="input-group"><i class="ai-mail position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                                        <input class="form-control rounded" type="email" placeholder="Email" required />
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <div class="input-group">
                                        <i class="ai-lock position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                                        <div class="password-toggle w-100">
                                            <input class="form-control" type="password" placeholder="Password" required />
                                            <label class="password-toggle-btn" aria-label="Show/hide password">
                                                <input class="password-toggle-check" type="checkbox" /><span class="password-toggle-indicator"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center mb-3 mb-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="keep-signed" />
                                        <label class="form-check-label fs-sm" for="keep-signed">Keep me signed in</label>
                                    </div>
                                    <a class="nav-link-style fs-ms" href="password-recovery.html">Forgot password?</a>
                                </div>
                                <button class="btn btn-primary d-block w-100" type="submit">Sign in</button>
                                <p class="fs-sm pt-3 mb-0">Don't have an account? <a href='#' class='fw-medium' data-view='#modal-signup-view'>Sign up</a></p>
                            </form>
                        </div>
                    </div>
                    <div class="view" id="modal-signup-view">
                        <div class="modal-header border-0 bg-dark px-4">
                            <h4 class="modal-title text-light">Sign up</h4>
                            <button class="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="btn-close"></button>
                        </div>
                        <div class="modal-body px-4">
                            <p class="fs-ms text-muted">Registration takes less than a minute but gives you full control over your orders.</p>
                            <form class="needs-validation" novalidate>
                                <div class="mb-3">
                                    <input class="form-control" type="text" placeholder="Full name" required />
                                </div>
                                <div class="mb-3">
                                    <input class="form-control" type="text" placeholder="Email" required />
                                </div>
                                <div class="mb-3 password-toggle">
                                    <input class="form-control" type="password" placeholder="Password" required />
                                    <label class="password-toggle-btn" aria-label="Show/hide password">
                                        <input class="password-toggle-check" type="checkbox" /><span class="password-toggle-indicator"></span>
                                    </label>
                                </div>
                                <div class="mb-3 password-toggle">
                                    <input class="form-control" type="password" placeholder="Confirm password" required />
                                    <label class="password-toggle-btn" aria-label="Show/hide password">
                                        <input class="password-toggle-check" type="checkbox" /><span class="password-toggle-indicator"></span>
                                    </label>
                                </div>
                                <button class="btn btn-primary d-block w-100" type="submit">Sign up</button>
                                <p class="fs-sm pt-3 mb-0">Already have an account? <a href='#' class='fw-medium' data-view='#modal-signin-view'>Sign in</a></p>
                            </form>
                        </div>
                    </div>
                    <div class="modal-body text-center px-4 pt-2 pb-4">
                        <hr class="my-0" />
                        <p class="fs-sm fw-medium text-heading pt-4">Or sign in with</p>
                        <a class="btn-social bs-facebook bs-lg mx-1 mb-2" href="#"><i class="ai-facebook"></i></a><a class="btn-social bs-twitter bs-lg mx-1 mb-2" href="#"><i class="ai-twitter"></i></a><a class="btn-social bs-instagram bs-lg mx-1 mb-2" href="#"><i class="ai-instagram"></i></a><a class="btn-social bs-google bs-lg mx-1 mb-2" href="#"><i class="ai-google"></i></a>
                    </div>
                </div>
            </div>
        </div>
        {/*Navbar (Solid background + shadow)*/}
        {/*Remove "navbar-sticky" class to make navigation bar scrollable with the page.*/}
        <header class="header navbar navbar-expand-lg navbar-light bg-light navbar-shadow navbar-sticky" data-scroll-header data-fixed-element >
            <div class="container px-0 px-xl-3">
                <button class="navbar-toggler ms-n2 me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#primaryMenu"><span class="navbar-toggler-icon"></span></button><a class="navbar-brand flex-shrink-0 order-lg-1 mx-auto ms-lg-0 pe-lg-2 me-lg-4" href="index-2.html"><img class="d-none d-lg-block" src="img/logo/logo-dark.png" alt="Around" width="153" /><img class="d-lg-none" src="img/logo/logo-icon.png" alt="Around" width="58" /></a>
                <div class="d-flex align-items-center order-lg-3 ms-lg-auto"><a class="nav-link-style fs-sm text-nowrap" href="#modal-signin" data-bs-toggle="modal" data-view="#modal-signin-view"><i class="ai-user fs-xl me-2"></i>Sign in</a><a class="btn btn-primary ms-grid-gutter d-none d-lg-inline-block" href="#modal-signin" data-bs-toggle="modal" data-view="#modal-signup-view">Sign up</a></div>
                <div class="offcanvas offcanvas-collapse order-lg-2" id="primaryMenu">
                    <div class="offcanvas-header navbar-shadow">
                        <h5 class="mt-1 mb-0">Menu</h5>
                        <button class="btn-close lead" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <!-- Menu-->
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown dropdown-mega">
                                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Demos</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-column dropdown-column-img bg-secondary" href="index-2.html" style="background-image: url(img/demo/menu-banner.jpg);"></a>
                                    <div class="dropdown-column"><a class="dropdown-item" href="index-2.html">Web Template Presentation</a><a class="dropdown-item" href="demo-business-consulting.html">Business Consulting</a><a class="dropdown-item" href="demo-shop-homepage.html">Shop Homepage</a><a class="dropdown-item" href="demo-booking-directory.html">Booking / Directory</a><a class="dropdown-item" href="demo-creative-agency.html">Creative Agency</a><a class="dropdown-item" href="demo-web-studio.html">Web Studio</a><a class="dropdown-item" href="demo-product-software.html">Product Landing - Software</a></div>
                                    <div class="dropdown-column"><a class="dropdown-item" href="demo-product-gadget.html">Product Landing - Gadget</a><a class="dropdown-item" href="demo-mobile-app.html">Mobile App Showcase</a><a class="dropdown-item" href="demo-coworking-space.html">Coworking Space</a><a class="dropdown-item" href="demo-event-landing.html">Event Landing</a><a class="dropdown-item" href="demo-marketing-seo.html">Digital Marketing &amp; SEO</a><a class="dropdown-item" href="demo-food-blog.html">Food Blog</a><a class="dropdown-item" href="demo-personal-portfolio.html">Personal Portfolio</a></div>
                                </div>
                            </li>
                            <li class="nav-item dropdown dropdown-mega active">
                                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Templates</a>
                                <div class="dropdown-menu">
                                    <div class="dropdown-column mb-2 mb-lg-0">
                                        <h5 class="dropdown-header">Blog</h5>
                                        <a class="dropdown-item" href="blog-grid-rs.html">Grid Right Sidebar</a><a class="dropdown-item" href="blog-grid-ls.html">Grid Left Sidebar</a><a class="dropdown-item" href="blog-grid-ns.html">Grid No Sidebar</a><a class="dropdown-item" href="blog-list-rs.html">List Right Sidebar</a><a class="dropdown-item" href="blog-list-ls.html">List Left Sidebar</a><a class="dropdown-item" href="blog-list-ns.html">List No Sidebar</a><a class="dropdown-item" href="blog-single-rs.html">Single Post Right Sidebar</a><a class="dropdown-item" href="blog-single-ls.html">Single Post Left Sidebar</a><a class="dropdown-item" href="blog-single-ns.html">Single Post No Sidebar</a>
                                    </div>
                                    <div class="dropdown-column mb-2 mb-lg-0">
                                        <h5 class="dropdown-header">Portfolio</h5>
                                        <a class="dropdown-item" href="portfolio-style-1.html">Grid Style 1</a><a class="dropdown-item" href="portfolio-style-2.html">Grid Style 2</a><a class="dropdown-item" href="portfolio-style-3.html">Grid Style 3</a><a class="dropdown-item" href="portfolio-single-side-gallery-grid.html">Project Side Gallery (Grid)</a><a class="dropdown-item" href="portfolio-single-side-gallery-list.html">Project Side Gallery (List)</a><a class="dropdown-item" href="portfolio-single-carousel.html">Project Carousel</a><a class="dropdown-item" href="portfolio-single-wide-gallery.html">Project Wide Gallery</a>
                                    </div>
                                    <div class="dropdown-column mb-2 mb-lg-0">
                                        <h5 class="dropdown-header">Shop</h5>
                                        <a class="dropdown-item" href="shop-ls.html">Grid Left Sidebar</a><a class="dropdown-item" href="shop-rs.html">Grid Right Sidebar</a><a class="dropdown-item" href="shop-ns.html">Grid No Sidebar</a><a class="dropdown-item" href="shop-single.html">Single Product</a><a class="dropdown-item" href="checkout.html">Cart &amp; Checkout</a><a class="dropdown-item" href="order-tracking.html">Order Tracking</a>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Account</a>
                                <ul class="dropdown-menu">
                                    <li class="dropdown">
                                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Dashboard</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="dashboard-orders.html">Orders</a></li>
                                            <li><a class="dropdown-item" href="dashboard-sales.html">Sales</a></li>
                                            <li><a class="dropdown-item" href="dashboard-messages.html">Messages</a></li>
                                            <li><a class="dropdown-item" href="dashboard-followers.html">Followers</a></li>
                                            <li><a class="dropdown-item" href="dashboard-reviews.html">Reviews</a></li>
                                            <li><a class="dropdown-item" href="dashboard-favorites.html">Favorites</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown">
                                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Account Settings</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="account-profile.html">Profile Info</a></li>
                                            <li><a class="dropdown-item" href="account-payment.html">Payment Methods</a></li>
                                            <li><a class="dropdown-item" href="account-notifications.html">Notifications</a></li>
                                        </ul>
                                    </li>
                                    <li><a class="dropdown-item" href="signin-illustration.html">Sign In - Illustration</a></li>
                                    <li><a class="dropdown-item" href="signin-image.html">Sign In - Image</a></li>
                                    <li><a class="dropdown-item" href="signin-signup.html">Sign In - Sign Up</a></li>
                                    <li><a class="dropdown-item" href="password-recovery.html">Password Recovery</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Pages</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="about.html">About</a></li>
                                    <li class="dropdown">
                                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Contacts</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="contacts-v1.html">Contacts v.1</a></li>
                                            <li><a class="dropdown-item" href="contacts-v2.html">Contacts v.2</a></li>
                                            <li><a class="dropdown-item" href="contacts-v3.html">Contacts v.3</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown">
                                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Help Center</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="help-topics.html">Help Topics</a></li>
                                            <li><a class="dropdown-item" href="help-single-topic.html">Single Topic</a></li>
                                            <li><a class="dropdown-item" href="help-submit-request.html">Submit a Request</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown">
                                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">404 Not Found</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="404-simple.html">Simple Text</a></li>
                                            <li><a class="dropdown-item" href="404-illustration.html">Illustration</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown">
                                        <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Coming Soon</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="coming-soon-image.html">Image</a></li>
                                            <li><a class="dropdown-item" href="coming-soon-illustration.html">Illustration</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Docs / UI Kit</a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="docs/dev-setup.html">
                                            <div class="d-flex align-items-center">
                                                <div class="fs-xl text-muted"><i class="ai-file-text"></i></div>
                                                <div class="ps-3"><span class="d-block text-heading">Documentation</span><small class="d-block text-muted">Kick-start customization</small></div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="dropdown-divider"></li>
                                    <li>
                                        <a class="dropdown-item" href="components/typography.html">
                                            <div class="d-flex align-items-center">
                                                <div class="fs-xl text-muted"><i class="ai-layers"></i></div>
                                                <div class="ps-3"><span class="d-block text-heading">UI Kit<span class="badge bg-danger ms-2">50+</span></span><small class="d-block text-muted">Flexible components</small></div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="dropdown-divider"></li>
                                    <li>
                                        <a class="dropdown-item" href="docs/changelog.html">
                                            <div class="d-flex align-items-center">
                                                <div class="fs-xl text-muted"><i class="ai-edit"></i></div>
                                                <div class="ps-3"><span class="d-block text-heading">Changelog<span class="badge bg-success ms-2">v2.4.0</span></span><small class="d-block text-muted">Regular updates</small></div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="dropdown-divider"></li>
                                    <li>
                                        <a class="dropdown-item" href="mailto:support@createx.studio">
                                            <div class="d-flex align-items-center">
                                                <div class="fs-xl text-muted"><i class="ai-life-buoy"></i></div>
                                                <div class="ps-3"><span class="d-block text-heading">Support</span><small class="d-block text-muted">support@createx.studio</small></div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        {/*Page content*/}
        <div class="sidebar-enabled">
            <div class="container">
                <div class="row">
                    {/*Sidebar*/}

                    <div class="sidebar col-lg-3 pt-lg-5">
                        <div class="offcanvas offcanvas-collapse" id="blog-sidebar">
                            <div class="offcanvas-header navbar-shadow px-4 mb-3">
                                <h5 class="mt-1 mb-0">Sidebar</h5>
                                <button class="btn-close lead" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body px-4 pt-3 pt-lg-0 ps-lg-0 pe-lg-2 pe-xl-4" data-simplebar>
                                {/*Search*/}

                                <div class="widget mb-5">
                                    <h3 class="widget-title">Search blog</h3>
                                    <div class="input-group"><i class="ai-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                                        <input class="form-control rounded" type="text" placeholder="Search" />
                                    </div>
                                </div>

                                {/*Categories*/}

                                <div class="widget widget-categories mb-5">
                                    <h3 class="widget-title">Categories</h3>
                                    <ul>
                                        <li><a class="widget-link" href="#">Digital design<small class="text-muted ps-1 ms-2">23</small></a></li>
                                        <li><a class="widget-link" href="#">Brand strategy<small class="text-muted ps-1 ms-2">14</small></a></li>
                                        <li><a class="widget-link" href="#">Project management<small class="text-muted ps-1 ms-2">7</small></a></li>
                                        <li><a class="widget-link" href="#">Business<small class="text-muted ps-1 ms-2">19</small></a></li>
                                        <li><a class="widget-link" href="#">Technology<small class="text-muted ps-1 ms-2">35</small></a></li>
                                        <li><a class="widget-link" href="#">Travel &amp; Vacation<small class="text-muted ps-1 ms-2">28</small></a></li>
                                    </ul>
                                </div>
                                {/*Featured posts*/}

                                <div class="widget mt-n1 mb-5">
                                    <h3 class="widget-title pb-1">Trending posts</h3>
                                    <div class="d-flex align-items-center pb-1 mb-3">
                                        <a class="d-block flex-shrink-0" href="#"><img class="rounded" src="img/blog/th01.jpg" alt="Post" width="64" /></a>
                                        <div class="ps-2 ms-1">
                                            <h4 class="fs-md nav-heading mb-1"><a class="fw-medium" href="#">Virtual Reality - game changing technology</a></h4>
                                            <p class="fs-xs text-muted mb-0">by John Doe</p>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center pb-1 mb-3">
                                        <a class="d-block flex-shrink-0" href="#"><img class="rounded" src="img/blog/th02.jpg" alt="Post" width="64" /></a>
                                        <div class="ps-2 ms-1">
                                            <h4 class="fs-md nav-heading mb-1"><a class="fw-medium" href="#">New trends in suburban fashion</a></h4>
                                            <p class="fs-xs text-muted mb-0">by Susan Mayer</p>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <a class="d-block flex-shrink-0" href="#"><img class="rounded" src="img/blog/th03.jpg" alt="Post" width="64" /></a>
                                        <div class="ps-2 ms-1">
                                            <h4 class="fs-md nav-heading mb-1"><a class="fw-medium" href="#">Millenials is the top market for companies</a></h4>
                                            <p class="fs-xs text-muted mb-0">by Daniel Adams</p>
                                        </div>
                                    </div>
                                </div>

                                {/*Tag cloud*/}

                                <div class="widget mb-5">
                                    <h3 class="widget-title pb-1">Popular btn-tags</h3>
                                    <a class="btn-tag me-2 mb-2" href="#">#business</a><a class="btn-tag me-2 mb-2" href="#">#online shopping</a><a class="btn-tag me-2 mb-2" href="#">#gadgets</a><a class="btn-tag me-2 mb-2" href="#">#travel</a><a class="btn-tag me-2 mb-2" href="#">#brands</a><a class="btn-tag me-2 mb-2" href="#">#personal finance</a><a class="btn-tag mb-2" href="#">#around news</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Content*/}

                    <div class="col-lg-9 content py-4 mb-2 mb-sm-0 pb-sm-5">
                        <nav aria-label="breadcrumb">
                            <ol class="py-1 my-2 breadcrumb">
                                <li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Blog</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">List left sidebar</li>
                            </ol>
                        </nav>
                        <h1 class="mb-5">Blog</h1>
                        {/*Post*/}

                        <article class="card card-horizontal card-hover mb-grid-gutter">
                            <a class="card-img-top" href="blog-single-ls.html" style="background-image: url(img/blog/01.jpg);"></a>
                            <div class="card-body">
                                <a class="meta-link fs-sm mb-2" href="#">Digital design</a>
                                <h2 class="h4 nav-heading mb-4"><a href="blog-single-ls.html">Designers should always keep their users in mind</a></h2>
                                <a class="d-flex meta-link fs-sm align-items-center pt-3" href="#">
                                    <img class="rounded-circle" src="img/blog/avatar/01.jpg" alt="Emma Brown" width="36" />
                                    <div class="ps-2 ms-1 mt-n1">by<span class="fw-semibold ms-1">Emma Brown</span></div>
                                </a>
                                <div class="mt-3 text-end text-nowrap"><a class="meta-link fs-xs" href="#"><i class="ai-message-square me-1"></i>&nbsp;6</a><span class="meta-divider"></span><a class="meta-link fs-xs" href="#"><i class="ai-calendar me-1 mt-n1"></i>&nbsp;Feb 19</a></div>
                            </div>
                        </article>

                        {/*Post*/}

                        <article class="card card-horizontal card-hover mb-grid-gutter">
                            <a class="card-img-top order-sm-2" href="blog-single-ls.html" style="background-image: url(img/blog/02.jpg);"></a>
                            <div class="card-body order-sm-1">
                                <a class="meta-link fs-sm mb-2" href="#">Technology</a>
                                <h2 class="h4 nav-heading mb-4"><a href="blog-single-ls.html">How technological advancements affect our decisions</a></h2>
                                <a class="d-flex meta-link fs-sm align-items-center pt-3" href="#">
                                    <img class="rounded-circle" src="img/blog/avatar/03.jpg" alt="Jessica Miller" width="36" />
                                    <div class="ps-2 ms-1 mt-n1">by<span class="fw-semibold ms-1">Jessica Miller</span></div>
                                </a>
                                <div class="mt-3 text-end text-nowrap"><a class="meta-link fs-xs" href="#"><i class="ai-message-square me-1"></i>&nbsp;3</a><span class="meta-divider"></span><a class="meta-link fs-xs" href="#"><i class="ai-calendar me-1 mt-n1"></i>&nbsp;Feb 4</a></div>
                            </div>
                        </article>
                        {/*Post*/}

                        <article class="card card-horizontal card-hover mb-grid-gutter">
                            <a class="card-img-top" href="blog-single-ls.html" style="background-image: url(img/blog/03.jpg);"></a>
                            <div class="card-body">
                                <a class="meta-link fs-sm mb-2" href="#">Business</a>
                                <h2 class="h4 nav-heading mb-4"><a href="blog-single-ls.html">Open space - new trend in office design</a></h2>
                                <a class="d-flex meta-link fs-sm align-items-center pt-3" href="#">
                                    <img class="rounded-circle" src="img/blog/avatar/05.jpg" alt="Daniel Adams" width="36" />
                                    <div class="ps-2 ms-1 mt-n1">by<span class="fw-semibold ms-1">Daniel Adams</span></div>
                                </a>
                                <div class="mt-3 text-end text-nowrap"><a class="meta-link fs-xs" href="#"><i class="ai-message-square me-1"></i>&nbsp;12</a><span class="meta-divider"></span><a class="meta-link fs-xs" href="#"><i class="ai-calendar me-1 mt-n1"></i>&nbsp;Jan 10</a></div>
                            </div>
                        </article>
                        {/*Post*/}

                        <article class="card card-horizontal card-hover mb-grid-gutter">
                            <a class="card-img-top order-sm-2" href="blog-single-ls.html" style="background-image: url(img/blog/04.jpg);"></a>
                            <div class="card-body order-sm-1">
                                <a class="meta-link fs-sm mb-2" href="#">Travel &amp; Vacation</a>
                                <h2 class="h4 nav-heading mb-4"><a href="blog-single-ls.html">Escape to mountains with only one backpack</a></h2>
                                <a class="d-flex meta-link fs-sm align-items-center pt-3" href="#">
                                    <img class="rounded-circle" src="img/blog/avatar/01.jpg" alt="Emma Brown" width="36" />
                                    <div class="ps-2 ms-1 mt-n1">by<span class="fw-semibold ms-1">Emma Brown</span></div>
                                </a>
                                <div class="mt-3 text-end text-nowrap"><a class="meta-link fs-xs" href="#"><i class="ai-message-square me-1"></i>&nbsp;31</a><span class="meta-divider"></span><a class="meta-link fs-xs" href="#"><i class="ai-calendar me-1 mt-n1"></i>&nbsp;Dec 25</a></div>
                            </div>
                        </article>
                        {/*Post*/}

                        <article class="card card-horizontal card-hover mb-grid-gutter">
                            <a class="card-img-top" href="blog-single-ls.html" style="background-image: url(img/blog/05.jpg);"></a>
                            <div class="card-body">
                                <a class="meta-link fs-sm mb-2" href="#">Technology</a>
                                <h2 class="h4 nav-heading mb-4"><a href="blog-single-ls.html">Payments made easy. How new Tech will affect E-Commerce industry?</a></h2>
                                <a class="d-flex meta-link fs-sm align-items-center pt-3" href="#">
                                    <img class="rounded-circle" src="img/blog/avatar/02.jpg" alt="Charlie Welch" width="36" />
                                    <div class="ps-2 ms-1 mt-n1">by<span class="fw-semibold ms-1">Charlie Welch</span></div>
                                </a>
                                <div class="mt-3 text-end text-nowrap"><a class="meta-link fs-xs" href="#"><i class="ai-message-square me-1"></i>&nbsp;4</a><span class="meta-divider"></span><a class="meta-link fs-xs" href="#"><i class="ai-calendar me-1 mt-n1"></i>&nbsp;Dec 12</a></div>
                            </div>
                        </article>
                        {/*Post*/}

                        <article class="card card-horizontal card-hover mb-grid-gutter">
                            <a class="card-img-top order-sm-2" href="blog-single-ls.html" style="background-image: url(img/blog/06.jpg);"></a>
                            <div class="card-body order-sm-1">
                                <a class="meta-link fs-sm mb-2" href="#">Business</a>
                                <h2 class="h4 nav-heading mb-4"><a href="blog-single-ls.html">Business offices of Fortune 500 companies</a></h2>
                                <a class="d-flex meta-link fs-sm align-items-center pt-3" href="#">
                                    <img class="rounded-circle" src="img/blog/avatar/06.jpg" alt="Barbara Palson" width="36" />
                                    <div class="ps-2 ms-1 mt-n1">by<span class="fw-semibold ms-1">Barbara Palson</span></div>
                                </a>
                                <div class="mt-3 text-end text-nowrap"><a class="meta-link fs-xs" href="#"><i class="ai-message-square me-1"></i>&nbsp;31</a><span class="meta-divider"></span><a class="meta-link fs-xs" href="#"><i class="ai-calendar me-1 mt-n1"></i>&nbsp;Dec 25</a></div>
                            </div>
                        </article>
                        {/*Pagination*/}
                        <div class="d-md-flex justify-content-between align-items-center pt-3 pb-2">
                            <div class="d-flex justify-content-center align-items-center mb-4">
                                <label class="pe-1 me-2">Show</label>
                                <select class="form-select me-2" style="width: 5rem;">
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                    <option value="40">40</option>
                                    <option value="50">50</option>
                                </select>
                                <div class="fs-sm text-nowrap ps-1 mb-1">posts per page</div>
                            </div>
                            <nav class="mb-4" aria-label="Page navigation">
                                <ul class="pagination justify-content-center">
                                    <li class="page-item"><a class="page-link" href="#" aria-label="Previous"><i class="ai-chevron-left"></i></a></li>
                                    <li class="page-item d-sm-none"><span class="page-link page-link-static">2 / 10</span></li>
                                    <li class="page-item d-none d-sm-block"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item active d-none d-sm-block" aria-current="page"><span class="page-link">2<span class="visually-hidden">(current)</span></span></li>
                                    <li class="page-item d-none d-sm-block"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item d-none d-sm-block"><a class="page-link" href="#">4</a></li>
                                    <li class="page-item d-none d-sm-block">...</li>
                                    <li class="page-item d-none d-sm-block"><a class="page-link" href="#">10</a></li>
                                    <li class="page-item"><a class="page-link" href="#" aria-label="Next"><i class="ai-chevron-right"></i></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <body />