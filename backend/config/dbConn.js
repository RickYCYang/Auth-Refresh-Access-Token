const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('MONGODB_URI', process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
