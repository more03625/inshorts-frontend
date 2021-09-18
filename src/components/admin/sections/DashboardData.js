import React, { useEffect, useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Endpoints, getUserToken, Host } from '../../../helpers/comman_helper';

export default function DashboardData() {

    const [dashboardData, setDashboardData] = useState([]);

    const getDashboardData = async () => {
        var url = Host + Endpoints.dashboard;
        try {
            const result = await axios.get(url, {
                headers: {
                    token: getUserToken().token
                }
            });
            if (result.data.error === true) {
                toast.success(result.data.error)
            } else {
                setDashboardData(result.data.data);
            }
        } catch (error) {
            toast.error('Something went wrong!')
        }
    }
    var postsCount = [];
    var usersCount = [];

    dashboardData.posts && dashboardData.posts.map((value, index) => (
        postsCount.push({ [value._id]: value.count })
    ));

    dashboardData.posts && dashboardData.users.map((value, index) => (
        usersCount.push({ [value._id]: value.count })
    ));
    useEffect(() => {
        getDashboardData();
    }, []);

    return (
        <>
            <section class="col-lg-8 pt-lg-4 pb-4 mb-3">
                <div class="pt-2 px-4 ps-lg-0 pe-xl-5">
                    <h2 class="h3 py-2 text-center text-sm-start">NewsDB Insights 🔥</h2>
                    <div class="row mx-n2 pt-2">

                        <div class="col-md-4 col-sm-6 px-2 mb-4">
                            <div class="bg-secondary h-100 rounded-3 p-4 text-center">
                                <h3 class="fs-sm text-muted">Active Shorts</h3>
                                <p class="h2 mb-2">{postsCount[1] !== undefined && postsCount[1] !== '' ? postsCount[1].publish : ''}</p>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6 px-2 mb-4">
                            <div class="bg-secondary h-100 rounded-3 p-4 text-center">
                                <h3 class="fs-sm text-muted">Draft Shorts</h3>
                                <p class="h2 mb-2">{postsCount[0] !== undefined && postsCount[0] !== '' ? postsCount[0].draft : ''}</p>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-12 px-2 mb-4">
                            <div class="bg-secondary h-100 rounded-3 p-4 text-center">
                                <h3 class="fs-sm text-muted">In Active users</h3>
                                {/*<p class="h2 mb-2">{usersCount[0] !== undefined && usersCount[0] !== '' ? usersCount[0].in - active : ''}</p>*/}
                                <p class="h2 mb-2">4</p>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6 px-2 mb-4">
                            <div class="bg-secondary h-100 rounded-3 p-4 text-center">
                                <h3 class="fs-sm text-muted">Active users</h3>
                                <p class="h2 mb-2">{usersCount[1] !== undefined && usersCount[1] !== '' ? usersCount[1].active : ''}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
