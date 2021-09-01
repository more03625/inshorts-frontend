import React, { useState, useEffect } from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
import Featured from "../sections/FeaturedCard";
import Breadcrumb from "../layouts/Breadcrumb";
import NewsCard from "../sections/NewsCard";
import { Host, Endpoints } from "../../helpers/comman_helper";
import axios from "axios";

const Home = () => {

    const [shorts, setShorts] = useState([]);
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const getShorts = async (page) => {
        setLoading(true);
        const url = Host + Endpoints.getNews + `?page=${page}&size=2`;
        const result = await axios.get(url);
        console.log(result.data);
        if (result.data.error === true) {
            console.log('there are some errors!')
        } else {
            result.data.data.length === 0 ? setHasMore(false) : setShorts([...shorts, ...result.data.data]); setLoading(false);
        }
    }
    useEffect(() => {
        getShorts(page)
    }, [page]);

    if (hasMore !== false) {
        window.onscroll = function () {
            if (window.pageYOffset + window.innerHeight >= (document.documentElement.scrollHeight - 300)) {
                setPage(page + 1);
            }
        }
    }

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
                                    <NewsCard shortsData={shortsData} />
                                ))
                            }
                            {
                                loading === true ? (
                                    <div class="row justify-content-center mb-2">
                                        <div class="spinner-border" style={{ width: "3rem", height: "3rem" }} ></div>
                                    </div>
                                ) : ('')
                            }
                            {
                                hasMore === false ?
                                    <div class="row text-center justify-content-center mb-2">
                                        <p>You consumed everything!</p>
                                    </div>
                                    : ''
                            }
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
