const mongoose = require('mongoose');
const cities = require('./cities');
const Campground = require('../models/campground');
const { places, descriptors } = require('./seedHelpers')


mongoose.connect('mongodb://localhost:27017/Places', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDb = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 30000) + 10000
        const camp = new Campground({
            author:'60872d32d737184474e9aaa5',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempore nisi reprehenderit repudiandae odio no.',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            images: [
                {
                  url: 'https://res.cloudinary.com/dyasrnfii/image/upload/v1650121786/PerfectPlaces/Goa_gjgnix.jpg',
                  filename: 'PerfectPlaces/Goa'
                },
                {
                  url: 'https://res.cloudinary.https://res.cloudinary.com/dyasrnfii/image/upload/v1650121786/PerfectPlaces/kedarnath_hsthpg.jpgcom/sahilcloud25/image/upload/v1619561100/PerfectPlaces/lsihrh2s8fg6xpbs7lvb.jpg',
                  filename: 'PerfectPlaces/kedarnath'
                }
              ]
        })
        await camp.save();
    }
}
seedDb().then(() => {
    mongoose.connection.close();
})
