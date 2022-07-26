import mongoose from "mongoose";

const Conncetion = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@clone.z8bah.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log(error.message);
    }
}

export default Conncetion;