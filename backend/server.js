const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const userRoutes = require("./routes/userRoutes");
const nftRoutes = require("./routes/nfts");
const collectionRoutes = require('./routes/collectionRoutes');
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/uploads", express.static("uploads"));

console.log("chk ,....", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));



app.use("/api/users", userRoutes);
app.use("/api/nfts", nftRoutes);
app.use('/api/collection', collectionRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
