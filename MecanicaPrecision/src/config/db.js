const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mecanica_precision_metales',{});
        console.log('MongoDB connected');
    } catch (errr) {
        console.log(errr.message);
        process.exit(1);
    }
};

module.exports = connectDB;