import React, { useState, useEffect } from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
import Featured from "../sections/FeaturedCard";
import Breadcrumb from "../layouts/Breadcrumb";
import NewsCard from "../sections/NewsCard";
import { Host, Endpoints } from "../../helpers/comman_helper";
import axios from "axios";
import Loading from "../sections/Loading";
const Home = () => {

    const [shorts, setShorts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [size, setSize] = useState(2);

    const getShorts = async (page) => {
        if (hasMore === true) {
            setLoading(true);
            const url = Host + Endpoints.getNews + `?page=${page}&size=${size}`;
            const result = await axios.get(url);
            if (result.data.error === true) {
                console.log('there are some errors!')
            } else {
                result.data.data.length === 0 ? setHasMore(false) : setShorts([...shorts, ...result.data.data]); setLoading(false);
            }
        }
    }
    useEffect(() => {
        getShorts(page, size);
    }, [page]);

    return (
        <>
            <Header />
            {/*<Breadcrumb />*/}
            <div className="container-fluid pb-5 mb-2 mb-md-4">
                <div className="container-fluid">
                    <div className="row pt-5 mt-md-2">
                        <div className="col-lg-3">

                        </div>
                        <div className="col-lg-6">
                            {
                                shorts.map((shortsData, index) => (
                                    <NewsCard key={index} shortsData={shortsData} />
                                ))
                            }
                            <Loading loading={loading} hasMore={hasMore} setPage={setPage} page={page} />
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default Home;
