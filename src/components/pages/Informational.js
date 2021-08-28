import React from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
import Featured from "../sections/Featured";
import Breadcrumb from "../layouts/Breadcrumb";
import NewsCard from "../sections/NewsCard";
import '../../assets/css/custom.css'
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
                    <div className="row pt-5 mt-md-2">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6">

                            <div class="d-flex flex-wrap justify-content-between align-items-center pb-4 mt-n1 follow-area">
                                <div class="d-flex align-items-center fs-sm mb-2">
                                    <a class="blog-entry-meta-link" href="#">
                                        <div class="blog-entry-author-ava">
                                            <img src="https://cartzilla.createx.studio/img/blog/meta/04.jpg" alt="Cynthia Gomez" />
                                        </div>Cynthia Gomez
                                    </a>
                                    <span class="blog-entry-meta-divider"></span>
                                    <a class="blog-entry-meta-link" href="#">Jul 17</a>
                                </div>
                                <div class="fs-sm mb-2">
                                    <button class="btn btn-primary btn-sm" type="submit">Follow <span>55</span></button>
                                </div>
                            </div>
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
