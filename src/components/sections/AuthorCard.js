const AuthorCard = () => {
    return (
        <div className="d-flex flex-wrap justify-content-between align-items-center pb-4 mt-n1 follow-area">
            <div className="d-flex align-items-center fs-sm mb-2">
                <a className="blog-entry-meta-link" href="#">
                    <div className="blog-entry-author-ava">
                        <img src="https://cartzilla.createx.studio/img/blog/meta/04.jpg" alt="Cynthia Gomez" />
                    </div>Cynthia Gomez
                </a>
                <span className="blog-entry-meta-divider"></span>
                <a className="blog-entry-meta-link" href="#">Jul 17</a>
            </div>
            <div className="fs-sm mb-2">
                <button className="btn btn-primary btn-sm" type="submit">Follow <span>55</span></button>
            </div>
        </div>
    )
}
export default AuthorCard;