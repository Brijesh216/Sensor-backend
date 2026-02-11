const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const sensorRoutes = require("./routes/sensorRoutes");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/sensor", sensorRoutes);

app.get("/", (req, res) => {
  res.send("Sensor API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
