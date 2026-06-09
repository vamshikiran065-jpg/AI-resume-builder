# AI Resume Builder

AI Resume Builder is a full-stack web application that helps users create professional resumes with AI-powered assistance. Users can build, customize, preview, and download resumes through an intuitive interface.

## Features

* AI-powered resume content generation
* Multiple resume templates
* Resume preview functionality
* Responsive user interface
* Resume customization
* Download and export options
* REST API backend
* MongoDB database integration

## Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* HTML5
* CSS3

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Project Structure

```text
AI-resume-builder/
│
├── client/
│   ├── public/
│   │   └── templates/
│   ├── src/
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── constants/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── app.js
│   │
│   ├── test-scripts/
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/vamshikiran065-jpg/AI-resume-builder.git
cd AI-resume-builder
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

### Backend Setup

```bash
cd server
npm install
npm start
```

or

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

## Environment Variables

Create a `.env` file inside the server folder:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_api_key
```

## Available Scripts

### Frontend

```bash
npm run dev
npm run build
npm run preview
```

### Backend

```bash
npm start
npm run dev
```

## Future Improvements

* User authentication
* Resume scoring
* Cover letter generation
* More resume templates
* PDF export enhancements
* ATS compatibility checker

## Author

Vamshi Kiran

## License

This project is licensed under the MIT License.
