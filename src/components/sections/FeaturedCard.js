const Featured = () => {
    return (
        <>
            <div className="featured-posts-carousel tns-carousel pt-5">
                {/*
                <div className="tns-carousel-inner" data-carousel-options="{&quot;items&quot;: 2, &quot;nav&quot;: false, &quot;autoHeight&quot;: true, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;700&quot;:{&quot;items&quot;:2, &quot;gutter&quot;: 20},&quot;991&quot;:{&quot;items&quot;:2, &quot;gutter&quot;: 30}}}">
                */}
                <article><a className="blog-entry-thumb mb-3" href="blog-single-sidebar.html"><span className="blog-entry-meta-label fs-sm"><i className="ci-time"></i>Sep 10</span><img src="https://cartzilla.createx.studio/img/blog/featured/01.jpg" alt="Featured post" /></a>
                    <div className="d-flex justify-content-between mb-2 pt-1">
                        <h2 className="h5 blog-entry-title mb-0"><a href="blog-single-sidebar.html">Healthy Food - New Way of Living</a></h2><a className="blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1" href="blog-single-sidebar.html#comments"><i className="ci-message"></i>13</a>
                    </div>
                    <div className="d-flex align-items-center fs-sm"><a className="blog-entry-meta-link" href="#">
                        <div className="blog-entry-author-ava"><img src="https://cartzilla.createx.studio/img/blog/meta/04.jpg" alt="Olivia Reyes" /></div>Olivia Reyes</a><span className="blog-entry-meta-divider"></span>
                        <div className="fs-sm text-muted">in <a href='#' className='blog-entry-meta-link'>Lifestyle</a>, <a href='#' className='blog-entry-meta-link'>Nutrition</a></div>
                    </div>
                </article>
                <article><a className="blog-entry-thumb mb-3" href="blog-single-sidebar.html"><span className="blog-entry-meta-label fs-sm"><i className="ci-time"></i>Aug 27</span><img src="https://cartzilla.createx.studio/img/blog/featured/01.jpg" alt="Featured post" /></a>
                    <div className="d-flex justify-content-between mb-2 pt-1">
                        <h2 className="h5 blog-entry-title mb-0"><a href="blog-single-sidebar.html">Online Payment Security Tips for Shoppers</a></h2><a className="blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1" href="blog-single-sidebar.html#comments"><i className="ci-message"></i>9</a>
                    </div>
                    <div className="d-flex align-items-center fs-sm"><a className="blog-entry-meta-link" href="#">
                        <div className="blog-entry-author-ava"><img src="https://cartzilla.createx.studio/img/blog/meta/04.jpg" alt="Rafael Marquez" /></div>Rafael Marquez</a><span className="blog-entry-meta-divider"></span>
                        <div className="fs-sm text-muted">in <a href='#' className='blog-entry-meta-link'>Online shpopping</a></div>
                    </div>
                </article>
                <article><a className="blog-entry-thumb mb-3" href="blog-single-sidebar.html"><span className="blog-entry-meta-label fs-sm"><i className="ci-time"></i>Aug 16</span><img src="https://cartzilla.createx.studio/img/blog/featured/01.jpg" alt="Featured post" /></a>
                    <div className="d-flex justify-content-between mb-2 pt-1">
                        <h2 className="h5 blog-entry-title mb-0"><a href="blog-single-sidebar.html">We Launched New Store in San Francisco!</a></h2><a className="blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1" href="blog-single-sidebar.html#comments"><i className="ci-message"></i>23</a>
                    </div>
                    <div className="d-flex align-items-center fs-sm"><a className="blog-entry-meta-link" href="#">
                        <div className="blog-entry-author-ava"><img src="https://cartzilla.createx.studio/img/blog/meta/04.jpg" alt="Paul Woodred" /></div>Paul Woodred</a><span className="blog-entry-meta-divider"></span>
                        <div className="fs-sm text-muted">in <a href='#' className='blog-entry-meta-link'>Cartzilla news</a></div>
                    </div>
                </article>
                {/*</div>*/}
            </div>
            <hr className="mt-5" />
        </>
    )
}
export default Featured;