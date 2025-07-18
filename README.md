# 🏕️ YelpCamp

YelpCamp is a full-stack web application where users can explore, create, and review campgrounds from around the world. It features user authentication, image uploads, map-based location search, and a clean UI.

---

## 🚀 Features

- 🔐 User authentication (Register/Login/Logout)
- 🗺️ Campground geolocation using **Mapbox**
- 📸 Upload images via **Cloudinary**
- 📝 Leave reviews and ratings on campgrounds
- ✏️ CRUD operations for campgrounds and reviews
- 🔒 Authorization checks for editing/deleting
- 🧼 Input validation & security (Helmet, sanitize, etc.)
- 🎨 Clean and responsive UI using **Bootstrap**

---

## 🛠️ Tech Stack

| Frontend        | Backend             | Database     | Other Services    |
|----------------|---------------------|--------------|-------------------|
| EJS, Bootstrap | Node.js, Express.js | MongoDB      | Cloudinary, Mapbox |
| Passport.js    | Mongoose            |              |                   |

---

## 📷 Screenshots

_Add screenshots or a short demo GIF here_

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/skullcruiser/YelpCamp.git
cd YelpCamp

# Install dependencies
npm install

# Set up environment variables
touch .env
# Add the following to .env:
# CLOUDINARY_CLOUD_NAME=your_name
# CLOUDINARY_API_KEY=your_key
# CLOUDINARY_API_SECRET=your_secret
# MAPBOX_TOKEN=your_token
# DB_URL=mongodb://localhost:27017/yelp-camp
# SECRET=your_session_secret

# Run the app
node app.js
