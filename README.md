

# Books Collection API

This is a RESTful API for managing a books collection. It allows users to perform CRUD operations on books, with proper data validation, database integration (MongoDB), and additional custom endpoints.

## Features

- Fetch all books
- Add a new book
- Update a book by ID
- Delete a book by ID
- Get random book recommendations
- Mark a book as a favorite

## Technologies Used

- **Node.js**: Backend runtime
- **Express**: Web framework
- **MongoDB**: Database for data persistence
- **Mongoose**: MongoDB object modeling tool
- **dotenv**: Environment variable management

---

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running locally or accessible via a cloud provider (e.g., MongoDB Atlas)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/books-collection-api.git
   cd books-collection-api
2. Install Dependencies
   ```bash
   npm install
3. create a MongoDB Atlass account if you have not.
4. Create a cluster, create a database user with a username and password.
5. create .env file and save the environement variable like
    DB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>
    PORT=5000
6. start the application with:
  ```bash
    npm start


