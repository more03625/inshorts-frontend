import React, { useState, useEffect, Fragment } from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
import Breadcrumb from "../layouts/Breadcrumb";
import NewsCard from "../sections/NewsCard";
import { useParams } from "react-router-dom";
import AuthorCard from "../sections/AuthorCard";
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

    var categoryName = shorts && shorts.main_category
    // current : newsdID
    const getShorts = async (page) => {
        if (hasMore === true) {
            setLoading(true);
            const url = Host + Endpoints.news + `/${newsID}`;
            const result = await axios.get(url);
            if (result.data.error === true) {
                console.log('there are some errors!');
            } else {
                result.data.data === null ? setNotFound(true) : (result.data.data.length === 0) ? setHasMore(false) : setShorts(result.data.data); setLoading(false);
            }
        }
    }
    useEffect(() => {
        getShorts(page);
    }, []);
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
                                        <AuthorCard />
                                        <NewsCard shortsData={shorts} setShareShort={setShareShort} />
                                    </div>
                                    <Sidebar />
                                </>
                        }
                    </div>
                </div>
            </div>
            <Sharemodal shareShort={shareShort} />
            <Footer />
        </>
    );
};
export default Read;
