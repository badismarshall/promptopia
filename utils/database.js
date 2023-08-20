import mongoose from "mongoose";

let isCOnnected = false // track the connection 

export const connectTOdb = async () => {
    mongoose.set('strictQuery', true)

    if (isCOnnected) {
        console.log("MongoB is already connected")
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isCOnnected = true
        console.log("MonogoDB connected")
    } catch (error) {
        console.log(error)
    }
}