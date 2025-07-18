const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

// const sample = array => array[Math.floor(Math.random() * array.length)];


// const seedDB = async () => {
//     await Campground.deleteMany({});
//     for (let i = 0; i < 50; i++) {
//         const random1000 = Math.floor(Math.random() * 1000);
//         const camp = new Campground({
//             location: `${cities[random1000].city}, ${cities[random1000].state}`,
//             title: `${sample(descriptors)} ${sample(places)}`
//         })
//         await camp.save();
//     }
// }

// seedDB().then(() => {
//     mongoose.connection.close();
// })
const sample = function (array) {
    return array[Math.floor(Math.random() * array.length)];
}
const addSeedsToDB = async (req, res) => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const randomNum = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 50) + 10;
        const camp = new Campground({
            location: `${cities[randomNum].city}, ${cities[randomNum].state}`,
            title: `${sample(places)} ${sample(descriptors)}`,
            price: price,
            geometry: { type: 'Point', coordinates: [ cities[randomNum].longitude, cities[randomNum].latitude ] } ,
            description: "Nestled deep within the whispering pines, this tranquil campground offers breathtaking views of the surrounding peaks and a clear night sky for stargazing.",
            author: '687281a35ce0ec0ca8ab07d5',
            images: [{
                url: 'https://res.cloudinary.com/dro6fbzuk/image/upload/v1752576154/bg2vxaltl3vj8lzedm49.jpg',
                filename: 'bg2vxaltl3vj8lzedm49'
            },
            {
                url: 'https://res.cloudinary.com/dro6fbzuk/image/upload/v1752576155/eawnzll3tzhkiffdlbdc.jpg',
                filename: 'eawnzll3tzhkiffdlbdc'
            }
            ]
        })
        await camp.save()
    }
}
addSeedsToDB().then(() => {
    mongoose.connection.close();
})