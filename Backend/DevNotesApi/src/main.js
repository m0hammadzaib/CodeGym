import dotenv from 'dotenv';
dotenv.config();

import prisma from './db.js';
import express from 'express';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/find', async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/notes', async (req,res)=>{
  const {title,content,userId} = req.body;
try{
  const note = await prisma.note.create({
    data:{
      title,
      content,
      userId
    }
  })
  res.status(200).json({
    message:"Notes uploaded successfully"
  })
}catch{
  res.status(500).json({ error: error.message });
}
})

app.put('/notes/:id', async (req,res)=>{
  const id = parseInt(req.params.id);
  const {title,content} = req.body;

  try{
    updateNote = await prisma.note.update({
      where:{id},
      data:{
        title,
        content
      }
    });
    res.json(updateNote)
  }catch{
    res.status(500).json({ error: error.message });
  }
})

app.listen(PORT, () => {
  console.log(`App is running on Port : ${PORT}`);
});
