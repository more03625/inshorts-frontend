import axios from "axios";
import React, { useState } from "react";
import { Endpoints, getUserToken, Host } from "../../../helpers/comman_helper";

const Deletemodal = ({ shortsDetails }) => {
    const [status, setStatus] = useState({ post_status: '' });
    const [statusError, setStatusError] = useState();

    const isValid = () => {
        if (status === undefined) {
            setStatusError({ post_status: 'Please select status' });
            return false;
        } else {
            setStatusError('')
            setStatus(status);
            return true;
        }
    }
    const handleChange = (e) => {
        setStatus({ [e.target.name]: e.target.value });
    }
    const changeStatus = async () => {
        if (isValid()) {
            var data = Object.assign(shortsDetails, status, { author_id: getUserToken().data._id });
            var url = Host + Endpoints.news;
            const result = await axios.put(url, data, {
                headers: {
                    token: getUserToken().token
                }
            });
            console.log(result);
        } else {
            console.log('I am in else!')
        }
    }
    return (
        <>
            <div className="modal fade" id="modalDefault" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Are you sure?</h4>
                            <button
                                className="btn-close"
                                type="button"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex justify-content-center">
                                <select
                                    className="form-select me-2"
                                    id="unp-category"
                                    name="post_status"
                                    onChange={(e) => handleChange(e)}
                                    defaultValue={shortsDetails.post_status !== undefined ? shortsDetails.post_status : ''}
                                >
                                    <option value="">Select Status</option>
                                    <option value="publish">Publish</option>
                                    <option value="draft">Draft</option>
                                    <option value="delete">Delete</option>
                                </select>

                            </div>
                            <p className="text-center mt-2 text-danger">{statusError && statusError.post_status}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary btn-sm" onClick={changeStatus}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Deletemodal;
