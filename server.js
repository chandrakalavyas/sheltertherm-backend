const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "ShelterTherm API",
    status: "running",
    message: "Backend is working successfully!"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "ShelterTherm backend is healthy"
  });
});

app.get("/api/dashboard", (req, res) => {
  res.json({
    indoorTemperature: 18.4,
    outdoorTemperature: -16.4,
    solarGain: 42.8,
    heatLoss: 38.2,
    thermalStorage: 14.6,
    thermalAutonomy: 94.2
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`ShelterTherm API running on port ${PORT}`);
});
