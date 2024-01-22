import { Button, Carousel } from "antd";
import React, { useEffect, useRef, useState } from "react";
import "../index.css";
import "../../../App.css";
import { NO_IMG_FOUND } from "../../../data";
import { ChevronRight, ChevronLeft, Star } from "react-feather";
import { GET } from "../../../services/request";
import { trimTitles } from "../../../function";
import { useNavigate } from "react-router-dom";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}
export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
}

export default function Trending(props) {
  const nav = useNavigate();
  const { width } = useWindowDimensions();
  const IMAGES_PER_ROW =
    width < 576 ? 2 : width < 768 ? 4 : width < 1200 ? 5 : 10;
  // const [slideCount, setSlideCount] = useState();

  useEffect(() => {
    if (props.titles.length > 0) {
      console.log("trending component", props.titles);
    }
  }, [props.titles]);

  useEffect(() => {
    if (props.titles.length > 0) {
      console.log("trending widths", IMAGES_PER_ROW);
    }
  }, [width, props.titles]);

  const trendingCarousel = useRef();

  const goToNextSlide = () => {
    trendingCarousel.current.next();
  };

  const goToPrevSlide = () => {
    trendingCarousel.current.prev();
  };

  let index = 0;

  return (
    <section className="trending-section">
      <div className="trending-container">
        <h2>TRENDING THIS WEEK</h2>
        <div className="trending-carousel-container">
          <div className="trending-carousel-btn">
            <Button type="text" onClick={goToPrevSlide}>
              <ChevronLeft size={20} />
            </Button>
          </div>
          <div className="trending-carousel-slides">
            <Carousel autoplay ref={trendingCarousel}>
              {Array(props.titles.length / IMAGES_PER_ROW)
                .fill(1)
                .map((slide) => {
                  return (
                    <div
                      className="trending-slide"
                      key={`${index}-trending-div`}
                    >
                      {Array(IMAGES_PER_ROW)
                        .fill(1)
                        .map((item, index) => {
                          const movie = props.titles[index++];
                          return (
                            <div
                              key={`${index}-trending-movie`}
                              style={{
                                width: `${100 / IMAGES_PER_ROW - 2}%`,
                                height: "250px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                              }}
                            >
                              <img
                                src={
                                  movie?.["primaryImage"]?.["url"] ||
                                  NO_IMG_FOUND
                                }
                                alt={movie?.["titleText"]?.["text"] || ""}
                                className="trending-slide-img"
                              />
                              <p className="trending-titles">
                                {trimTitles(
                                  movie?.["titleText"]?.["text"] || "N/A",
                                  5
                                )}
                              </p>
                              <Button
                                type="dashed"
                                ghost
                                // color="white"
                                onClick={() => {
                                  GET(
                                    `titles/${movie?.["id"] ?? ""}/ratings`
                                  ).then((res) => {
                                    console.log("rating", res);
                                    nav(`/${movie?.["id"]}/title`, {
                                      state: {
                                        data: movie,
                                        ratings: res?.data?.results,
                                      }
                                    });
                                  });
                                }}
                              >
                                View Title
                              </Button>
                            </div>
                          );
                        })}
                    </div>
                  );
                })}
            </Carousel>
          </div>
          <div className="trending-carousel-btn">
            <Button type="text" onClick={goToNextSlide}>
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
