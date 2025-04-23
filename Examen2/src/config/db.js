const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://kath:Anubis2025@proyectonosql.95wuv5y.mongodb.net/mecanica_precision_metales',{});
        console.log('MongoDB connected');
    } catch (errr) {
        console.log(errr.message);
        process.exit(1);
    }
};

module.exports = connectDB;