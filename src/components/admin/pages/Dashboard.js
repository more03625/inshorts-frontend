import React from 'react'
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import Dashboardheader from '../layouts/Dashboardheader';
import DashboardData from '../sections/DashboardData';

function Dashboard() {

    return (
        <>
            <Header />
            <Dashboardheader />
            <div className="container mb-5 pb-3">
                <div className="bg-light shadow-lg rounded-3 overflow-hidden">
                    <div className="row">
                        <Sidebar />
                        <DashboardData />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard
