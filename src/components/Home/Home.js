import React, { useEffect, useState } from "react";
import { GET } from "../../services/request";
import "./index.css";
import { defaultTitles } from "../../data";
import Main from "./components/Main";
import Trending from "./components/Trending";
import Artists from "./components/Artists";

function Home() {
  const [titles, setTitles] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [artists, setArtists] = useState([]);

  // useEffect(() => {
  //   const params = {
  //     q: 'entertainment',
  //     apiKey: '5f625bea3f1045118721a9a6f6bf70e0'
  //   };
  //   GET('https://newsapi.org/v2/everything', params, true)
  //     .then((res) => {
  //       console.log('news', res);
  //     });
  // }, []);

  useEffect(() => {
    const url = "titles";
    GET(url, {
      limit: 20,
    }).then((res) => {
      if (res["success"]) {
        setTitles(res?.["data"]?.results ?? []);
      } else {
        setTitles([...defaultTitles]);
      }
    });
    const upcomingURL = "titles/x/upcoming";
    GET(upcomingURL, {
      limit: 20,
    }).then((res) => {
      setUpcoming(res?.["data"]?.results ?? []);
    });
    const actorsURL = "actors";
    GET(actorsURL, {
      limit: 3,
    }).then((res) => {
      setArtists(res?.["data"]?.results ?? []);
    });
  }, []);

  return (
    <>
      <main id="home-main">
        <Main 
          upcoming={upcoming}
        />
        <Trending 
          titles={titles}
        />
        <Artists 
          artists={artists}
        />
      </main>
    </>
  );
}

export default Home;
