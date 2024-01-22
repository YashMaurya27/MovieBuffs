import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GET } from "../../services/request";
import "../Title/index.css";
import { NO_IMG_FOUND } from "../../data";
import { Star } from "react-feather";
import { Button } from "antd";
import SeatsModal from "./SeatsModal";

export default function Title(props) {
  const location = useLocation();
  const [details, setDetails] = useState();
  const [ratings, setRatings] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    console.log("movie", location?.state);
    setDetails(location?.state?.data);
    setRatings(location?.state?.ratings);
  }, []);

  useEffect(() => {
    if (details?.["id"]) {
      const akaURL = `https://moviesdatabase.p.rapidapi.com/titles/${details["id"]}/aka`;
      // const actorsURL = `https://moviesdatabase.p.rapidapi.com/titles/${details['id']}/main_actors`
      GET(akaURL, {}, true).then((res) => {
        if (res["success"]) {
          const titles = [];
          res["data"]["results"].forEach((item) => {
            if (item["isOriginalTitle"] === 0) titles.push(item["title"]);
          });
          setDetails({
            ...details,
            ["alternateNames"]: [...titles],
          });
        }
      });
      // GET(actorsURL, {}, true)
      // .then((res) => {
      //   if(res['success']) {
      //     const titles = [];
      //     res['data']['results'].forEach((item) => {
      //       if(item['isOriginalTitle'] === 0)
      //         titles.push(item['title']);
      //     });
      //     setDetails({
      //       ...details,
      //       ['alternateNames']: [...titles]
      //     });
      //   }
      // });
    }
  }, [details?.["id"]]);

  return (
    <>
      <div className="title-cover-section">
        <div className="title-cover-container">
          <div className="title-cover-main">
            <img
              src={details?.["primaryImage"]?.["url"] || NO_IMG_FOUND}
              alt={details?.["titleText"]?.["text"] || ""}
              className="title-cover-image"
            />
            <div className="title-cover-details">
              <h3>{details?.["titleText"]?.["text"] ?? "N/A"}</h3>
              <p className="title-cover-ratings">
                <Star size={18} fill="white" /> {ratings?.["averageRating"]} /
                10 <span>({ratings?.["numVotes"]} votes)</span>
              </p>
              <p className="title-cover-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="title-cover-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="title-cover-specs">
                2h 37m • Action, Period, Thriller • UA • 12 Jan, 2024
              </p>
              <button
                className="title-cover-btn"
                onClick={() => {
                  setModal(true);
                }}
              >
                Book Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
      <SeatsModal 
        modal={modal}
        setModal={setModal}
        details={details}
        ratings={ratings}
      />
    </>
  );
}
