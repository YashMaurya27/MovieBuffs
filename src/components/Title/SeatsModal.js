import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import Cycle from "../../assets/cycle.jpg";
import Bike from "../../assets/bike.jpg";
import SmallCar from "../../assets/smallCar.jpg";
import { DatePicker } from "antd";
import moment, { Moment } from "moment";
// import BigCar from "../../assets/bigCar.jpg";

import { useNavigate } from "react-router-dom";

export default function SeatsModal(props) {
  const handleCloseModal = () => {
    props.setModal(false);
  };
  const [seatCount, setSeatCount] = useState(2);
  const [image, setImage] = useState(Bike);
  const [showTime, setShowTime] = useState();
  const [date, setDate] = useState();
  const [error, setError] = useState("");
  const nav = useNavigate();

  const seatCategories = [
    {
      title: "CLASSIC",
      price: "Rs. 200.00",
      status: "Available",
    },
    {
      title: "PRIME",
      price: "Rs. 230.00",
      status: "Available",
    },
    {
      title: "RECLINER",
      price: "Rs. 300.00",
      status: "Filling Fast",
    },
  ];

  const imageMapping = {
    Cycle: {
      seats: [1],
      image: Cycle,
    },
    Bike: {
      seats: [2],
      image: Bike,
    },
    SmallCar: {
      seats: [3, 4, 5, 6],
      image: SmallCar,
    },
    BigCar: {
      seats: [7, 8, 9, 10],
      // image: BigCar
      image: SmallCar,
    },
  };

  useEffect(() => {
    if (props.modal === true) {
      setError("");
    }
  }, [props.modal]);

  const showTimings = [
    "9:00",
    "11:30",
    "1:00",
    "3:00",
    "6:30",
    "8:00",
    "10:00",
  ];

  return (
    <>
      <Modal
        open={props.modal}
        closeIcon
        width={800}
        closable
        title={`Select the number of seats`}
        destroyOnClose
        afterClose={handleCloseModal}
        onOk={() => {
          if (!showTime || !seatCount || !date) {
            setError("*Please fill out all the details");
          } else {
            nav(`${seatCount}/seats`, {
              state: {
                showTime: showTime,
                date: date.toDate().toDateString(),
                details: props?.details,
                ratings: props?.ratings,
              },
            });
          }
        }}
        onCancel={handleCloseModal}
        okText={`Select Seats`}
        okType="danger"
      >
        <div className="seats-container-modal">
          <div className="seats-img-container">
            <img src={image} alt="popcorn" />
          </div>
          <div className="seat-count-div">
            {Array(10)
              .fill(1)
              .map((item, index) => {
                return (
                  <Button
                    onClick={() => {
                      setSeatCount(index + 1);
                      let img = "";
                      Object.keys(imageMapping).map((category) => {
                        if (
                          imageMapping[category]["seats"].includes(index + 1)
                        ) {
                          img = category;
                          //   console.log("image", img);
                          setImage(imageMapping[category]["image"]);
                        }
                      });
                    }}
                    type={seatCount === index + 1 ? "link" : "text"}
                  >
                    {index + 1}
                  </Button>
                );
              })}
          </div>
          <hr />
          <div className="seat-categories">
            {seatCategories.map((category) => {
              return (
                <div>
                  <p>{category?.title ?? "N/A"}</p>
                  <p>
                    <b>{category?.price ?? "N/A"}</b>
                  </p>
                  <p
                    style={{
                      color:
                        category?.status === "Available"
                          ? "#2ec492"
                          : "#ffa426",
                      fontSize: "12px",
                    }}
                  >
                    • {category?.status ?? "N/A"}
                  </p>
                </div>
              );
            })}
          </div>
          <hr />
          <div className="seat-show-timings-header">
            <p>
              <b>Show Timings : </b>{" "}
            </p>
            <DatePicker
              onChange={(e) => {
                console.log("datepick", e.toDate().toDateString());
                setDate(e);
              }}
              value={date}
            />
          </div>
          <p style={{ color: "#f62c36", fontSize: "14px" }}>
            {error != "" && error}
          </p>
          <div className="seat-show-timings">
            {showTimings.map((show) => {
              return (
                <button
                  onClick={() => {
                    setShowTime(show);
                    setError("");
                  }}
                  style={{
                    color: showTime === show ? "#1677ff" : "#4abd5d",
                  }}
                >
                  {show}
                </button>
              );
            })}
          </div>
        </div>
      </Modal>
    </>
  );
}
