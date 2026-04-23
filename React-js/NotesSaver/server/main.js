import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/notes", async (req, res) => {
  const notes = await prisma.note.findMany({
    orderBy: { createdAt: "desc" }
  });
  res.json(notes);
});

app.post('/notes', async (req,res)=>{
    const {content} = req.body;

    const newNote = await prisma.note.create({
        data:{content: req.body.content}
    })
    res.json(newNote);
});

app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});
