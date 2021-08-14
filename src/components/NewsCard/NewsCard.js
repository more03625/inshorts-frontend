import './newscard.css'
const NewsCard = ({ newsItem }) => {

    const fulldate = new Date(newsItem.publishedAt).toDateString();
    const fulltime = new Date(newsItem.publishedAt).toLocaleTimeString();

    return (
        <div className="newsCard">
            <img className="newsImage" alt={newsItem.title} src={newsItem.urlToImage ? newsItem.urlToImage : 'https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/08_aug/14_sat/img_1628938012382_156.jpg'} />
            <div className="newsText">
                <div>
                    <span className="newsTitle">{newsItem.title}</span>
                    <span className="author"><br />
                        <a href={newsItem.url} rel="noreferrer" target="_blank">
                            Shorts
                        </a>
                        <span className="muted"> by {newsItem.author ? newsItem.author : 'Unknown'}</span> / <span>{fulltime} / {fulldate}</span>
                    </span>
                </div>
                <div className="lowerNewsText">
                    <div className="description">{newsItem.description}</div>

                    <br />
                    <span className="readmore">
                        Read more at <a href={`${newsItem.url}${process.env.REACT_APP_UTM_SOURCE}`} rel="noreferrer" target="_blank">
                            <b>{newsItem.source.name}</b>
                        </a>

                    </span>

                </div>
            </div>
        </div>
    )
}
export default NewsCard;