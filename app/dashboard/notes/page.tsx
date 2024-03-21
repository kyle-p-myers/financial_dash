'use client'

import React, { useState } from 'react';
import SearchBar from '@/app/ui/dashboard/search-bar';
import { CreateNote } from '@/app/ui/notes/Create-note';
import NotesFilter from '@/app/ui/notes/notes-filter';
import { Note } from '@/app/ui/notes/note';
import { ScrollArea } from "@/components/ui/scroll-area";

interface Note {
  title: string;
  body: string;
}

export default function Page() {
  const [notes, setNotes] = useState<Note[]>([]);

  // Function to handle saving a new note
  const handleSaveNote = (title: string, body: string) => {
    // Append the new note to the existing list of notes
    const newNote: Note = { title, body };
    setNotes([...notes, newNote]);
  };
  return (
    <div className='bg-slate-500 h-full flex flex-col overflow-hidden'>
      <div className='w-1/2'><SearchBar /></div>
      <div className='mt-6'>
        <CreateNote onSave={handleSaveNote} />
      </div>
      <div className='flex bg-emerald-600 w-2/3'>
        <NotesFilter />
      </div>
      <div className="h-full w-2/3 overflow-auto">
        <div className="bg-red-500 notes-container p-2">
          {notes.map((note, index) => (
            <Note key={index} title={note.title} body={note.body} />
          ))}
        </div>
      </div>
    </div>
  );
}
