import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect(
  "mongodb+srv://snehatingare42_db_user:SUN1ight@cluster0.eoawpkz.mongodb.net/?appName=Cluster0"
).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.listen(3100, () => {
  console.log('Server is running on port 3100');
});