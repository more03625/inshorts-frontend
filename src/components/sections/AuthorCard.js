import React, { useState } from "react";
import { authorCardData } from '../../data/dummydata.json'
import { Host } from "../../helpers/comman_helper";
import '../../assets/css/custom.css'
import { Link } from "react-router-dom";
const AuthorCard = () => {
    var user = authorCardData[0];

    const followAction = () => {
        alert('Follow');
    }

    return (
        <div className="d-flex flex-wrap justify-content-between align-items-center pb-4 mt-n1 follow-area">
            <div className="d-flex align-items-center fs-sm mb-2">
                <Link className="blog-entry-meta-link" to={`/author/${user.userName}`}>
                    <div className="blog-entry-author-ava">
                        <img className="fit-image" src={Host + user.image} alt={user.name} />
                    </div>{user.name}
                </Link>
                <span className="blog-entry-meta-divider"></span>
                <a className="blog-entry-meta-link" href="#">Shorts: {user.shortsCount}</a>
            </div>
            <div className="fs-sm mb-2">
                <button className="btn btn-primary btn-sm" type="submit" onClick={() => followAction()}>Follow <span>{user.followCount}</span></button>
            </div>
        </div>
    )
}
export default AuthorCard;