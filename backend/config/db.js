const mongoose = require("mongoose");

const connectionDataBase = async () => {
  try {
    const myConnection = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `MongoDB Connected: ${myConnection.connection.host}`.underline.bgGreen
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectionDataBase;
