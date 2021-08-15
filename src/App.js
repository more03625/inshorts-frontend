import { useEffect, useState } from "react";
import NavInshorts from "./components/NavInshorts";
import NewsContents from "./components/NewsContent/NewsContent";
import Axios from 'axios';
import Footer from "./components/Footer/Footer";
import './App.css'
function App() {

  const [category, setCategory] = useState('general');
  const [newsResults, setNewsResults] = useState();
  const [newsArray, setNewsArray] = useState([]);
  const [loadMore, setLoadMore] = useState(10);
  const [loadMoreBtn, setLoadMoreBtn] = useState('Load More');
  console.log(process.env);
  const newsApi = async () => {
    setLoadMoreBtn('Loading...');
    try {
      const result = await Axios.get(`${process.env.REACT_APP_DEV_API_URL}/api/getPosts?category=${category}`);
      console.log(result)
      setNewsArray(result.data.articles);
      setNewsResults(result.data.totalResults);

    } catch (error) {
      console.log('There is error: ' + error)
    }
    setLoadMoreBtn('Load More');

  }
  useEffect(() => {

    newsApi();
    // eslint-disable-next-line
  }, [category, newsResults, loadMore])
  return (
    <div className="App">
      <NavInshorts setCategory={setCategory} />
      <NewsContents loadMore={loadMore} setLoadMore={setLoadMore} newsArray={newsArray} newsResults={newsResults} loadMoreBtn={loadMoreBtn} setLoadMoreBtn={setLoadMoreBtn} />
      <Footer />
    </div>
  );
}

export default App;
