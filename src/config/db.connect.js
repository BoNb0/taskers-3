import mongoose from "mongoose";

export const dbConnect = () => {
  const dbURI = "mongodb://localhost:27017/Taskers2";
  mongoose
    .connect(dbURI)
    .then(() => {
      console.log("connected to database");
    })
    .catch((error) => {
      console.log(error);
    });
};
