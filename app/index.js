import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

const mainData = [
  {
    screenId: "screen123",
    rows: [
      {
        rowId: "A",
        seats: [
          { seatId: "A1", type: "regular", status: "available" },
          { seatId: "A2", type: "regular", status: "selected" },
          { seatId: "A3", type: "regular", status: "available" },
          { seatId: "A4", type: "regular", status: "available" },
          { seatId: "A5", type: "regular", status: "booked" },
          { seatId: "A6", type: "regular", status: "available" },
        ],
      },
      {
        rowId: "B",
        seats: [
          { seatId: "B1", type: "regular", status: "booked" },
          { seatId: "B2", type: "regular", status: "available" },
          { seatId: "B3", type: "regular", status: "available" },
          { seatId: "B4", type: "regular", status: "available" },
          { seatId: "B5", type: "regular", status: "booked" },
          { seatId: "B6", type: "regular", status: "available" },
        ],
      },
      {
        rowId: "C",
        seats: [
          { seatId: "C1", type: "regular", status: "available" },
          { seatId: "C2", type: "regular", status: "available" },
          { seatId: "C3", type: "regular", status: "available" },
          { seatId: "C4", type: "regular", status: "available" },
          { seatId: "C5", type: "regular", status: "booked" },
          { seatId: "C6", type: "regular", status: "available" },
        ],
      },
      {
        rowId: "D",
        seats: [
          { seatId: "D1", type: "regular", status: "available" },
          { seatId: "D2", type: "regular", status: "available" },
          { seatId: "D3", type: "regular", status: "available" },
          { seatId: "D4", type: "regular", status: "booked" },
          { seatId: "D5", type: "regular", status: "available" },
          { seatId: "D6", type: "regular", status: "available" },
        ],
      },
      {
        rowId: "E",
        seats: [
          { seatId: "E1", type: "regular", status: "available" },
          { seatId: "E2", type: "regular", status: "available" },
          { seatId: "E3", type: "regular", status: "booked" },
          { seatId: "E4", type: "regular", status: "available" },
          { seatId: "E5", type: "regular", status: "available" },
          { seatId: "E6", type: "regular", status: "available" },
        ],
      },
      {
        rowId: "F",
        seats: [
          { seatId: "F1", type: "regular", status: "available" },
          { seatId: "F2", type: "regular", status: "available" },
          { seatId: "F3", type: "regular", status: "available" },
          { seatId: "F4", type: "regular", status: "booked" },
          { seatId: "F5", type: "regular", status: "available" },
          { seatId: "F6", type: "regular", status: "available" },
        ],
      },
      {
        rowId: "G",
        seats: [
          { seatId: "G1", type: "regular", status: "available" },
          { seatId: "G2", type: "regular", status: "available" },
          { seatId: "G3", type: "regular", status: "available" },
          { seatId: "G4", type: "regular", status: "available" },
          { seatId: "G5", type: "regular", status: "booked" },
          { seatId: "G6", type: "regular", status: "available" },
        ],
      },
      {
        rowId: "H",
        seats: [
          { seatId: "H1", type: "regular", status: "available" },
          { seatId: "H2", type: "regular", status: "booked" },
          { seatId: "H3", type: "regular", status: "available" },
          { seatId: "H4", type: "regular", status: "available" },
          { seatId: "H5", type: "regular", status: "available" },
          { seatId: "H6", type: "regular", status: "available" },
        ],
      },
      {
        rowId: "I",
        seats: [
          { seatId: "I1", type: "regular", status: "available" },
          { seatId: "I2", type: "regular", status: "available" },
          { seatId: "I3", type: "regular", status: "booked" },
          { seatId: "I4", type: "regular", status: "available" },
          { seatId: "I5", type: "regular", status: "available" },
          { seatId: "I6", type: "regular", status: "available" },
        ],
      },
      {
        rowId: "J",
        seats: [
          { seatId: "J1", type: "regular", status: "available" },
          { seatId: "J2", type: "regular", status: "available" },
          { seatId: "J3", type: "regular", status: "available" },
          { seatId: "J4", type: "regular", status: "available" },
          { seatId: "J5", type: "regular", status: "booked" },
          { seatId: "J6", type: "regular", status: "available" },
        ],
      },
      {
        rowId: "K",
        seats: [
          { seatId: "K1", type: "regular", status: "available" },
          { seatId: "K2", type: "regular", status: "available" },
          { seatId: "K3", type: "regular", status: "available" },
          { seatId: "K4", type: "regular", status: "available" },
          { seatId: "K5", type: "regular", status: "booked" },
          { seatId: "K6", type: "regular", status: "available" },
        ],
      },
    ],
  },
  {
    screenId: "screen456",
    rows: [
      {
        rowId: "A",
        seats: [
          { seatId: "A1", type: "regular", status: "available" },
          { seatId: "A2", type: "regular", status: "selected" },
          { seatId: "A3", type: "regular", status: "available" },
          { seatId: "A4", type: "regular", status: "available" },
          { seatId: "A5", type: "regular", status: "booked" },
          { seatId: "A6", type: "regular", status: "available" },
        ],
      },
      {
        rowId: "B",
        seats: [
          { seatId: "B1", type: "regular", status: "booked" },
          { seatId: "B2", type: "regular", status: "available" },
          { seatId: "B3", type: "regular", status: "available" },
          { seatId: "B4", type: "regular", status: "available" },
          { seatId: "B5", type: "regular", status: "booked" },
          { seatId: "B6", type: "regular", status: "available" },
        ],
      },
      {
        rowId: "C",
        seats: [
          { seatId: "C1", type: "regular", status: "available" },
          { seatId: "C2", type: "regular", status: "available" },
          { seatId: "C3", type: "regular", status: "available" },
          { seatId: "C4", type: "regular", status: "available" },
          { seatId: "C5", type: "regular", status: "booked" },
          { seatId: "C6", type: "regular", status: "available" },
        ],
      },
      {
        rowId: "D",
        seats: [
          { seatId: "D1", type: "regular", status: "available" },
          { seatId: "D2", type: "regular", status: "available" },
          { seatId: "D3", type: "regular", status: "available" },
          { seatId: "D4", type: "regular", status: "booked" },
          { seatId: "D5", type: "regular", status: "available" },
          { seatId: "D6", type: "regular", status: "available" },
        ],
      },
      {
        rowId: "E",
        seats: [
          { seatId: "E1", type: "regular", status: "available" },
          { seatId: "E2", type: "regular", status: "available" },
          { seatId: "E3", type: "regular", status: "booked" },
          { seatId: "E4", type: "regular", status: "available" },
          { seatId: "E5", type: "regular", status: "available" },
          { seatId: "E6", type: "regular", status: "available" },
        ],
      },
      {
        rowId: "F",
        seats: [
          { seatId: "F1", type: "regular", status: "available" },
          { seatId: "F2", type: "regular", status: "available" },
          { seatId: "F3", type: "regular", status: "available" },
          { seatId: "F4", type: "regular", status: "booked" },
          { seatId: "F5", type: "regular", status: "available" },
          { seatId: "F6", type: "regular", status: "available" },
        ],
      },
      {
        rowId: "G",
        seats: [
          { seatId: "G1", type: "regular", status: "available" },
          { seatId: "G2", type: "regular", status: "available" },
          { seatId: "G3", type: "regular", status: "available" },
          { seatId: "G4", type: "regular", status: "available" },
          { seatId: "G5", type: "regular", status: "booked" },
          { seatId: "G6", type: "regular", status: "available" },
        ],
      },
      {
        rowId: "H",
        seats: [
          { seatId: "H1", type: "regular", status: "available" },
          { seatId: "H2", type: "regular", status: "booked" },
          { seatId: "H3", type: "regular", status: "available" },
          { seatId: "H4", type: "regular", status: "available" },
          { seatId: "H5", type: "regular", status: "available" },
          { seatId: "H6", type: "regular", status: "available" },
        ],
      },
      {
        rowId: "I",
        seats: [
          { seatId: "I1", type: "regular", status: "available" },
          { seatId: "I2", type: "regular", status: "available" },
          { seatId: "I3", type: "regular", status: "booked" },
          { seatId: "I4", type: "regular", status: "available" },
          { seatId: "I5", type: "regular", status: "available" },
          { seatId: "I6", type: "regular", status: "available" },
        ],
      },
      {
        rowId: "J",
        seats: [
          { seatId: "J1", type: "regular", status: "available" },
          { seatId: "J2", type: "regular", status: "available" },
          { seatId: "J3", type: "regular", status: "available" },
          { seatId: "J4", type: "regular", status: "available" },
          { seatId: "J5", type: "regular", status: "booked" },
          { seatId: "J6", type: "regular", status: "available" },
        ],
      },
    ],
  },
];

app.get("/api/seats/:screenId", (req, res) => {
  const { screenId } = req.params;

  const screenData = mainData.filter(
    (screen, i) => screen.screenId === screenId
  );

  if (screenData) {
    res.status(200).json(screenData);
  } else {
    res.status(404).json({ message: "Screen not found" });
  }
});

app.post("/api/book-seats", (req, res) => {
  const { screenId, selectedSeats } = req.body;

  let screenData = mainData.find((item, index) => item.screenId === screenId);

  if (screenData) {
    selectedSeats.forEach((selectedRow, index) => {
      let row = screenData.rows.find(
        (item) => item.rowId === selectedRow.rowId
      );

      if (row) {
        selectedRow.seats.forEach((selectedSeat, index) => {
          let seat = row.seats.find(
            (seat) => seat.seatId === selectedSeat.seatId
          );

          if (seat && seat.status === "available") {
            seat.status = "booked";
          }
        });
      }
    });

    res.status(200).json({ message: "success", mainData: mainData });
  } else {
    res.status(404).json({ message: "Screen not found" });
  }
});

app.listen(8080, () => {
  console.log("Server is started at" + "8000");
});
