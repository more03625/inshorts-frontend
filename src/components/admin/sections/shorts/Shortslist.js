import React, { useState, useEffect } from 'react'
import Loading from '../../../sections/Loading';
import { Host, Endpoints, uppercaseFirstLetter, getUserToken } from '../../../../helpers/comman_helper';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Deletemodal from '../../layouts/Deletemodal';
import toast, { Toaster } from 'react-hot-toast';

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
            const url = Host + Endpoints.news + `/admin/news?page=${page}&size=${size}`;
            const result = await axios.get(url, {
                headers: {
                    token: getUserToken().token
                }
            });
            if (result.data.error === true) {
                toast.error(result.data.title);
            } else {
                console.log(result.data.data.detail);
                result.data.data.detail.length === 0 ? setHasMore(false) : setShorts([...shorts, ...result.data.data.detail]); setLoading(false);
            }
            setLoading(false);
        }
    }
    const getShortsDataByID = (index) => {
        setShortsDetails(shorts[index]);
    }
    const redirectToView = (slug, newsID) => {
        // console.log(window.location.host + `/read/${slug}/${newsID}`);
        window.open(window.location.host + `/read/${slug}/${newsID}`)
    }
    useEffect(() => {
        getShorts(page, size);
    }, [page]);

    return (
        <>
            <section className="col-lg-8 pt-lg-4 pb-4 mb-3">
                <Toaster />
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
                                        <td>
                                            <Link to={'#'} onClick={() => redirectToView(value.slug, value._id)}>
                                                {value.title.slice(0, 40) + "..."}
                                            </Link>
                                        </td>
                                        <td>{value.main_category.name}</td>
                                        <td>
                                            {
                                                value.status === 'publish' ?
                                                    <span className="text-success">{uppercaseFirstLetter(value.status)}</span> :
                                                    <span className="text-danger">{uppercaseFirstLetter(value.status)}</span>
                                            }
                                        </td>
                                        <td>{new Date(value.createdAt).toDateString()}</td>
                                        <td>
                                            <Link className="mx-1" to={`/admin/edit-shorts/${value._id}`}><span className="ci-edit"></span></Link>

                                            {/*
                                            <Link data-bs-toggle="modal" data-bs-target="#modalDefault" className="mx-1" to={"#"} onClick={() => getShortsDataByID(index)}>
                                                <span className="ci-trash"></span>
                                            </Link>
                                            */}
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                    <Loading loading={loading} hasMore={hasMore} setPage={setPage} page={page} />
                </div>
            </section>
            {/*<Deletemodal shortsDetails={shortsDetails} />*/}
        </>
    )
}

export default Shorts
