import chalk from "chalk";
import mongoose from "mongoose";

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING);
    console.log(
      chalk.bgBlue(
        `MongoDB database Connected Successfully ${mongoose.connection.host}!!`
      )
    );
  } catch (error) {
    console.log(chalk.bgRed(`Database Connection failed because of ${error}`));
  }
};

export default db;
