import express from "express";
import { config } from "dotenv";
import logger from "morgan";
import dogRoutes from "./routes/dogRoutes.js";
import breedRoutes from "./routes/breedRoutes.js";
import connectDB from "./connectDB.js";
import cors from "cors";


config();
const app = express();
const port = process.env.PORT || 3000;

// Middlewares 

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(cors());


// Routes

app.use("/api/dog", dogRoutes);
app.use("/api/breed", breedRoutes);


// Error Middlewares

app.use("/api", (err, req, res, next) => {
  res.status(err.statusCode).json({ error: err.message });
})


const startApp = async () => {
  await connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("Server listening on " + app.get("port"));
    })
  })
  .catch((error) => {
    console.log(error.message);
  })
}

startApp();
