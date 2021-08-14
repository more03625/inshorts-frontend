import { Container } from "@material-ui/core";
import './newscontent.css'
import NewsCard from "../NewsCard/NewsCard";
const NewsContents = ({ loadMore, setLoadMore, newsArray, newsResults, loadMoreBtn }) => {
    const handleOnClick = () => {
        setLoadMore(loadMore + 10);
    }
    return (
        <Container maxWidth="md">
            <div className="newsContent">
                <div className="downloadMessage">
                    <span className='downloadText'>For the best experience use inshorts app on your smartphone</span>
                    <img alt="appstore" className="storeImg" src="https://assets.inshorts.com/website_assets/images/appstore.png" />
                    <img alt="playstore" className="storeImg" src="https://assets.inshorts.com/website_assets/images/playstore.png" />

                </div>
                {newsArray &&
                    newsArray.map((newsItem) => (
                        <NewsCard newsItem={newsItem} key={newsItem.title} />
                    ))
                }
                {
                    loadMore <= newsResults && (
                        <>
                            <hr />
                            <button className="loadmore" onClick={() => handleOnClick()}>
                                {loadMoreBtn}
                            </button>
                        </>
                    )
                }
            </div>
        </Container>
    )
}
export default NewsContents;