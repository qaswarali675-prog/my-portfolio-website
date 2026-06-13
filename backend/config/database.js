const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 10000,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('=== MongoDB Connection Error ===');
    console.error('Error Name:', error.name);
    console.error('Error Message:', error.message);
    console.error('Full Error Object:', JSON.stringify(error, null, 2));

    // Fallback to local MongoDB if Atlas fails
    if (process.env.MONGO_URI.includes('mongodb+srv://') || process.env.MONGO_URI.includes('mongodb.net')) {
      console.log('Attempting fallback to local MongoDB...');
      try {
        const localConn = await mongoose.connect('mongodb://127.0.0.1:27017/myapp');
        console.log(`Local MongoDB Connected: ${localConn.connection.host}`);
      } catch (localError) {
        console.error('Local MongoDB connection also failed:', localError.message);
        console.error('Full Local Error:', JSON.stringify(localError, null, 2));
      }
    }

    // Don't crash the app - allow it to continue without database
    console.warn('Application running without database connection');
  }
};

module.exports = connectDB;
