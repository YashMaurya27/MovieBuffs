import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./index.css";
import { Card } from "antd";
import { codeToTitle } from "../../function";
import Confirmation from "./Confirmation";

export default function Seats() {
  const params = useParams();
  const seatCount = params?.["count"];
  const location = useLocation();
  const state = location.state ?? "N/A";
  let rowLabel = "A";
  const [selected, setSelected] = useState([]);
  const [allowOne, setAlloweOne] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);

  const sections = {
    platinum: {
      seats: 30,
      price: 500,
    },
    gold: {
      seats: 120,
      price: 300,
    },
    silver: {
      seats: 30,
      price: 200,
    },
  };

  function getNextChar(char) {
    return String.fromCharCode(char.charCodeAt(0) + 1);
  }

  const seatClickHandler = (seatId, price) => {
    const clickedSeat = {
      id: seatId,
      price: price,
    };
    let selectedSeats = [clickedSeat];
    if (allowOne == false || selected.length === Number(seatCount)) {
      const selectedSeatStart = Number(clickedSeat["id"].split("-")[1]);
      let current = selectedSeatStart;
      for (let i = 2; i <= seatCount; i++) {
        current++;
        if (current <= 15) {
          selectedSeats.push({
            id: `${clickedSeat["id"].split("-")[0]}-${current}`,
            price: price,
          });
        } else {
          setAlloweOne(true);
        }
      }
      setSelected([...selectedSeats]);
    } else if (
      selected.length >= 1 &&
      selected.length < seatCount &&
      allowOne === true
    ) {
      const tempSelected = [
        ...selected,
        {
          id: seatId,
          price: price,
        },
      ];
      setSelected([...tempSelected]);
      if (tempSelected === seatCount) {
        setAlloweOne(false);
      }
    }
  };

  function renderSeats(totalCount, price) {
    let seatNum = 1;
    let rows = totalCount / 15;
    const seats = [];
    for (let i = 0; i < rows; i++) {
      seatNum = 1;
      const row = [];
      row.push(<p key={`label-${i}`}>{rowLabel}</p>);
      for (let j = 0; j < 15; j++) {
        const seatId = `${rowLabel}-${seatNum}`;
        row.push(
          <button
            key={seatId}
            className="seat-div"
            id={seatId}
            style={returnBtnStyle(rowLabel, seatNum)}
            onClick={() => seatClickHandler(seatId, price)}
            onMouseOver={() => setIsHovered(seatId)}
            onMouseOut={() => setIsHovered(undefined)}
          >
            {seatNum}
          </button>
        );
        seatNum++;
      }
      seats.push(
        <div key={`row-${i}`} className="seats-row">
          {row}
        </div>
      );
      rowLabel = getNextChar(rowLabel);
    }
    return seats;
  }

  const returnBtnStyle = (rowLabel, seatNum) => {
    const selectedSeatIDs = selected.map((item) => {
      return item["id"];
    });
    return {
      backgroundColor:
        selectedSeatIDs.includes(`${rowLabel}-${seatNum}`) ||
        isHovered === `${rowLabel}-${seatNum}`
          ? "#1ea83c"
          : "white",
      color:
        selectedSeatIDs.includes(`${rowLabel}-${seatNum}`) ||
        isHovered === `${rowLabel}-${seatNum}`
          ? "white"
          : "#1ea83c",
      ":hover": {
        backgroundColor: "#1ea83c",
        color: "white",
      },
    };
  };

  return (
    <>
      <div className="seats-header">
        <div className="seats-header-left">
          <p className="seats-title">
            {state?.details?.titleText?.text ?? "N/A"}
          </p>
          <p className="seats-description">
            {state?.date} | {state?.showTime} p.m
          </p>
        </div>
        <div className="seats-header-right">
          <p>{seatCount} tickets</p>
          <button
            disabled={selected.length === 0}
            onClick={() => {
              if (selected.length > 0) {
                setPaymentModal(true);
              }
            }}
          >
            Book Tickets
          </button>
        </div>
      </div>
      <hr />
      <section className="seats-section">
        <div className="seats-container">
          {Object.keys(sections).map((section) => {
            return (
              <>
                <p className="section-heading">
                  {codeToTitle(section)} - {sections[section]["price"]}
                </p>
                <hr />
                <div className="section-seats">
                  {renderSeats(
                    sections[section]["seats"],
                    sections[section]["price"]
                  )}
                </div>
              </>
            );
          })}
        </div>
      </section>
      {paymentModal && (
        <Confirmation
          open={paymentModal}
          setOpen={setPaymentModal}
          selected={selected}
          sections={sections}
        />
      )}
    </>
  );
}
