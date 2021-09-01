import React from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
import Featured from "../sections/FeaturedCard";
import Breadcrumb from "../layouts/Breadcrumb";
import NewsCard from "../sections/NewsCard";
import '../../assets/css/custom.css'
import { useParams } from "react-router-dom";
import AuthorCard from "../sections/AuthorCard";
const Read = () => {
    const { slug, newsID } = useParams();
    console.log(slug)
    console.log(newsID)
    return (
        <>
            <Header />
            <Breadcrumb />
            <div className="container-fluid pb-5 mb-2 mb-md-4">
                <div className="container-fluid">
                    <div className="row pt-5 mt-md-2">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6">

                            <AuthorCard />
                            <NewsCard />
                            <NewsCard />
                            <NewsCard />
                            <NewsCard />
                            <NewsCard />

                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default Read;
