import React, { useRef } from "react";
import Shorts from "../admin/sections/shorts/Shortslist";

const Sharemodal = ({ shareShort }) => {
  const copyLinkRef = useRef();

  const copyLink = (shortsURL) => {
    navigator.clipboard.writeText(shortsURL)
    copyLinkRef.current.classList.remove("d-none");
    setTimeout(() => {
      copyLinkRef.current.classList.add("d-none");
    }, 3000);
  }
  var shortsURL = window.location.href + "read/" + shareShort.shareSlug + "/" + shareShort.shareID;
  return (
    <>
      <div className="modal fade" id="modalDefault" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Share Shorts</h4>
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center">

                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shortsURL}?utm_source=facebook`}
                  className="btn-social bs-facebook rounded-circle bs-outline bs-lg mx-2"
                >
                  <i className="ci-facebook"></i>
                </a>
                <a
                  href={`whatsapp://send?text=${shortsURL}?utm_source=whatsapp`}
                  className="btn-social bs-whatsapp rounded-circle bs-outline bs-lg mx-2"
                >
                  <i className="ci-whatsapp"></i>
                </a>
                <a
                  href={`https://twitter.com/share?url=${shortsURL}?utm_source=twitter`}
                  className="btn-social bs-twitter rounded-circle bs-outline bs-lg mx-2"
                >
                  <i className="ci-twitter"></i>
                </a>
                <a
                  href={`https://t.me/share/url?url=${shortsURL}?utm_source=telegram`}
                  className="btn-social bs-telegram rounded-circle bs-outline bs-lg mx-2"
                >
                  <i className="ci-telegram"></i>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${shortsURL}?utm_source=linkdin`}
                  className="btn-social bs-linkedin rounded-circle bs-outline bs-lg mx-2"
                >
                  <i className="ci-linkedin"></i>
                </a>
                <a
                  href={`http://pinterest.com/pin/create/link/?url=${shortsURL}?utm_source=pinterest`}
                  className="btn-social bs-pinterest rounded-circle bs-outline bs-lg mx-2"
                >
                  <i className="ci-pinterest"></i>
                </a>
              </div>
            </div>
            <div className="modal-footer">
              <input
                className="form-control"
                type="text"
                value={`${shortsURL}`}
                readOnly
              />
              <p
                className="link-copied-message text-success d-flex justify-content-center d-none"
                style={{ width: "90%" }}
                ref={copyLinkRef}
              >
                Link has been copied to clipboard
              </p>

              <span
                className="ci-add-document float-end"
                onClick={() => copyLink(shortsURL)}
                style={{ cursor: "pointer" }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sharemodal;
