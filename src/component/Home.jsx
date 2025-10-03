import { useState, useEffect } from 'react'
import Cards from './Cards'
import { PiMailboxBold } from "react-icons/pi";
import '../App.css'

const Home = () => {
  const [notes, setNotes] = useState([])
  const [currentNote, setcurrentNote] = useState({title:"", desc:""})

  useEffect(()=>{
    let localNotes = localStorage.getItem("notes")
    if(localNotes){
      setNotes(JSON.parse(localNotes))
    }
  }, [])

  const deleteNote = (id) =>{
    const updatedNotes = notes.filter(note => note.id !== id)
    setNotes(updatedNotes)
    localStorage.setItem("notes", JSON.stringify(updatedNotes))
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(currentNote.title.trim() && currentNote.desc.trim()){
      const newNote = { ...currentNote, id: Date.now() }
      const updatedNotes = [...notes, newNote]
      setNotes(updatedNotes)
      setcurrentNote({title:"", desc:""})
      localStorage.setItem("notes", JSON.stringify(updatedNotes))
    }
  }

  const handleChange = (e) =>{
    setcurrentNote({...currentNote, [e.target.name]: e.target.value})
  }

  return (
    <>
     <main>
      <h1>Create Your Note ✨</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input value={currentNote.title} onChange={handleChange} type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <textarea name="desc" onChange={handleChange} id="desc" value={currentNote.desc}></textarea>
        </div>
        <button className='btn'>+ Add Note</button>
      </form>
     </main>
     <section>
      <h2>Your Notes</h2>
      <div className='container'>
        {notes.map((note) => (
          <Cards 
            key={note.id} 
            title={note.title} 
            desc={note.desc} 
            id={note.id} 
            deleteNote={deleteNote}
          />
        ))}
        {notes.length === 0 && (
          <div className='none'>Add a Note To Notely <PiMailboxBold /></div>
        )}
      </div>
     </section>
    </>
  )
}

export default Home