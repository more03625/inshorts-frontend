import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { convertToSlug, Host } from "../../helpers/comman_helper";
import toast, { Toaster } from "react-hot-toast";

const NewsCard = ({ shortsData, setShareShort }) => {

  return (
    <>
      <article className="masonry-grid-item">
        <div className="card gallery">
          <Toaster />
          <span className="blog-entry-meta-label fs-sm">
            <i className="ci-video"></i>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=TedKIlo0c04"
            >
              <span className="fs-ms">Watch video</span>
            </a>
          </span>

          <img
            className="card-img-top"
            src={`${Host + shortsData.image}`}
            alt="Post"
          />

          <div className="card-body">
            <h2 className="h6 blog-entry-title" title={shortsData.title}>
              <Link
                to={
                  shortsData && shortsData.title
                    ? "read/" +
                    convertToSlug(shortsData.title) +
                    "/" +
                    shortsData._id
                    : ""
                }
              >
                {shortsData.main_category.name}) {shortsData.title}
              </Link>
            </h2>
            <p className="news-additional-info" title={shortsData.title}>
              Shorts by{" "}
              <span>
                <Link className="me-2 mb-2" to="/author/rahulmore">
                  Rahul More
                </Link>
                {
                  new Date(shortsData.createdAt).toDateString()
                }
              </span>
            </p>
            <p className="fs-sm">{shortsData.description}</p>
            <p className="news-additional-info" title={shortsData.read_at}>
              Read More at{" "}
              <span>
                <a
                  target="_blank"
                  className="me-2 mb-2"
                  href={shortsData.read_at_link + process.env.REACT_APP_UTM_SOURCE}
                >
                  {shortsData.read_at}
                </a>
              </span>
            </p>
          </div>
          <div className="card-footer d-flex align-items-center fs-xs">
            <a target="_blank"
              className="blog-entry-meta-link"
              href={shortsData.read_at_link + process.env.REACT_APP_UTM_SOURCE}
            >
              {shortsData.summary}
            </a>
            <div className="ms-auto text-nowrap" >
              <span className="blog-entry-meta-divider mx-2"></span>
              <a
                onClick={() => setShareShort({ shareID: shortsData._id, shareSlug: shortsData.slug })}
                className="share-btn blog-entry-meta-link text-nowrap"
                href="#"
                id="share-btn"
                data-bs-toggle="modal" data-bs-target="#modalDefault"
              >
                <i className="ci-telegram "></i> {/*31*/}
              </a>
            </div>
          </div>
        </div>
      </article>

      <hr className="mb-4" />

    </>
  );
};
export default NewsCard;
