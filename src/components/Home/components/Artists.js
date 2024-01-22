import React from "react";
import { codeToTitle } from "../../../function";
import { Badge } from "antd";
// import {ima} from ''

export default function Artists(props) {
  const images = [
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <>
      {/* <hr /> */}
      <section className="artists-section">
        <div className="artists-container">
          <h2>TOP NAMES THIS WEEK</h2>
          <div className="artists-div">
            {props.artists.map((item, index) => {
              return (
                <div className="artist-div">
                  <h4>
                    {item?.["primaryName"]} ({item?.["birthYear"]} -{" "}
                    {item?.["deathYear"]})
                  </h4>
                  <hr />
                  <div className="artist-professions">
                    {item?.["primaryProfession"]
                      ?.split(",")
                      .map((profession) => {
                        return (
                          <Badge
                            className="site-badge-count-109"
                            count={codeToTitle(profession)}
                            style={{
                              backgroundColor: "#3d0000",
                            }}
                          />
                        );
                      })}
                  </div>
                  <p className="artist-review">
                    <i>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur."
                    </i>
                  </p>
                  <img
                    src={images[index]}
                    className="artist-img"
                    alt={`${item?.["primaryName"]}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
