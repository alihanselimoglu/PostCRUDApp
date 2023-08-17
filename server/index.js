import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import router from './router/router.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use('/posts', router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => console.log(err));

  console.log(`Server is running on port: ${PORT}`);
});
