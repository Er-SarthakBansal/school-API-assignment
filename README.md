# 🏫 School Management API

## 📌 Description

This project provides REST APIs to:

* Add a new school to the database
* Retrieve a list of schools sorted by proximity to a user’s location

Distance is calculated using latitude and longitude, and results are sorted from nearest to farthest.

---

## 🚀 Tech Stack

* Node.js
* Express.js
* MySQL (Railway)

---

## 📂 Project Structure

```
src/
  ├── config/
  ├── controllers/
  ├── routes/
  ├── services/
  └── server.js
```

---

## 🔗 API Endpoints

### ➕ Add School

* **Method:** POST
* **Endpoint:** `/addSchool`

**Request Body (JSON):**

```
{
  "name": "ABC School",
  "address": "Delhi",
  "lat": 28.6139,
  "lng": 77.2090
}
```

**Response:**

```
{
  "message": "School added Successfully"
}
```

---

### 📍 List Schools

* **Method:** GET
* **Endpoint:** `/listSchools?lat=..&lng=..`

**Example:**

```
/listSchools?lat=28.6139&lng=77.2090
```

**Response:**

* Returns list of schools sorted by nearest distance

---

## ⚙️ Environment Variables

Create a `.env` file in the root:

```
MYSQL_HOST=your_host
MYSQL_USER=your_user
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=your_database
MYSQL_PORT=your_port
```

---

## 🛠️ How to Run Locally

```
git clone https://github.com/Er-SarthakBansal/school-API-assignment
cd <project-folder>
npm install
npm start
```

---

## 🌐 Live API

```
https://school-api-assignment-m938.onrender.com
```

---

## 🧪 Postman Collection

```
https://raw.githubusercontent.com/Er-SarthakBansal/school-API-assignment/main/postman_collection.json
```

---

## 📌 Notes

* Distance is calculated using coordinate-based formula
* Input validation is handled in controllers
* Clean separation of concerns using controller and service layers

---

## 👨‍💻 Author

Sarthak Bansal