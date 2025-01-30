import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const satelliteCache: { [key: string]: any } = {};

app.get("/api/satellites/:id", async (req, res) => {
  const { id } = req.params;

  // Check cache
  if (satelliteCache[id]) {
    return res.json(satelliteCache[id]);
  }

  try {
    const response = await axios.get(
      `https://api.n2yo.com/rest/v1/satellite/positions/${id}/0/0/0/1/?apiKey=YOUR_API_KEY`
    );
    const data = response.data;

    satelliteCache[id] = data; // Cache data
    res.json(data);
  } catch (error) {
    console.error("Error fetching satellite data:", error);
    res.status(500).send("Failed to fetch satellite data");
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
