import React, { useState, useEffect } from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
import NewsCard from "../sections/NewsCard";
import { Host, Endpoints } from "../../helpers/comman_helper";
import axios from "axios";
import Loading from "../sections/Loading";
import Sharemodal from '../layouts/Sharemodal';
import { topCategories } from '../../data/dummydata.json';
const Home = () => {

    const [shorts, setShorts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [size, setSize] = useState(10);

    const getShorts = async (page) => {
        if (hasMore === true) {
            setLoading(true);
            const url = Host + Endpoints.news + `?page=${page}&size=${size}`;
            const result = await axios.get(url);
            if (result.data.error === true) {
                console.log('there are some errors!')
            } else {
                result.data.data.detail.length === 0 ? setHasMore(false) : setShorts([...shorts, ...result.data.data.detail]);
                setLoading(false);
            }
        }
    }
    const [shareShort, setShareShort] = useState({ shareID: 0, shareSlug: null });


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
                        <div className="col-lg-6 p-0 m-0" >
                            {
                                shorts.map((shortsData, index) => (
                                    <NewsCard key={index} shortsData={shortsData} setShareShort={setShareShort} />
                                ))
                            }
                            <Loading loading={loading} hasMore={hasMore} setPage={setPage} page={page} />
                        </div>
                        <Sidebar />
                        <Sharemodal shareShort={shareShort} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default Home;
