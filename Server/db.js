const mongoose = require("mongoose");
mongoURL =
  "mongodb+srv://goFood:%40Sachin21%23@cluster0.u6grdx1.mongodb.net/gofoodmern";

async function connectDB(err, result) {
  try {
    await mongoose.connect(mongoURL, {});
    console.log("database connected successfully at 27017");

    const fetched_data = await mongoose.connection.db.collection("food_item"); //db collection name
    const item_data = await fetched_data.find({}).toArray();
    //  console.log("data is coming ", food_data);
    global.food_items = item_data;
    // console.log(global.food_items)

    const Category_data = await mongoose.connection.db.collection("food_category" ); //db collection name
    const cat_data = await Category_data.find({}).toArray();
    //console.log("data of category", cat_data)
    global.foot_categories = cat_data;
    // console.log(cat_data)
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
module.exports = connectDB;
