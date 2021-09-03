import React, { useRef } from "react";

const Sharemodal = () => {

  const copyLinkRef = useRef();
  
  const copyLink = () => {
    copyLinkRef.current.classList.remove("d-none");
  };
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
                  href="#"
                  className="btn-social bs-facebook rounded-circle bs-outline bs-lg mx-2"
                >
                  <i className="ci-facebook"></i>
                </a>
                <a
                  href="#"
                  className="btn-social bs-whatsapp rounded-circle bs-outline bs-lg mx-2"
                >
                  <i className="ci-whatsapp"></i>
                </a>
                <a
                  href="#"
                  className="btn-social bs-twitter rounded-circle bs-outline bs-lg mx-2"
                >
                  <i className="ci-twitter"></i>
                </a>
                <a
                  href="#"
                  className="btn-social bs-telegram rounded-circle bs-outline bs-lg mx-2"
                >
                  <i className="ci-telegram"></i>
                </a>
                <a
                  href="#"
                  className="btn-social bs-linkedin rounded-circle bs-outline bs-lg mx-2"
                >
                  <i className="ci-linkedin"></i>
                </a>
                <a
                  href="#"
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
                value="http://localhost:3000/read/test-property/61276a684bcd4344548cc576"
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
                onClick={copyLink}
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
