import React, { useState } from "react";
import { authorCardData } from '../../data/dummydata.json'
import { Endpoints, getUserToken, Host } from "../../helpers/comman_helper";
import '../../assets/css/custom.css'
import { Link } from "react-router-dom";
import axios from "axios";
const FollowCategoryCard = (props) => {
    var user = authorCardData[0];
    const [followBtn, setFollowBtn] = useState('Follow');
    const [loading, setLoading] = useState(false);
    const followAction = async () => {
        setLoading(true);
        var followInfo = {
            categoryId: props.id,
            userId: getUserToken().data._id
        }
        var url = Host + Endpoints.follow
        const result = await axios.post(url, followInfo, {
            headers: {
                token: getUserToken().token
            }
        });
        if (result.data.error === true) {
            console.log('Please reload the app!')
        } else {
            if (result.data.title === 'followed') {
                setFollowBtn('Following');
            } else {
                setFollowBtn('Follow');
            }
        }
        setLoading(false);
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
            <div className="fs-sm a mb-2">
                {
                    getUserToken() === null ? (
                        <a href="#signin-modal" data-bs-toggle="modal" className="btn btn-primary btn-sm">
                            Follow <span>{user.followCount}</span>
                        </a>
                    ) : (
                        <button className="btn btn-primary btn-sm" onClick={followAction}>
                            {followBtn}  {loading === true ? <i className="fs-lg me-2 spinner-border spinner-border-sm" role="status"></i> : ''}
                        </button>
                    )
                }
            </div>
        </div>
    )
}
export default FollowCategoryCard;