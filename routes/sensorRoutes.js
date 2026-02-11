const express = require("express");
const router = express.Router();

const sensorController = require("../controllers/sensorController");

router.post("/ingest", sensorController.ingestSensor);
router.get("/:deviceId/latest", sensorController.getLatestReading);

module.exports = router;
