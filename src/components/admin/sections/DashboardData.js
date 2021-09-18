import React from 'react'

export default function DashboardData() {
    return (
        <>
            <section class="col-lg-8 pt-lg-4 pb-4 mb-3">
                <div class="pt-2 px-4 ps-lg-0 pe-xl-5">
                    <h2 class="h3 py-2 text-center text-sm-start">NewsDB Insights 🔥</h2>
                    <div class="row mx-n2 pt-2">
                        <div class="col-md-4 col-sm-6 px-2 mb-4">
                            <div class="bg-secondary h-100 rounded-3 p-4 text-center">
                                <h3 class="fs-sm text-muted">Earnings (before taxes)</h3>
                                <p class="h2 mb-2">$1,690.<small>50</small></p>
                                <p class="fs-ms text-muted mb-0">Sales 8/1/2021 - 8/15/2021</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 px-2 mb-4">
                            <div class="bg-secondary h-100 rounded-3 p-4 text-center">
                                <h3 class="fs-sm text-muted">Your balance</h3>
                                <p class="h2 mb-2">$1,375.<small>00</small></p>
                                <p class="fs-ms text-muted mb-0">To be paid on 8/15/2021</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12 px-2 mb-4">
                            <div class="bg-secondary h-100 rounded-3 p-4 text-center">
                                <h3 class="fs-sm text-muted">Lifetime earnings</h3>
                                <p class="h2 mb-2">$9,156.<small>74</small></p>
                                <p class="fs-ms text-muted mb-0">Based on list price</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
