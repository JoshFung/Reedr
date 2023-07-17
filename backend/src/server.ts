import express from "express";
import cors from "cors";
import path from "path";
import { config } from "dotenv";

const app = express();

config({ path: path.join(__dirname, "..", ".env") });

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
