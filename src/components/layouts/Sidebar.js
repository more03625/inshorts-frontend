import React, { useState, useEffect } from "react";
import { Host, convertToSlug, Endpoints, uppercaseFirstLetter } from "../../helpers/comman_helper";
import { Link } from "react-router-dom";
import axios from "axios";

const Sidebar = () => {

    const [subcategories, setSubcategories] = useState([]);
    const [trending, setTrending] = useState([]);

    const getCategoryWithNewsCount = async () => {
        const url = Host + Endpoints.category + "/" + "allList";
        const result = await axios.get(url);
        if (result.data.error === true) {
            alert('Please reload the app!');
        } else {
            setSubcategories(result.data.data);
        }
    }
    const getTrending = async () => {
        var url = Host + Endpoints.news + `/trending/news?page=1&size=3`;
        const result = await axios.get(url);
        if (result.data.error === true) {
            console.log('Please reload the app!')
        } else {
            setTrending(result.data.data.detail)
        }
    }
    useEffect(() => {
        getCategoryWithNewsCount();
        getTrending();
    }, [])
    return (
        <aside className="col-lg-3">
            <div className="offcanvas offcanvas-collapse offcanvas-end border-start ms-lg-auto" id="blog-sidebar" style={{ maxWidth: "22rem" }}>
                <div className="offcanvas-header align-items-center shadow-sm">
                    <h2 className="h5 mb-0">Sidebar</h2>
                    <button className="btn-close ms-auto" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body py-grid-gutter py-lg-1 px-lg-4" data-simplebar data-simplebar-auto-hide="true">
                    <div className="widget widget-links mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2">
                        <h3 className="widget-title">Shorts by categories!</h3>
                        <ul className="widget-list">
                            {
                                subcategories && subcategories.slice(0, 6).map((value, index) => (
                                    <li key={index} className="widget-list-item">
                                        <Link className="widget-list-link d-flex justify-content-between align-items-center" to={`/category/${value.slug}/${value._id}`}>
                                            <span>{value.name}</span>
                                            <span className="fs-xs text-muted ms-3">{value.postCount} Shorts</span>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="widget mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2">
                        <h3 className="widget-title">Trending posts</h3>
                        {
                            trending && trending.slice(0, 3).map((value, index) => (
                                <Link key={index} className="flex-shrink-0" to={"/read/" + convertToSlug(value.title) + "/" + value._id}>
                                    <div className="d-flex align-items-center mb-3">
                                        <img className="rounded" src={Host + value.image} width="64" alt="Post image" />
                                        <div className="ps-3">
                                            <h6 className="blog-entry-title fs-sm mb-0">
                                                {value.title.slice(0, 44) + "..."}
                                            </h6>
                                            <span className="fs-ms text-muted">by {" "}
                                                <Link to={`author/${value.author_id && value.author_id._id}`} className='blog-entry-meta-link'>{value.author_id && uppercaseFirstLetter(value.author_id.name)}</Link>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                    <div className="bg-size-cover bg-position-center rounded-3 py-5 mx-lg-2">
                        <img src={Host + "/uploads/ad-banner/0QPA5MX1.jpg"} />
                        <div className="py-5 px-4 text-center"></div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;