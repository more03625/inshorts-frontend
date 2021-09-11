import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Breadcrumb from "../layouts/Breadcrumb";
import { useParams } from "react-router-dom";
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
                    Informational Pages!
                </div>
            </div>
            <Footer />
        </>
    );
};
export default Read;
