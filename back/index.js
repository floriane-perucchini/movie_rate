import express from 'express';
import cors from 'cors';
import "dotenv/config";
import router from './router/router.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
}) 