import React from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
import Featured from "../sections/FeaturedCard";
import Breadcrumb from "../layouts/Breadcrumb";
import NewsCard from "../sections/NewsCard";
import { useParams } from "react-router-dom";

const Author = () => {
    const { authorUserName } = useParams();
    return (
        <>
            <Header />
            <Breadcrumb />
            <div className="container-fluid pb-5 mb-2 mb-md-4">
                <div className="container-fluid">
                    <div className="row pt-5 mt-md-2">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6">

                            {/* <NewsCard />*/}
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default Author;
