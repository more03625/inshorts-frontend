import { Link } from "react-router-dom";
const NewsCard = ({ shortsData }) => {
    console.log(shortsData)
    return (
        <>
            <article className="masonry-grid-item">
                <div className="card gallery">
                    <a
                        className="blog-entry-thumb gallery-item video-item"
                        href="https://www.youtube.com/watch?v=TedKIlo0c04"
                    >
                        <span className="blog-entry-meta-label fs-sm">
                            <i className="ci-video"></i>
                            <span className="fs-ms">Watch video</span>
                        </span>
                        <img
                            className="card-img-top"
                            src="https://cartzilla.createx.studio/img/blog/03.jpg"
                            alt="Post"
                        />
                    </a>
                    <div className="card-body">
                        <h2 className="h6 blog-entry-title">
                            <a href="blog-single-sidebar.html">
                                {shortsData.title}
                            </a>
                        </h2>
                        <p className="news-additional-info">Shorts by {" "}
                            <span><Link className="me-2 mb-2" to="/author/rahulmore">Rahul More</Link>3 months ago</span>
                        </p>
                        <p className="fs-sm">
                            {shortsData.description}
                        </p>
                        <p className="news-additional-info">Read More at {" "}
                            <span>
                                <a target="_blank" className="me-2 mb-2" href={`https://www.google.com?utm_source=newsdb.in`}>
                                    India Today
                                </a>
                            </span>
                        </p>
                    </div>
                    <div className="card-footer d-flex align-items-center fs-xs">
                        <a className="blog-entry-meta-link" href={`https://www.google.com?utm_source=newsdb.in`}>
                            Dogecoin rose 10% within 30 minutes of his tweet.
                        </a>
                        <div className="ms-auto text-nowrap">

                            <span className="blog-entry-meta-divider mx-2"></span>
                            <a
                                className="share-btn blog-entry-meta-link text-nowrap"
                                href=""
                            >
                                <i className="ci-telegram "></i>31
                            </a>
                        </div>
                    </div>
                </div>
            </article>
            <hr className="mb-4" />
        </>
    )
}
export default NewsCard;