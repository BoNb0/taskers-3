import express from "express";
import "./strategies/local-strategy.js";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import passport from "passport";
import routes from "./routes/indexRoutes.js";
import { dbConnect } from "./config/db.connect.js";
import {} from "./utils/middlewares.js";

//  connect to database
dbConnect();

const app = express();

const PORT = process.env.PORT || 4000;

// view engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

// middleware & static files
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
//app.use(sessionStore);

app.use(
  session({
    secret: "angelica",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000 * 60,
    },
    store: MongoStore.create({
      client: mongoose.connection.getClient(),
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
