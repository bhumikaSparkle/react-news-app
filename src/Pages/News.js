import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "../Components/Card";
import Spinner from "../Components/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalR, setTotalR] = useState(0);
  const [loading, setLoading] = useState(false);

  const updateNews = async () => {
    setLoading(true);
    props.setProgress(0);
    await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    )
      .then((response) => {
        // response.json();
        if (response.ok) {
          props.setProgress(30);
          return response.json();
        } else {
          throw new Error("Sorry something went wrong!");
        }
      })
      .then((json) => {
        props.setProgress(70);
        setArticles(json.articles);
        setTotalR(json.totalResults);
        setLoading(false);
        props.setProgress(100);
      })
      .catch((error) => console.log(error));
  };

  const getApi = async () => {
    // setLoading(true);
    // await fetch(
    //   `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a4570f644ff44d0a9a0e5664bd0f5d2d&page=1&pageSize=${props.pageSize}`
    // )
    //   .then((response) => {
    //     // response.json();
    //     if (response.ok) {
    //       return response.json();
    //     } else {
    //       throw new Error("Sorry something went wrong!");
    //     }
    //   })
    //   .then((json) => {
    //     setArticles(json.articles);
    //     setTotalR(json.totalResults);
    //     setLoading(false);
    //   })
    //   .catch((error) => console.log(error));
    updateNews();
  };
  // eslint-disable-next-line
  const handelPre = async () => {
    // setLoading(true);
    // await fetch(
    //   `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${
    //     props.category
    //   }&apiKey=a4570f644ff44d0a9a0e5664bd0f5d2d&page=${page - 1}&pageSize=${
    //     props.pageSize
    //   }`
    // )
    //   .then((response) => {
    //     // response.json();
    //     if (response.ok) {
    //       return response.json();
    //     } else {
    //       throw new Error("Sorry something went wrong!");
    //     }
    //   })
    //   .then((json) => {
    //     setArticles(json.articles);
    //     setTotalR(json.totalResults);
    //     setPage(page - 1);
    //     setLoading(false);
    //   });
    setPage(page - 1);
    updateNews();
  };
  // eslint-disable-next-line
  const handelNext = async () => {
    // setLoading(true);
    // await fetch(
    //   `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${
    //     props.category
    //   }&apiKey=a4570f644ff44d0a9a0e5664bd0f5d2d&page=${page + 1}&pageSize=${
    //     props.pageSize
    //   }`
    // )
    //   .then((response) => {
    //     // response.json();
    //     if (response.ok) {
    //       return response.json();
    //     } else {
    //       throw new Error("Sorry something went wrong!");
    //     }
    //   })
    //   .then((json) => {
    //     setArticles(json.articles);
    //     setTotalR(json.totalResults);
    //     setPage(page + 1);
    //     setLoading(false);
    //   });
    setPage(page + 1);
    updateNews();
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const fetchMoreData = async () => {
    setPage(page + 1);
    await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    )
      .then((response) => {
        // response.json();
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Sorry something went wrong!");
        }
      })
      .then((json) => {
        setArticles(articles.concat(json.articles));
        setTotalR(json.totalResults);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    document.title = capitalizeFirstLetter(props.category);
    getApi();
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <div>
        <section style={{ paddingTop: 0 }}>
          <h1 className="text-center">
            News - Top {capitalizeFirstLetter(props.category)} HeadLines
          </h1>
          {loading && <Spinner />}
          {/* {!loading && here is the content div} */}

          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalR}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {articles.map((element) => {
                  return (
                    <div className="col-4" key={element.url}>
                      <Card
                        urlToImage={
                          element.urlToImage
                            ? element.urlToImage
                            : "https://www.thebusinessresearchcompany.com/infographimages/no_image_availabe.png"
                        }
                        title={element.title ? element.title.slice(0, 60) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 150)
                            : ""
                        }
                        url={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>

          {/* <div className="pagination-wrapper">
              <button
                className="btn btn-primary"
                disabled={page <= 1}
                onClick={handelPre}
              >
                &larr; Prev
              </button>
              <button
                className="btn btn-primary"
                disabled={page + 1 > Math.ceil(totalR / props.pageSize)}
                onClick={handelNext}
              >
                Next &rarr;
              </button>
            </div> */}
        </section>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 9,
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
