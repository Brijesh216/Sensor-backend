const Sensor = require("../models/Sensor");

// POST /api/sensor/ingest
const ingestSensor = async (req, res) => {
  try {
    const { deviceId, temperature, timestamp } = req.body;

    if (!deviceId || !temperature) {
      return res.status(400).json({
        message: "deviceId and temperature are required",
      });
    }

    const newSensor = new Sensor({
      deviceId,
      temperature,
      timestamp: timestamp || Date.now(),
    });

    await newSensor.save();

    res.status(201).json({
      message: "Sensor data saved successfully",
      data: newSensor,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /api/sensor/:deviceId/latest
const getLatestReading = async (req, res) => {
  try {
    const { deviceId } = req.params;

    const latest = await Sensor.findOne({ deviceId })
      .sort({ timestamp: -1 });

    if (!latest) {
      return res.status(404).json({
        message: "No readings found for this device",
      });
    }

    res.json(latest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  ingestSensor,
  getLatestReading,
};
