const Breadcrumb = () => {
    return (
        <div className="bg-secondary py-4">
            <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start">
                            <li className="breadcrumb-item">
                                <a className="text-nowrap" href="index.html">
                                    <i className="ci-home"></i>Home
                                </a>
                            </li>
                            <li className="breadcrumb-item text-nowrap">
                                <a href="#">Blog</a>
                            </li>
                            <li
                                className="breadcrumb-item text-nowrap active"
                                aria-current="page"
                            >
                                Grid with sidebar
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                    <h1 className="h3 mb-0">Blog grid with sidebar</h1>
                </div>
            </div>
        </div>
    )
}
export default Breadcrumb;