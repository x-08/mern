const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
// const userRouter = require("./routes/auth.routes");
const { AppError } = require("./middleware/AppError");
const corsOptions = require("./config/corsOptions");

const app = express();

//DB connection
//connectDB();

//Middlewares
app.use(cors(corsOptions));
app.use(morgan("dev")); //logging
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use(`/api/`, router);

//server static files in production
if (NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.all("*", (req, res, next) => {
    res.sendFile(
      path.resolve(__dirname, "../client/dist/index.html")
    );
  });
}

//error handler middlemare.
app.use(AppError);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is listening on port: ${PORT}`);
});
