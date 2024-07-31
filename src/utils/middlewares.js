import { validationResult } from "express-validator";
import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";

/*
export const sessionStore = session({
  secret: "BiNoNb0",
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 60000 * 60,
  },
  store: MongoStore.create({
    client: mongoose.connection.getClient(),
  }),
});
*/
