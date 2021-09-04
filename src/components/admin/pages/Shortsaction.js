import React from 'react'
import Header from '../../admin/layouts/Header'
import Sidebar from '../../admin/layouts/Sidebar'
import Dashboardheader from '../layouts/Dashboardheader'
import Shortsform from '../sections/Shortsform'
function Shortsaction() {
    return (
        <>
            <Header />
            <Dashboardheader />
            <div className="container mb-5 pb-3">
                <div className="bg-light shadow-lg rounded-3 overflow-hidden">
                    <div className="row">
                        <Sidebar />
                        <Shortsform />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shortsaction
