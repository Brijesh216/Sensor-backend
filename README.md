# IoT Sensor Backend API (Node.js + MongoDB)

A **Node.js backend service** that ingests IoT temperature sensor readings, stores them in **MongoDB Atlas**, and exposes REST APIs to retrieve the **latest reading for each device**.

This project simulates a real-world IoT monitoring system where multiple sensors continuously send environmental data to a central server.

---

## 🚀 Features
- ✅ Accepts temperature readings from IoT devices
- ✅ Stores sensor data in MongoDB Atlas (Cloud Database)
- ✅ Retrieves the latest reading per device
- ✅ Automatic timestamp generation if missing
- ✅ Input validation (deviceId & temperature required)
- ✅ RESTful API architecture
- ✅ Tested using Postman

---

## 🧠 How It Works
1. IoT device sends temperature data to backend API.
2. Server validates the request.
3. Data stored in MongoDB Atlas.
4. Latest reading fetched using timestamp sorting.

---

## 🛠️ Tech Stack
- 🟢 **Node.js**
- 🚏 **Express.js**
- 🍃 **MongoDB Atlas**
- 🧩 **Mongoose ODM**
- 🔐 **dotenv (Environment Variables)**
- 🔄 **Nodemon (Auto Restart Server)**

---

## 📂 Project Structure

```bash
sensor-backend/
│
├── config/
│   └── db.js                # MongoDB connection
│
├── controllers/
│   └── sensorController.js  # Business logic
│
├── models/
│   └── Sensor.js            # Database schema
│
├── routes/
│   └── sensorRoutes.js      # API endpoints
│
├── server.js                # Entry point
├── package.json
├── .env                     # Environment variables (not pushed)
└── README.md
```
---

## ⚙️ Installation & Setup

```bash
# 📥 Clone the repository
git clone https://github.com/Brijesh216/Sensor-backend.git

# 📂 Go into project
cd sensor-backend

# 📦 Install dependencies
npm install
```
## 🔐 Environment Variables

- Create a .env file in the root directory and add:
```
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```
- (Use your MongoDB Atlas SRV connection string.)


## ▶️ Run the Server
```
npm run dev
```
- Server will start at:
 ``` 
http://localhost:5000
```
## 📡 API Endpoints

### 🔹 1. Ingest Sensor Reading

- POST /api/sensor/ingest

- Stores temperature data from a device.

- Request Body
```
{
  "deviceId": "sensor-01",
  "temperature": 31.5,
  "timestamp": 1705312440000
}
```

### 🔹 2. Get Latest Reading

- GET /api/sensor/:deviceId/latest

- Returns the most recent reading of a device.

- Example:
```
http://localhost:5000/api/sensor/sensor-01/latest
```
## 🧪 Testing Using Postman
#### Insert Data
```
  POST http://localhost:5000/api/sensor/ingest
  Content-Type: application/json
```
```
{
  "deviceId": "sensor-01",
  "temperature": 30.5
}
```
#### Fetch Latest Data
```
 GET http://localhost:5000/api/sensor/sensor-01/latest
```
## 🗄️Database Fields

- deviceId (String)

- temperature (Number)

- timestamp (Number)

- createdAt (Date)

 ## 🔍 Verification

You can verify data directly inside MongoDB Atlas → Browse Collections → sensordb → sensors

## 👨‍💻 Author 

**Brijesh Prasad** 

🌐 Connect with me: 
- 🔗 [LinkedIn](https://www.linkedin.com/in/brijesh216) 
- 💻 [GitHub](https://github.com/brijesh216)
