const { v4: uuidv4 } = require("uuid");
module.exports = [
  {
    id: uuidv4(),
    name: "Stage 1",
    description: "0-3 months",
    minAge: 0,
    maxAge: 3,
  },
  {
    id: uuidv4(),
    name: "Stage 2",
    description: "3-6 months",
    minAge: 3,
    maxAge: 6,
  },
  {
    id: uuidv4(),
    name: "Stage 3",
    description: "6-9 months",
    minAge: 6,
    maxAge: 9,
  },
  {
    id: uuidv4(),
    name: "Stage 4",
    description: "9-12 months",
    minAge: 9,
    maxAge: 12,
  },
  {
    id: uuidv4(),
    name: "Stage 5",
    description: "12-36 months",
    minAge: 12,
    maxAge: 36,
  },
  {
    id: uuidv4(),
    name: "Stage 6",
    description: "36-48 months",
    minAge: 36,
    maxAge: 48,
  },
  {
    id: uuidv4(),
    name: "Stage 7",
    description: "48-60 months",
    minAge: 48,
    maxAge: 60,
  },
  {
    id: uuidv4(),
    name: "Stage 8",
    description: "60-72 months",
    minAge: 60,
    maxAge: 72,
  },
];
