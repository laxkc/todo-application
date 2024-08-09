import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "APi is working.. Go to /api/v1" });
});

app.get("/api/v1", (req, res) => {
  res.json({
    todo: [
      { id: 1, title: "Learn React" },
      { id: 2, title: "Learn Node" },
      { id: 3, title: "Learn Express" },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
