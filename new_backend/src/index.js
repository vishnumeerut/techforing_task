const express = require("express");

const  app = express();
const cors = require("cors")
const cookieParser = require("cookie-parser");
const { PORT } = require("./config/server_config");
const apiRouter = require("./routes/api_router");
const { mongoDbConnect } = require("./config/db_config");


// CORS options
const corsOptions = {
  origin: "http://localhost:5173", // Allow this origin only
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  credentials: true, // Allow cookies and auth headers
};

app.use(cookieParser())
app.use(express.json()); // for validating the json data 
app.use(express.text()) // for validating the text data
app.use(cors(corsOptions))
app.use(express.urlencoded({extended:true})) // for validating the data incoming through body

app.use("/api", apiRouter);

app.listen(PORT, async (req, res) => {
    console.log(`Server started At:-> ${PORT} 😍` )
    mongoDbConnect("mongodb://127.0.0.1:27017/techforing")
    .then(() => {
    console.log("MongoDB Connected...")
})
.catch((error) => console.log("MongoDb connection Error:-> 😒", error))
})