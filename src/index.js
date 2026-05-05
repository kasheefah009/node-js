import express from "express"
import userRoutes from "./routes/user.routes.js"
const app = express()

app.use("/api", userRoutes)

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(3000, () =>{
    console.log("Server is running on port 3000")
})