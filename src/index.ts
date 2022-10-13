import "reflect-metadata";
import { AppDataSource } from "./data-source";
import app from "./app";
import { config } from "dotenv";
config();
AppDataSource.initialize()
  .then(() => {
    console.log("connected to DB.");
    // Running Server
    app.listen(process.env.EXPRESS_PORT, () =>
      console.log(`Server listening on port ${process.env.EXPRESS_PORT}!`)
    );
  })
  .catch((error) => console.log(error));
