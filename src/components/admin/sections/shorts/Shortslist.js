import React, { useState, useEffect } from 'react'
import Loading from '../../../sections/Loading';
import { Host, Endpoints } from '../../../../helpers/comman_helper';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Deletemodal from '../../layouts/Deletemodal';

function Shorts() {

    const [shorts, setShorts] = useState([]);
    const [shortsDetails, setShortsDetails] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [size, setSize] = useState(10);

    const getShorts = async (page) => {
        if (hasMore === true) {
            setLoading(true);
            const url = Host + Endpoints.news + `?page=${page}&size=${size}`;
            const result = await axios.get(url);
            if (result.data.error === true) {
                console.log('there are some errors!')
            } else {
                result.data.data.length === 0 ? setHasMore(false) : setShorts([...shorts, ...result.data.data]); setLoading(false);
            }
        }
    }
    const getShortsDataByID = (index) => {
        setShortsDetails(shorts[index]);
    }
    useEffect(() => {
        getShorts(page, size);
    }, [page]);
    return (
        <>
            <section className="col-lg-8 pt-lg-4 pb-4 mb-3">

                <div className="table-responsive fs-md mb-4">

                    <table className="table table-hover mb-0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Created at</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                shorts.map((value, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{value.title}</td>
                                        <td>{value.main_category.name}</td>
                                        <td>{value.post_status}</td>
                                        <td>{new Date(value.createdAt).toDateString()}</td>
                                        <td>
                                            <Link className="mx-1" to={`/admin/edit-shorts/${value._id}`}><span className="ci-edit"></span></Link>
                                            <Link data-bs-toggle="modal" data-bs-target="#modalDefault" className="mx-1" to={"#"} onClick={() => getShortsDataByID(index)}>
                                                <span className="ci-trash"></span>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                    <Loading loading={loading} hasMore={hasMore} setPage={setPage} page={page} />
                </div>
            </section>
            <Deletemodal shortsDetails={shortsDetails} />
        </>
    )
}

export default Shorts
