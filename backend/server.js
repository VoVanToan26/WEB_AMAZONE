/* eslint-disable no-unused-vars */
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";
import uploadRouter from "./routers/uploadRouter.js";

dotenv.config();
const app = express();

// use middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
//through by 2 setting or 2 middleware

mongoose
    .connect(
        process.env.MONGODB_URL ||
            "mongodb+srv://vantoan26:vantoan1@toan.hmtbaxg.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("MongoDB Connected!"))
    .catch((error) => console.log("MongoDB did not connect: ", error));

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use("/api/uploads", uploadRouter);
app.get("/api/config/paypal", (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});
// Add gg map
app.get("/api/config/google", (req, res) => {
    res.send(process.env.GOOGLE_API_KEY || "");
});
// put a slash upload file to sever folder (slash-GPC)
const __dirname = path.resolve(); // --> return current folder
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
// The build folder with static assets is the only output produced by Create React App.
app.use(express.static(path.join(__dirname, "frontend", "build")));

console.log(path.join(__dirname, "frontend", "build"));
console.log(path.join(__dirname, "frontend", "build", "index.html"));
// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
    const index = path.join(__dirname, "frontend", "build", "index.html");
    res.sendFile(index);
});
// app.get('/', (req, res) => {
//     res.send('Sever is ready');
// });
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});
// put a slash upload file to sever folder (slash-GPC)
const port = process.env.PORT || 5000;
console.log("port", port);
app.listen(port, () => {
    console.log(`Sever at http://localhost:${port}`);
});
