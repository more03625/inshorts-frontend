import React, { useState, useEffect, useRef } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { Endpoints, Host, convertToBase64, convertToSlug, uppercaseFirstLetter, createReader, getUserToken } from '../../../helpers/comman_helper';
import axios from 'axios';
import { status, readAt } from '../../../data/select.json';
import toast, { Toaster } from 'react-hot-toast';
const Shortsform = () => {
    const { shortsID } = useParams();
    const requiredWidth = 600;
    const requiredHeight = 358;

    const [shortsData, setShortsData] = useState(null);
    const [shortsDataError, setShortsDataError] = useState({});
    const [wordCount, setWordCount] = useState({ defaultTitle: 15, defaultDescription: 60, defaultSummary: 10, title: 0, description: 0, summary: 0 });
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [categories, setCategories] = useState(null);
    const [visitShorts, setVisitShorts] = useState(null);

    const statusRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const summaryRef = useRef();
    const imgRef = useRef();

    const history = useHistory();
    const getCategories = async () => {
        var url = Host + Endpoints.category
        const result = await axios.get(url);
        if (result.data.error === true) {
            toast.success(result.data.error)
        } else {
            setCategories(result.data.data.detail);
        }
    }
    const handleChange = (e) => {
        setShortsData({ ...shortsData, [e.target.name]: e.target.value }); // USE [] to store dynamic object key // es6 feature
    }
    const isValid = () => {
        if (shortsData === null || shortsData.title === '') {
            setShortsDataError({ title: 'Please add title' });
            titleRef.current.scrollIntoView();
            return false;
        } else if (shortsData.status === '' || shortsData.status === undefined) {
            setShortsDataError({ status: 'Please select status' });
            statusRef.current.scrollIntoView();
            return false;
        }
        else if (shortsData.description === '' || shortsData.description === undefined) {
            setShortsDataError({ description: 'Please add description' });
            descriptionRef.current.scrollIntoView();
            return false;
        }
        else if (shortsData.summary === '' || shortsData.summary === undefined) {
            setShortsDataError({ summary: 'Please add summary' });
            summaryRef.current.scrollIntoView();
            return false;
        }
        else if (shortsData.image === '' || shortsData.image === undefined) {
            setShortsDataError({ image: 'Please add image' });
            imgRef.current.scrollIntoView();
            return false;
        }
        else if (shortsData.read_at === '' || shortsData.read_at === undefined) {
            setShortsDataError({ read_at: 'Please select read at' });
            return false;
        }
        else if (shortsData.read_at_link === '' || shortsData.read_at_link === undefined) {
            setShortsDataError({ read_at_link: 'Please add read more link' });
            return false;
        }
        else if (shortsData.main_category === '' || shortsData.main_category === undefined) {
            setShortsDataError({ main_category: 'Please select main category' });
            return false;
        }
        else if (shortsData.sub_categories === '' || shortsData.sub_categories === undefined) {
            setShortsDataError({ sub_categories: 'Please select sub category' });
            return false;
        }
        else if (shortsData.short_tags === '' || shortsData.short_tags === undefined) {
            setShortsDataError({ short_tags: 'Please add tags' });
            return false;
        } else {
            return true;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (isValid()) {
            var slug = convertToSlug(shortsData.title);
            Object.assign(shortsData, { slug: slug, author_id: getUserToken().data._id });

            if (shortsData.isImageSelected === undefined) {
                Object.assign(shortsData, { image: 0 });
            }

            var url = Host + Endpoints.news;
            var token = {
                headers: {
                    token: getUserToken().token
                }
            }
            const result = shortsID !== undefined ? await axios.put(url, shortsData, token) : await axios.post(url, shortsData, token);

            if (result.data.error === false) {
                setShortsDataError('');
                setVisitShorts(window.location.host + "/read/" + result.data.data.slug + "/" + result.data.data._id);
                setTimeout(function () {
                    history.push('/admin/edit-shorts');
                }, 1000);
                setShortsData(null);
            } else {
                setShortsDataError({ postShortError: result.data.title });
            }
            window.scrollTo({
                behavior: 'smooth',
                top: 0
            });
        }
        setLoading(false);
    }
    const uploadImage = (e) => {
        const file = e.target.files[0];
        createReader(file, function (width, height) {
            if (file.size > 50000) {
                alert("File size should be below 50 KB");
                document.getElementById("unp-product-files").value = '';
                return false;
            } else if (width !== requiredWidth && height !== requiredHeight) {
                alert(`Only ${requiredWidth} * ${requiredHeight} image allowed`);
                document.getElementById("unp-product-files").value = '';
                return false;
            } else {
                const base64Image = convertToBase64(file);
                base64Image.then((imgResponse) => {
                    setShortsData({ ...shortsData, image: imgResponse, isImageSelected: true });
                })
            }
        })
    }

    const countWords = (e, str, field) => {

        if (field === 'title' && str.split(' ').length >= wordCount.defaultTitle) {
            e.preventDefault();
        } else if (field === 'description' && str.split(' ').length >= wordCount.defaultDescription) {
            e.preventDefault();
        } else if (field === 'summary' && str.split(' ').length >= wordCount.defaultSummary) {
            e.preventDefault();
        }

        field === 'title' ? setWordCount({ ...wordCount, title: str.split(' ').length }) : field === 'description' ? setWordCount({ ...wordCount, description: str.split(' ').length }) : setWordCount({ ...wordCount, summary: str.split(' ').length });
        setShortsData({ ...shortsData, [field]: str }); // USE [] to store dynamic object key // es6 feature
    }
    const getShortsByID = async () => {
        if (shortsID !== undefined) {
            setLoading(true);
            const url = Host + Endpoints.news + `/${shortsID}`;
            const result = await axios.get(url);
            if (result.data.error === true) {
                toast.error(result.data.title);
            } else {
                result.data.data === null ? setNotFound(true) : setShortsData(result.data.data); setLoading(false);
            }
        }
    }
    useEffect(() => {
        getCategories();
        getShortsByID();
    }, []);
    return (
        <>
            <section className="col-lg-8 pt-lg-4 pb-4 mb-3">
                <Toaster />
                <div className="pt-2 px-4 ps-lg-0 pe-xl-5">

                    {visitShorts &&
                        <div className="alert alert-success d-flex" role="alert">
                            <div className="alert-icon">
                                <i className="ci-check-circle"></i>
                            </div>
                            <div>Post has been addedd successfully <a target="_blank" rel="noreferrer" href={visitShorts} className="alert-link">View Post</a></div>
                        </div>
                    }
                    {
                        shortsDataError.postShortError &&
                        <div className="alert alert-success d-flex" role="alert">
                            <div className="alert-icon">
                                <i className="ci-check-circle"></i>
                            </div>
                            <div>{shortsDataError.postShortError}</div>
                        </div>
                    }
                    <div
                        className="d-sm-flex flex-wrap justify-content-between align-items-center pb-2 ">
                        <h2 className="h3 py-2 me-2 text-center text-sm-start">
                            {shortsID !== undefined ? 'Edit shorts' : 'Add New Short'}
                        </h2>
                        <div className="py-2">
                            <select
                                className="form-select me-2"
                                name="status"
                                onChange={(e) => handleChange(e)}
                                value={shortsData && shortsData.status ? shortsData.status : ""}
                                ref={statusRef}
                            >
                                <option value="">Select status</option>
                                {
                                    status.map((value, index) => (
                                        <option value={value}>{uppercaseFirstLetter(value)}</option>
                                    ))
                                }
                            </select>
                            <p className="text-danger fs-md">{shortsDataError.status}</p>

                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 pb-2">
                            <label className="form-label" htmlFor="unp-product-name">
                                Shorts Title
                            </label>

                            <input
                                className="form-control"
                                type="text"
                                id="unp-product-name"
                                name="title"
                                onKeyPress={(e) => countWords(e, e.target.value, 'title')}
                                defaultValue={shortsData && shortsData.title}
                                ref={titleRef}
                            />
                            <div className="form-text">
                                Total word count: <b>{wordCount.title}</b> words. Words left: <b>{wordCount.defaultTitle - wordCount.title}</b>
                            </div>
                            <p className="text-danger fs-md">{shortsDataError.title}</p>
                        </div>
                        <div className="mb-3 py-2">
                            <label className="form-label" htmlFor="unp-shortds-description">
                                Shorts description
                            </label>
                            <textarea
                                className="form-control"
                                rows="6"
                                id="unp-shortds-description"
                                name="description"
                                onKeyPress={(e) => countWords(e, e.target.value, 'description')}
                                defaultValue={shortsData && shortsData.description}
                                ref={descriptionRef}

                            ></textarea>
                            <div className="form-text">
                                Total word count: <b>{wordCount.description}</b> words. Words left: <b>{wordCount.defaultDescription - wordCount.description}</b>
                            </div>
                            <p className="text-danger fs-md">{shortsDataError.description}</p>

                        </div>
                        <div className="mb-3 pb-2">
                            <label className="form-label" htmlFor="unp-product-name">
                                Short Summary | Add Intresting Facts | Previous | Achievement
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                id="unp-product-name"
                                name="summary"
                                onKeyPress={(e) => countWords(e, e.target.value, 'summary')}
                                defaultValue={shortsData && shortsData.summary}
                                ref={summaryRef}


                            />
                            <div className="form-text">
                                Total word count: <b>{wordCount.summary}</b> words. Words left: <b>{wordCount.defaultSummary - wordCount.summary}</b>
                            </div>
                            <p className="text-danger fs-md">{shortsDataError.summary}</p>

                        </div>
                        <div className="mb-3 pb-2">
                            <label className="form-label" htmlFor="unp-product-files">
                                Add attractive image
                            </label>
                            <input
                                className="form-control"
                                type="file"
                                id="unp-product-files"
                                name="image"
                                onChange={(e) => uploadImage(e)}
                                accept="image/jpeg, image/jpg, image/png, image/webp"
                                ref={imgRef}


                            />
                            <div className="form-text">
                                <a target="_blank" href="https://www.newsdb.in/">Download image</a> OR. Use <Link to={{ pathname: 'https://tinypng.com/' }}>Tinypng</Link> or <Link to={{ pathname: 'https://compressimage.toolur.com/' }}>Toolur</Link> to compress images. it should be less than 50KB & Dimensions should be 600 * 358
                            </div>
                            <p className="text-danger fs-md">{shortsDataError.image}</p>

                        </div>
                        <div className="row">
                            <div className="col-sm-6 mb-3">
                                <label className="form-label" htmlFor="unp-standard-price">
                                    Read at
                                </label>
                                <select className="form-select me-2" id="unp-category" name="read_at" onChange={(e) => handleChange(e)}
                                    value={
                                        shortsData && shortsData.read_at
                                            ? shortsData.read_at
                                            : ""
                                    }
                                >
                                    <option value="">Read at</option>
                                    {
                                        readAt.map((value, index) => (
                                            <option key={index} value={value}>{value}</option>
                                        ))
                                    }
                                </select>
                                <div className="form-text">
                                    Select read more brands!

                                </div>
                                <p className="text-danger fs-md">{shortsDataError.read_at}</p>

                            </div>
                            <div className="col-sm-6 mb-3">
                                <label className="form-label" htmlFor="unp-extended-price">
                                    Read more link
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="unp-product-name"
                                    placeholder="https://newsdb.in"
                                    name="read_at_link"
                                    onChange={(e) => handleChange(e)}
                                    defaultValue={shortsData && shortsData.read_at_link}
                                />
                                <div className="form-text">
                                    Please enter a valid URL

                                </div>
                                <p className="text-danger fs-md">{shortsDataError.read_at_link}</p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 mb-3">
                                <label className="form-label" htmlFor="unp-standard-price">
                                    Main Category
                                </label>
                                <select className="form-select me-2" id="unp-category" name="main_category"
                                    onChange={(e) => handleChange(e)}
                                    value={shortsData && shortsData.main_category && shortsData.main_category._id}>
                                    <option value="">Select category</option>
                                    {
                                        categories && categories.map((value, index) => (
                                            <option key={index} value={value._id}>{value.name}</option>
                                        ))
                                    }
                                </select>
                                <div className="form-text">
                                    Select only from suggestions!
                                </div>
                                <p className="text-danger fs-md">{shortsDataError.main_category}</p>

                            </div>
                            <div className="col-sm-6 mb-3">
                                <label className="form-label" htmlFor="unp-extended-price">
                                    Sub categories
                                </label>
                                <select className="form-select me-2" id="unp-category" name="sub_categories" onChange={(e) => handleChange(e)} value={shortsData && shortsData.sub_categories}>
                                    <option value="">Select sub category</option>
                                    {
                                        categories && categories.map((value, index) => (
                                            <option key={index} value={value._id}>{value.name}</option>
                                        ))
                                    }
                                </select>
                                <div className="form-text">
                                    Select only from suggestions!
                                </div>
                                <p className="text-danger fs-md">{shortsDataError.sub_categories}</p>

                            </div>
                        </div>
                        <div className="mb-3 py-2">
                            <label className="form-label" htmlFor="unp-product-tags">
                                Shorts tags
                            </label>
                            <input className="form-control" placeholder="enter keywords" name="short_tags" onChange={(e) => handleChange(e)} defaultValue={shortsData && shortsData.short_tags} />
                            <div className="form-text">
                                Use trending keywords only to get traffic from Google! (Use <Link to={{ pathname: 'https://www.google.com/' }}>Google autocomplete</Link> feature to get trending keywords)
                            </div>
                            <p className="text-danger fs-md">{shortsDataError.short_tags}</p>

                        </div>

                        <button className="btn btn-primary d-block w-100" type="submit" disabled={loading}>
                            <i className="ci-cloud-upload fs-lg me-2"></i>{shortsID !== undefined ? 'Update shorts' : 'Add Shorts'}  {" "}
                            {
                                loading === true ? <i className="fs-lg me-2 spinner-border spinner-border-sm" role="status"></i> : ''
                            }
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Shortsform
