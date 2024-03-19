'use client'

import React, { useState } from 'react';
import SearchBar from '@/app/ui/dashboard/search-bar';
import { CreateNote } from '@/app/ui/notes/Create-note';
import NotesFilter from '@/app/ui/notes/notes-filter';
import { Note } from '@/app/ui/notes/note';


export default function Page() {
  // State to store the list of notes
  const [notes, setNotes] = useState([]);

  // Function to handle saving a new note
  const handleSaveNote = (title, content) => {
    // Append the new note to the existing list of notes
    setNotes([...notes, { title, content }]);
  };


  return (
    <div>
      <div className='w-1/2'><SearchBar /></div>
      <div className='mt-6'>
        {/* Render the CreateNote component to allow the user to create a new note */}
        <CreateNote onSave={handleSaveNote} />
      </div>
      <div className='flex'>
        <NotesFilter />
        <div className='ml-5'>
          {/* Render the notes in a scrollable div */}
          <div className="notes-container">
            {notes.map((note, index) => (
              <Note key={index} title={note.title} content={note.body} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
