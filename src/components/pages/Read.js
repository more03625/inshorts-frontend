import React, { useState, useEffect, Fragment } from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
import Breadcrumb from "../layouts/Breadcrumb";
import NewsCard from "../sections/NewsCard";
import { useParams } from "react-router-dom";
import Loading from "../sections/Loading";
import axios from "axios";
import { Host, Endpoints } from "../../helpers/comman_helper";
import Notfound from "./Notfound";
import Sharemodal from "../layouts/Sharemodal";
const Read = () => {
    const { slug, newsID } = useParams();
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(2);
    const [shorts, setShorts] = useState();
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [shareShort, setShareShort] = useState({ shareID: 0, shareSlug: null });
    const [similarShorts, setSimilarShorts] = useState([]);
    // const [mainCategory, setMainCategory] = useState(null);

    var categoryName = shorts && shorts.main_category
    // current : newsdID

    const getShorts = async () => {
        if (hasMore === true) {
            setLoading(true);
            const url = Host + Endpoints.news + `/${newsID}`;
            const result = await axios.get(url);
            if (result.data.error === true) {
                console.log('there are some errors!');
            } else {
                // console.log(result.data.data.main_category)
                getShortsByCategory(result.data.data.main_category.slug)
                // setMainCategory(result.data.data.main_category.slug);
                setShorts(result.data.data);
                // result.data.data === null ? setNotFound(true) : (result.data.data.length === 0) ? setHasMore(false) : setShorts(result.data.data); setLoading(false);
            }
        }
    }
    const getShortsByCategory = async (mainCategory) => {
        console.log("mainCategory ===> ", mainCategory);
        if (hasMore === true) {
            setLoading(true);
            const url = Host + Endpoints.category + `/${mainCategory}?page=${page}&size=${size}`;
            const result = await axios.get(url);
            if (result.data.error === true) {
                console.log('there are some errors!')
            } else {
                result.data.data.posts.length === 0 ? setHasMore(false) : setSimilarShorts([...similarShorts, ...result.data.data.posts]);
                setLoading(false);
            }
        }
    }



    useEffect(() => {
        getShorts();
    }, [newsID]);


    useEffect(() => {
        window.scrollTo({
            behavior: "smooth",
            top: 0
        });
        getShortsByCategory();
    }, [page]);
    return (
        <>
            <Header />
            <Breadcrumb page='read' title={shorts && shorts.title} />
            <div className="container-fluid pb-5 mb-2 mb-md-4">
                <div className="container-fluid">
                    <div className="row pt-5 mt-md-2">
                        <div className="col-lg-3"></div>
                        {
                            notFound === true ? <Notfound /> : shorts === undefined ?
                                <Loading loading={loading} hasMore={hasMore} setPage={setPage} page={page} /> :
                                <>
                                    <div className="col-lg-6">

                                        <NewsCard shortsData={shorts} setShareShort={setShareShort} />

                                        {/*For similar Shorts*/}
                                        <NewsCard shortsData={similarShorts} setShareShort={setShareShort} />

                                        <Loading loading={loading} hasMore={hasMore} setPage={setPage} page={page} />

                                    </div>
                                    <Sidebar />
                                    <Sharemodal shareShort={shareShort} />
                                </>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default Read;
