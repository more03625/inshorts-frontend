import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Endpoints, Host, convertToBase64 } from '../../../helpers/comman_helper';
import axios from 'axios';

const Shortsform = () => {
    const [shortsData, setShortsData] = useState(null);
    const [shortsDataError, setShortsDataError] = useState({});
    const [wordCount, setWordCount] = useState({ defaultTitle: 15, defaultDescription: 60, defaultSummary: 10, title: 0, description: 0, summary: 0 });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setShortsData({ ...shortsData, [e.target.name]: e.target.value }); // USE [] to store dynamic object key // es6 feature
    }
    const isValid = () => {
        if (shortsData === null || shortsData.title === '') {
            setShortsDataError({ title: 'Please add title' });
            return false;
        } else if (shortsData === null || shortsData.description === '') {
            setShortsDataError({ description: 'Please add description' });
            return false;
        }
        else if (shortsData === null || shortsData.summary === '') {
            setShortsDataError({ summary: 'Please add summary' });
            return false;
        }
        else if (shortsData === null || shortsData.image === '') {
            setShortsDataError({ image: 'Please add image' });
            return false;
        }
        else if (shortsData === null || shortsData.read_at === '') {
            setShortsDataError({ read_at: 'Please select read at' });
            return false;
        }
        else if (shortsData === null || shortsData.read_more_link === '') {
            setShortsDataError({ read_more_link: 'Please add read more link' });
            return false;
        }
        else if (shortsData === null || shortsData.main_category === '') {
            setShortsDataError({ main_category: 'Please select main category' });
            return false;
        }
        else if (shortsData === null || shortsData.sub_categories === '') {
            setShortsDataError({ sub_categories: 'Please select sub category' });
            return false;
        }
        else if (shortsData === null || shortsData.short_tags === '') {
            setShortsDataError({ short_tags: 'Please add tags' });
            return false;
        } else {
            return true;
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(isValid())
        if (isValid()) {
            console.log(shortsData);
            var url = Host + Endpoints.news
            const result = await axios.post(url, shortsData);
            console.log(result);

        } else {
            console.log("Please fill the form!")
        }

        setLoading(false);
    }
    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64Image = await convertToBase64(file);
        setShortsData({ ...shortsData, image: base64Image });
    };
    const countWords = (str, field) => {

        str = str.replace(/(^\s*)|(\s*$)/gi, "");
        str = str.replace(/[ ]{2,}/gi, " ");
        str = str.replace(/\n /, "\n");

        field === 'title' ? setWordCount({ ...wordCount, title: str.split(' ').length }) : field === 'description' ? setWordCount({ ...wordCount, description: str.split(' ').length }) : setWordCount({ ...wordCount, summary: str.split(' ').length });

        setShortsData({ ...shortsData, [field]: str }); // USE [] to store dynamic object key // es6 feature
    }
    return (
        <>
            <section className="col-lg-8 pt-lg-4 pb-4 mb-3">
                <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
                    <div
                        className="d-sm-flex flex-wrap justify-content-between align-items-center pb-2 ">
                        <h2 className="h3 py-2 me-2 text-center text-sm-start">
                            Add New Short
                        </h2>
                        <div className="py-2">
                            <select className="form-select me-2" id="unp-category" name="status" onChange={(e) => handleChange(e)}>
                                <option value=''>Select Status</option>
                                <option value="publish">Publish</option>
                                <option value="draft">Draft</option>
                            </select>
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
                                onChange={(e) => countWords(e.target.value, 'title')}
                            />
                            <div className="form-text">
                                Total word count: <b>{wordCount.title}</b> words. Words left: <b>{wordCount.defaultTitle - wordCount.title}</b>
                            </div>
                            <p className="fs-ms text-danger">{shortsDataError.title}</p>
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
                                onChange={(e) => countWords(e.target.value, 'description')}
                            ></textarea>
                            <div className="form-text">
                                Total word count: <b>{wordCount.description}</b> words. Words left: <b>{wordCount.defaultDescription - wordCount.description}</b>
                            </div>
                            <p className="fs-ms text-danger">{shortsDataError.description}</p>

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
                                onChange={(e) => countWords(e.target.value, 'summary')}
                            />
                            <div className="form-text">
                                Total word count: <b>{wordCount.summary}</b> words. Words left: <b>{wordCount.defaultSummary - wordCount.summary}</b>
                            </div>
                            <p className="fs-ms text-danger">{shortsDataError.summary}</p>

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
                            />
                            <div className="form-text">
                                Use <Link to={{ pathname: 'https://tinypng.com/' }}>Tinypng</Link> or <Link to={{ pathname: 'https://compressimage.toolur.com/' }}>Toolur</Link> to compress images. it should be less than 50KB
                            </div>
                            <p className="fs-ms text-danger">{shortsDataError.image}</p>

                        </div>
                        <div className="row">
                            <div className="col-sm-6 mb-3">
                                <label className="form-label" htmlFor="unp-standard-price">
                                    Read at
                                </label>
                                <select className="form-select me-2" id="unp-category" name="read_at" onChange={(e) => handleChange(e)}>
                                    <option>Read at</option>
                                    <option>Photos</option>
                                    <option>Graphics</option>
                                    <option>UI Design</option>
                                    <option>Web Themes</option>
                                    <option>Fonts</option>
                                    <option>Add-Ons</option>
                                </select>
                                <div className="form-text">
                                    Select read more brands!

                                </div>
                                <p className="fs-ms text-danger">{shortsDataError.read_at}</p>

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
                                    name="read_more_link"
                                    onChange={(e) => handleChange(e)}
                                />
                                <div className="form-text">
                                    Please enter a valid URL

                                </div>
                                <p className="fs-ms text-danger">{shortsDataError.read_more_link}</p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 mb-3">
                                <label className="form-label" htmlFor="unp-standard-price">
                                    Main Category

                                </label>
                                <select className="form-select me-2" id="unp-category" name="main_category" onChange={(e) => handleChange(e)}>
                                    <option>Select category</option>
                                    <option>Photos</option>
                                    <option>Graphics</option>
                                    <option>UI Design</option>
                                    <option>Web Themes</option>
                                    <option>Fonts</option>
                                    <option>Add-Ons</option>
                                </select>
                                <div className="form-text">
                                    Select only from suggestions!
                                </div>
                                <p className="fs-ms text-danger">{shortsDataError.main_category}</p>

                            </div>
                            <div className="col-sm-6 mb-3">
                                <label className="form-label" htmlFor="unp-extended-price">
                                    Sub categories
                                </label>
                                <select className="form-select me-2" id="unp-category" name="sub_categories" onChange={(e) => handleChange(e)}>
                                    <option>Select category</option>
                                    <option>Photos</option>
                                    <option>Graphics</option>
                                    <option>UI Design</option>
                                    <option>Web Themes</option>
                                    <option>Fonts</option>
                                    <option>Add-Ons</option>
                                </select>
                                <div className="form-text">
                                    Select only from suggestions!

                                </div>
                                <p className="fs-ms text-danger">{shortsDataError.sub_categories}</p>

                            </div>
                        </div>
                        <div className="mb-3 py-2">
                            <label className="form-label" htmlFor="unp-product-tags">
                                Shorts tags
                            </label>
                            <input className="form-control" placeholder="enter keywords" name="short_tags" onChange={(e) => handleChange(e)} />
                            <div className="form-text">
                                Use trending keywords only to get traffic from Google! (Use <Link to={{ pathname: 'https://www.google.com/' }}>Google autocomplete</Link> feature to get trending keywords)
                            </div>
                            <p className="fs-ms text-danger">{shortsDataError.short_tags}</p>

                        </div>

                        <button className="btn btn-primary d-block w-100" type="submit" disabled={loading}>
                            <i className="ci-cloud-upload fs-lg me-2"></i>Add Shorts  {" "}
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
