import express from "express";
import cors from "cors";
import path from "path";
import { config } from "dotenv";
import { homeRouter } from "./routes/home";

const app = express();

config({ path: path.join(__dirname, "..", ".env") });

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/", homeRouter);

// 404
app.use("*", (req, res) => {
  res.status(404).json({ error: "404: Not Found" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
