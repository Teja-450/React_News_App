import React, { useEffect , useState } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const News= (props)=> { 
 
  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage] = useState(1);
  const [totalResults,setTotalResults] =useState(0);

  
  const updateNews= async (pageNo = 1, shouldConcat = false)=> {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a5c65878d0f54607a452d2b7ef2d9914&page=${pageNo}&pagesize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(10);
    try {
      let data = await fetch(url);
      
      let parsedData = await data.json();
      props.setProgress(30);

      if (Array.isArray(parsedData.articles)) {
        setArticles(shouldConcat?[...articles, ...parsedData.articles] : parsedData.articles);
        setLoading(false);
        setTotalResults(parsedData.totalResults);
        setPage(pageNo);
        props.setProgress(100);
      } else {
        props.setProgress(100);
        console.error("Received data is not in the expected format:", parsedData);
        setLoading(false);
      }
    } catch (error) {
      props.setProgress(100);
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  }

useEffect(()=>{
    updateNews();
  },[])
   
  const fetchMoreData = async () => {
    
    const nextPage = setPage(page+1);
    await updateNews(nextPage, true);
  };

  
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center my-5">News Monkey -- Spidey</h1>
          {loading && <Loading/>}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length < totalResults}
            loader={<Loading/>}
          >
            <div className="container">
              <div className="row">
                {articles.map((element, index) => (
                  <div className="col-md-4" key={`${element.url}-${index}`}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={element.description ? element.description.slice(0, 88) : ""}
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  
}
// News.defaultProps = {
//   country : 'us',
//   pageSize : 8,
//   category : 'general'
// }

// News.propTypes = {
//   country : propTypes.string,
//   pageSize : propTypes.number,
//   category : propTypes.string
// }

export default News;