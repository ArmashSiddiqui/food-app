import mongoose from "mongoose";

export const connectDB = async () => {

    await mongoose.connect('{ mongodb+srv://armashsiddiqui94:<db_password>@cluster0.7nvzv.mongodb.net/}/food-del').then(() => console.log("DB Connected"));

}
