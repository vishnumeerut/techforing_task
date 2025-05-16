const express = require("express");

const  app = express();
const cors = require("cors")
const bodyParser = require("body-parser");
const { PORT } = require("./config/server_config")
const apiRouter = require("./routes/api_router");
const { mongoDbConnect } = require("./config/db_config");





app.use(bodyParser.json()) // for validating the json data 
app.use(bodyParser.text()) // for validating the text data
app.use(cors())
app.use(bodyParser.urlencoded({extended:true})) // for validating the data incoming through body

app.use("/api", apiRouter);

app.listen(PORT, async (req, res) => {
    console.log(`Server started At:-> ${PORT} 😍` )
    mongoDbConnect("mongodb://127.0.0.1:27017/techforing")
    .then(() => {
    console.log("MongoDB Connected...")
})
.catch((error) => console.log("MongoDb connection Error:-> 😒", error))
})