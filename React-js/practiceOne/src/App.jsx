import React from 'react'
import { useState ,useEffect } from 'react'

const App = () => {

  const [count, setcount] = useState(0);
  count = 5;

  console.log(count);

// const [notes, setNotes] = useState({});

//  const newNote= {
//   id: 3,
//   title: "New",
//   content: "Hello"
// };

//  const addNote = (newNote) => {
//   setNotes(prevNotes => ({
//     ...prevNotes,
//     [newNote.id]: newNote
//   }));
// };


  return (
    <div>
      
    </div>
    // <div className='bg-olive-900 w-screen h-screen flex justify-center items-center'>
    //   <div>{Object.values(notes).map(n=>(
    //    <div className='font-extrabold text-white' key={n.id}>{n.title}
    //    <span className='text-red-600 font-light'>{n.content}</span>
    //    </div>
       
    //   ))}</div>
    //   <div><button className='p-4 bg-white text-black rounded-2xl text-2xl fixed top-10 left-10' onClick={() => addNote(newNote)}>Add</button></div>
    // </div>
  )
}

export default App
