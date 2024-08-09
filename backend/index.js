import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "APi is working.. Go to /api/v1" });
});

app.get("/api/v1/todos", (req, res) => {
  res.json({
    todo: [
      {
        id: 1,
        title: "Learn React",
        description: "Learn React with the help of the documentation",
      },
      { id: 2, title: "Learn Node" },
      { id: 3, title: "Learn Express" },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
