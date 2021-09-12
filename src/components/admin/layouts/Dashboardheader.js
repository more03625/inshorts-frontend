import React from 'react'
import avtar from '../../../../src/assets/images/avtar.png'
import { Host } from '../../../helpers/comman_helper'
function Dashboardheader() {
    return (
        <>
            <div className="page-title-overlap bg-accent pt-4">
                <div className="container d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-between align-items-center pt-2">
                    <div className="d-flex align-items-center pb-3">
                        <div
                            className=" img-thumbnail rounded-circle position-relative flex-shrink-0" style={{ width: "6.375rem" }} >
                            <img
                                className="rounded-circle"
                                src={Host + '/uploads/user-profile/newsdb-admin-logo.png'}
                                alt="Createx Rahul"
                            />
                        </div>
                        <div className="ps-3">
                            <h3 className="text-light fs-lg mb-0">Rahul More</h3>
                            <span className="d-block text-light fs-ms opacity-60 py-1">
                                #NewsDB Editors
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboardheader
