import React from "react";
import Nav from "../../components/Nav";
import Banner from "../../components/Banner";
import "../../styles/HomeScreen.css";
import requests from "../../api/requests";
import Row from "../../components/Row";

const HomeScreen = () => {
  return (
    <div>
      <Nav />
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    </div>
  );
};

export default HomeScreen;
