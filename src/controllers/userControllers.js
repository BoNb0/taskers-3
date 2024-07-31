import { matchedData, validationResult } from "express-validator";
import { hashPassword } from "../utils/helpers.js";
import { User } from "../models/userModels.js";

export const createUserHandler = async (req, res, next) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(400).send(result.array());
  }
  const data = matchedData(req);

  console.log(data);
  data.password = hashPassword(data.password);
  const newUser = new User(data);

  try {
    const savedUser = await newUser.save();
    console.log(savedUser);
    next();
  } catch (error) {
    res.sendStatus(400);
    console.log(error);
  }
};
