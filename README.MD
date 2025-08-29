# VIT Full Stack Question – REST API

This project implements the **/bfhl** REST API as per the Full Stack Question Paper.
The API takes an array as input and returns structured data containing numbers, alphabets, special characters, and more.

---

## Tech Stack

* **Node.js** (v18+ recommended)
* **Express.js**

---

## Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/Krishnanshu-Khanna/vit-fullstack.git
cd vit-fullstack
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
node server.js
```

API will start on:

```
http://localhost:3000/bfhl
```

---

## Example Request

**POST** `/bfhl`

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

---

## Example Response

```json
{
  "is_success": true,
  "user_id": "krishnanshu_khanna_12102004",
  "email": "krishnanshu.khanna2022@vitstudent.ac.in",
  "roll_number": "22BCT0046",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

---

## Deployment

You can host this API on any platform supporting Node.js:

### Vercel Deployment

1. Add a `vercel.json` file:

   ```json
   {
     "version": 2,
     "builds": [{ "src": "index.js", "use": "@vercel/node" }],
     "routes": [{ "src": "/(.*)", "dest": "index.js" }]
   }
   ```

2. Install Vercel CLI:

   ```bash
   npm install -g vercel
   ```

3. Deploy:

   ```bash
   vercel
   ```

After deployment, your API will be accessible at:

```
https://vit-fullstack.onrender.com/
```

---

## Author

* **Name:** Krishnanshu Khanna
* **Roll No:** 22BCT0046
* **Email:** [krishnanshu.khanna2022@vitstudent.ac.in](mailto:krishnanshu.khanna2022@vitstudent.ac.in)

---

