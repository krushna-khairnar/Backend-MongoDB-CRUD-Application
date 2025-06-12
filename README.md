# 🍬 Sweet Dish Inventory – Backend CRUD API with MongoDB

## Description

This project is a backend RESTful API built with **Node.js**, **Express.js**, and **MongoDB**, designed to manage a collection of sweet dishes. It allows users to perform full **CRUD (Create, Read, Update, Delete)** operations through **HTTP requests** using tools like **Postman**.

The API manages an inventory of sweet dishes, with each item containing:
- `name`: Name of the sweet dish
- `description`: Brief description of the dish
- `price`: Cost per unit (in your chosen currency)
- `quantity`: Available stock quantity

---

## 🚀 Features

- **Create** a new sweet dish entry (`POST /products`)
- **Read** all sweet dishes or a specific one by ID (`GET /products`, `GET /products/:id`)
- **Update** details of an existing sweet dish (`PUT /products/:id`)
- **Delete** a sweet dish from the inventory (`DELETE /products/:id`)
- Uses **MongoDB Atlas** for cloud-hosted NoSQL database
- Follows **MVC architecture** for clean code organization

---

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework for building REST APIs
- **MongoDB** – NoSQL database for data storage
- **Mongoose** – ODM for MongoDB
- **Postman** – API testing and debugging tool
- **dotenv** – Manage environment variables securely

---

## 📁 Folder Structure

