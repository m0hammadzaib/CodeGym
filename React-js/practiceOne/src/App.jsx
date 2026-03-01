import React from 'react'
import { useState, useEffect } from 'react'

const noteArr = [
    { id: 1, title: "First" },
  { id: 2, title: "Second" },
  { id: 3, title: "Third" },
  { id: 3, title: "One bro" },
  { id: 3, title: "three bro" },
  { id: 3, title: "go bro and not no" },
]

const App = () => {
  const [notes, setnotes] = useState([
  { id: 1, title: "First" },
  { id: 2, title: "Second" },
  { id: 3, title: "Third" },
   { id: 3, title: "One bro" },
  { id: 3, title: "three bro" },
  { id: 3, title: "go bro and not no" },
]
);

  const addNote =()=>{
  const newNote={
    id:Date.now(),
    title:"newOneZaib",
    content:"this is new notes adding in existing array bro just to check the C function..."
  }
  // setnotes([...notes,newNote]); //using spread operator  & note will show at the end of the array list
  // setNotes(prev => [newNote, ...prev]); // using spread operator also but note will show at the top of the array list 
  // setnotes(prev => prev.concat(newNote)); //using concatn method(words same as spread operator)

}

const oldArr = [
  { name: "Zaib" }
];

// const newArr = [...oldArr]; shallow copy 
// newArr[0].name = "rahul";
// console.log(oldArr);
// const deepCopy = JSON.parse(JSON.stringify(oldArr));
// deepCopy[0].name = "Ali";

console.log(oldArr);




useEffect(() => {
    console.log("Updated Notes:", notes);
  }, [notes]);

  const delteNotes=(id)=>{
    // setnotes(prev => prev.filter(note => note.id !== id)); filter method
  }
  const removeNote =(id)=>{
 setnotes(prev=>{
   const newNote =[...prev];
   const index = newNote.findIndex(n=>n.id ===id);
   if(index !=-1){
    newNote.splice(index,1)
   }
   return newNote;
 }
 )};


  return (
    <div className='flex justify-center items-center w-screen h-screen bg-olive-700'>
      <button className='bg-white text-black font-extrabold px-3 py-3 rounded-2xl' onClick={addNote}>Add</button>
    {notes.map(n=>(
      <div className='flex flex-col justify-center items-center'>
      <div className='font-bold bg-red-600 p-5' key={n.id}>{n.title}
      <button  className='cursor-pointer bg-black text-white p-2 rounded-2xl'onClick={()=>removeNote(n.id)}>Delete</button>
      </div>
      </div>

    ))}
    </div>

  )
}

export default App
