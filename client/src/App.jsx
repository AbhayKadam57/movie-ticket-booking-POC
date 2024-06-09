import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

const App = () => {
  const [seatsData, setSeatsData] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [screenId, setScreenId] = useState("screen123");
  const [showDropDown, setDropDown] = useState(false);

  useEffect(() => {
    fetchSeatsData();
  }, [screenId]);

  const fetchSeatsData = () => {
    axios
      .get(`api/seats/${screenId}`)
      .then((response) => {
        setSeatsData(response.data);
      })
      .catch((error) => console.error("Error fetching seats data:", error));
  };

  const handleSelection = (rowId, seat) => {
    let updatedSelectedSeats = [...selectedSeats];

    let rowIndex = updatedSelectedSeats.findIndex(
      (item) => item.rowId === rowId
    );

    if (rowIndex !== -1) {
      let seatIndex = updatedSelectedSeats[rowIndex].seats.findIndex(
        (item) => item.seatId === seat.seatId
      );

      if (seatIndex !== -1) {
        updatedSelectedSeats[rowIndex].seats.splice(seatIndex, 1);

        if (updatedSelectedSeats[rowIndex].seats.length === 0) {
          updatedSelectedSeats.splice(rowIndex, 1);
        }
      } else {
        updatedSelectedSeats[rowIndex].seats.push(seat);
      }
    } else {
      updatedSelectedSeats.push({ rowId: rowId, seats: [seat] });
    }

    setSelectedSeats(updatedSelectedSeats);
    console.log(updatedSelectedSeats);
  };

  const handleScreenIdChange = (newScreenId) => {
    setScreenId(newScreenId);
    setDropDown(false);
  };

  const getSeatStatus = (rowId, seat) => {
    if (seat.status === "booked") {
      return "booked";
    }

    const row = selectedSeats.find((item) => item.rowId === rowId);

    if (row) {
      const isSelected = row.seats.some((s) => s.seatId === seat.seatId);
      return isSelected ? "selected" : "available";
    } else {
      return seat.status;
    }
  };

  const handleBooking = async () => {
    try {
      const result = await axios.post("api/book-seats", {
        screenId: screenId,
        selectedSeats: selectedSeats,
      });

      console.log(result);

      if (result.data.message === "success") {
        console.log("seats are booked");

        fetchSeatsData();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <div
          className="selectbox"
          onClick={(e) => {
            e.stopPropagation();
            setDropDown(!showDropDown);
          }}
        >
          <div className="box">
            <span>{screenId}</span>
            <img
              src="/images/down-chevron-svgrepo-com.svg"
              style={{ width: "15px" }}
            />
          </div>
          <div
            className={`options`}
            style={{ display: `${showDropDown ? "flex" : "none"}` }}
          >
            <div
              onClick={() => handleScreenIdChange("screen123")}
              className="option"
            >
              Screen123
            </div>
            <div
              onClick={() => handleScreenIdChange("screen456")}
              className="option"
            >
              Screen456
            </div>
          </div>
        </div>

        <div className="movie_screen"></div>

        <div className="seat_arrangement">
          {seatsData &&
            seatsData[0]?.rows.map((seatRow) => (
              <div key={seatRow.rowId} className="row">
                {seatRow.seats.map((seat) => (
                  <div
                    key={seat.seatId}
                    className={`seat ${getSeatStatus(seatRow.rowId, seat)}`}
                    onClick={() => handleSelection(seatRow.rowId, seat)}
                  >
                    {seat.seatId}
                  </div>
                ))}
              </div>
            ))}
        </div>

        <button onClick={() => handleBooking()}>Booked seats</button>
      </div>
    </div>
  );
};

export default App;
