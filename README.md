# BeyondChats – Full Stack Web Developer Intern Assignment

## Phase 1: Blog Scraping & CRUD APIs

This project is part of the assignment round for the **Full Stack Web Developer Intern** position at **BeyondChats**.
Phase 1 focuses on **web scraping, database storage, and RESTful CRUD API development** using Node.js and MongoDB.

---

## 🚀 Features (Phase 1)

- Scrapes the **5 oldest blogs** from BeyondChats
- Extracts:
  - Blog title
  - Blog content
  - Source URL
- Stores scraped articles in **MongoDB**
- Provides full **CRUD APIs** for articles:
  - Create article from URL
  - Fetch all articles
  - Fetch article by ID
  - Update article
  - Delete article

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Web Scraping:** Axios, Cheerio
- **API Testing:** Postman
- **Version Control:** Git & GitHub

---

## 📂 Project Structure

```
backend/
 ├── server.js
 ├── .env
 ├── src/
 │   ├── config/
 │   │   └── db.js
 │   ├── models/
 │   │   └── Article.js
 │   ├── controllers/
 │   │   └── articleController.js
 │   ├── routes/
 │   │   └── articleRoutes.js
 │   ├── utils/
 │   │   ├── scrapeSingleBlog.js
 │   │   └── scrapeBeyondChats.js
```

---

## ⚙️ Local Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/Sonalika003/beyondchats-assignment.git
cd beyondchats-assignment/backend
```

---

### 2️⃣ Install Dependencies
```bash
npm install
```

---

### 3️⃣ Environment Variables

Create a `.env` file inside `backend`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

### 4️⃣ Run Server
```bash
npm run dev
```

Server will start at:
```
http://localhost:5000
```

---

## 🔗 API Endpoints (Phase 1)

### ➤ Create Article (Scrape & Save)
```
POST /api/articles
```
**Body:**
```json
{
  "url": "https://beyondchats.com/blogs/live-chatbot/"
}
```

---

### ➤ Get All Articles
```
GET /api/articles
```

---

### ➤ Get Article by ID
```
GET /api/articles/:id
```

---

### ➤ Update Article
```
PUT /api/articles/:id
```
**Body (example):**
```json
{
  "updatedContent": "Updated article content",
  "references": ["https://example.com"]
}
```

---

### ➤ Delete Article
```
DELETE /api/articles/:id
```

---

## 🧪 API Testing

All APIs were tested using **Postman**:
- Correct status codes
- Valid JSON responses
- Error handling for invalid IDs

---

## 🧱 Architecture Diagram (Phase 1)

```
┌─────────────┐
│  Client /   │
│  Postman    │
└──────┬──────┘
       │ HTTP Requests
       ▼
┌─────────────┐
│ Express API │
│ (Routes &   │
│ Controllers)│
└──────┬──────┘
       │
       │ Calls
       ▼
┌─────────────┐
│ Scraping    │
│ Utilities   │
│ (Axios +    │
│ Cheerio)    │
└──────┬──────┘
       │
       │ Extracted Data
       ▼
┌─────────────┐
│ MongoDB     │
│ (Articles   │
│ Collection) │
└─────────────┘
```


## 👩‍💻 Author

**Sonalika Chaudhari**  
Full Stack Developer | Node.js | MongoDB | Web Scraping
