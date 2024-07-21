const mongoose = require("mongoose");
mongoURL =
  "mongodb+srv://goFood:%40Sachin21%23@cluster0.u6grdx1.mongodb.net/gofoodmern";





async function connectDB(err, result) {
  try {
    await mongoose.connect(mongoURL, {
     
    });
    console.log("database connected successfully at 27017");

    const fetched_data =  mongoose.connection.db.collection("food_item");

    const food_data = await fetched_data .find({}).toArray();
    //  console.log("data is coming ", food_data);

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
module.exports = connectDB;
