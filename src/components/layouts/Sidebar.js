const Sidebar = () => {
    return (
        <aside className="col-lg-3">
            <div className="offcanvas offcanvas-collapse offcanvas-end border-start ms-lg-auto" id="blog-sidebar" style={{ maxWidth: "22rem" }}>
                <div className="offcanvas-header align-items-center shadow-sm">
                    <h2 className="h5 mb-0">Sidebar</h2>
                    <button className="btn-close ms-auto" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body py-grid-gutter py-lg-1 px-lg-4" data-simplebar data-simplebar-auto-hide="true">

                    <div className="widget widget-links mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2">
                        <h3 className="widget-title">Blog categories</h3>
                        <ul className="widget-list">
                            <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>Online shopping</span><span className="fs-xs text-muted ms-3">18</span></a></li>
                            <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>Fashion</span><span className="fs-xs text-muted ms-3">25</span></a></li>
                            <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>Personal finance</span><span className="fs-xs text-muted ms-3">13</span></a></li>
                            <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>Travel &amp; vacation</span><span className="fs-xs text-muted ms-3">7</span></a></li>
                            <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>Lifestyle</span><span className="fs-xs text-muted ms-3">34</span></a></li>
                            <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>Technology</span><span className="fs-xs text-muted ms-3">6</span></a></li>
                        </ul>
                    </div>

                    <div className="widget mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2">
                        <h3 className="widget-title">Trending posts</h3>
                        <div className="d-flex align-items-center mb-3"><a className="flex-shrink-0" href="blog-single.html"><img className="rounded" src="img/blog/widget/01.jpg" width="64" alt="Post image" /></a>
                            <div className="ps-3">
                                <h6 className="blog-entry-title fs-sm mb-0"><a href="blog-single.html">Retro Cameras are Trending. Why so Popular?</a></h6><span className="fs-ms text-muted">by <a href='#' className='blog-entry-meta-link'>Andy Williams</a></span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-3"><a className="flex-shrink-0" href="blog-single.html"><img className="rounded" src="img/blog/widget/02.jpg" width="64" alt="Post imag" /></a>
                            <div className="ps-3">
                                <h6 className="blog-entry-title fs-sm mb-0"><a href="blog-single.html">New Trends in Suburban Fashion</a></h6><span className="fs-ms text-muted">by <a href='#' className='blog-entry-meta-link'>Susan Mayer</a></span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center"><a className="flex-shrink-0" href="blog-single.html"><img className="rounded" src="img/blog/widget/03.jpg" width="64" alt="Post image" /></a>
                            <div className="ps-3">
                                <h6 className="blog-entry-title fs-sm mb-0"><a href="blog-single.html">Augmented Reality - Game Changing Technology</a></h6><span className="fs-ms text-muted">by <a href='#' className='blog-entry-meta-link'>John Doe</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="widget pb-grid-gutter mx-lg-2">
                        <h3 className="widget-title">Popular tags</h3><a className="btn-tag me-2 mb-2" href="#">#fashion</a><a className="btn-tag me-2 mb-2" href="#">#gadgets</a><a className="btn-tag me-2 mb-2" href="#">#online shopping</a><a className="btn-tag me-2 mb-2" href="#">#top brands</a><a className="btn-tag me-2 mb-2" href="#">#travel</a><a className="btn-tag me-2 mb-2" href="#">#cartzilla news</a><a className="btn-tag me-2 mb-2" href="#">#personal finance</a><a className="btn-tag me-2 mb-2" href="#">#tips &amp; tricks</a>
                    </div>
                    <div className="bg-size-cover bg-position-center rounded-3 py-5 mx-lg-2" style={{ backgroundImage: "url(img/blog/banner-bg.jpg)" }}>
                        <div className="py-5 px-4 text-center">
                            <h5 className="mb-2">Your Add Banner Here</h5>
                            <p className="fs-sm text-muted">Hurry up to reserve your spot</p><a className="btn btn-primary btn-shadow btn-sm" href="#">Contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;