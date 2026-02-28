import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
  const [notes, setnotes] = useState([]);

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
const deepCopy = JSON.parse(JSON.stringify(oldArr));
deepCopy[0].name = "Ali";

console.log(oldArr);




useEffect(() => {
    console.log("Updated Notes:", notes);
  }, [notes]);

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-olive-700'>
      <button className='bg-white text-black font-extrabold px-3 py-3 rounded-2xl' onClick={addNote}>Add</button>
    </div>
  )
}

export default App
