import React from 'react'
import Header from '../../admin/layouts/Header'
import Sidebar from '../../admin/layouts/Sidebar'
import Dashboardheader from '../layouts/Dashboardheader'
import Shortslist from '../sections/shorts/Shortslist';
function Shorts() {
    return (
        <>
            <Header />
            <Dashboardheader />
            <div className="container mb-5 pb-3">
                <div className="bg-light shadow-lg rounded-3 overflow-hidden">
                    <div className="row">
                        <Sidebar />
                        <Shortslist />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shorts
