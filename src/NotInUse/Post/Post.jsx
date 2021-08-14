import './post.css'

const Posts = () => {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://aniportalimages.s3.amazonaws.com/media/details/sbdnbsdnbsndbfnsdf_g7JQMIJ.jpg"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">

                        Music

                    </span>
                    <span className="postCat">

                        Life

                    </span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet

                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
        </div>
    )
}
export default Posts