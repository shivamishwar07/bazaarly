import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path: '../env'
})

connectDB()











// const app = express();
// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.error("Error connecting to MongoDB:", error);
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })
//     } catch (err) {
//         console.error("Failed to connect to MongoDB", err);
//         throw err;
//     }

//     const schema = new mongoose.Schema({
//         name: String,
//         age: Number
//     });
// })()