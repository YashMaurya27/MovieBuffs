import React, { useRef } from "react";
import { Button, Carousel } from "antd";
import { ChevronRight, ChevronLeft, List, Star } from "react-feather";
import "../../Home/index.css";
import { NO_IMG_FOUND } from "../../../data";

export default function Main(props) {
  const covers = [
    // "https://miro.medium.com/v2/resize:fit:2000/1*MCD4-OFYpa9ZD-FT-acgBg.jpeg",
    // "https://www.thewrap.com/wp-content/uploads/2021/10/the-batman-robert-pattinson-poster.jpg",
    // "https://www.comingsoon.net/wp-content/uploads/sites/3/2022/12/Oppenheimer-still-e1670871295686.jpg",
    {
      img: "https://miro.medium.com/v2/resize:fit:2000/1*MCD4-OFYpa9ZD-FT-acgBg.jpeg",
      title: "Captain America: Winter Soldier",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      img: "https://www.thewrap.com/wp-content/uploads/2021/10/the-batman-robert-pattinson-poster.jpg",
      title: "Batman Origins",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      img: "https://www.comingsoon.net/wp-content/uploads/sites/3/2022/12/Oppenheimer-still-e1670871295686.jpg",
      title: "Oppenheimer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ];

  const carousel = useRef();

  const goToNextSlide = () => {
    carousel.current.next();
  };

  const goToPrevSlide = () => {
    carousel.current.prev();
  };

  return (
    <section className="main-section">
      <div className="main-container">
        <div className="carousel-container">
          <Button type="text" onClick={goToPrevSlide}>
            <ChevronLeft size={20} />
          </Button>
          <div className="carousel-div">
            <Carousel autoplay ref={carousel}>
              {covers.map((cover, index) => {
                return (
                  <div
                    className="carousel-img-container"
                    key={`carousel-div-${index}`}
                  >
                    <img
                      src={cover?.img}
                      alt="Movie poster unavailable"
                      className="carousel-img"
                      key={`carousel-img-${index}`}
                    />
                    <div
                      className="carousel-overlay"
                      key={`carousel-overlay-${index}`}
                    >
                      <div>
                        <h3>{cover?.title}</h3>
                        <p>
                          <span>Rating: </span>
                          <Star color="yellow" fill="yellow" size={14} />
                          <Star color="yellow" fill="yellow" size={14} />
                          <Star color="yellow" fill="yellow" size={14} />
                          <Star size={14} />
                          <Star size={14} />
                        </p>
                      </div>
                      <p>{cover?.description}</p>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
          <Button type="text" onClick={goToNextSlide}>
            <ChevronRight size={20} />
          </Button>
        </div>
        <div className="upcoming-container">
          <h2>UPCOMING TITLES</h2>
          <div className="upcoming-list">
            {props.upcoming?.map((movie, index) => {
              return (
                <>
                  <div
                    className="upcoming-item"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      direction: index % 2 === 0 ? "ltr" : "rtl",
                      backgroundColor: index % 2 === 0 ? "black" : "#3D0000",
                      width: "90%",
                      margin: "auto",
                    }}
                  >
                    <div className="upcoming-item-img">
                      <img
                        src={movie?.["primaryImage"]?.["url"] || NO_IMG_FOUND}
                        alt={movie?.["titleText"]?.["text"] || ""}
                      />
                    </div>
                    <div className="upcoming-item-content">
                      <h4>
                        {movie?.["titleText"]?.["text"] || "N/A"} - (
                        {movie?.["releaseYear"]?.year || "N/A"})
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <div className="upcoming-item-actions">
                        <Button type="link" icon={<List size={20} />}>
                          Mark Interest
                        </Button>
                      </div>
                    </div>
                  </div>
                  <hr className="upcoming-item-line" />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
