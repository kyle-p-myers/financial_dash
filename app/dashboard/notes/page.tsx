'use client'

import React, { useState } from 'react';
import CreateNote from '@/app/public/components/notes/CreateNote';
import NotePreview from '@/app/public/components/notes/notePreview';
import { Input } from '@/components/ui/input';
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Page() {
  const [notes, setNotes] = useState<Note[]>([]);

  // Function to delete a note
  const deleteNote = (id: string) => {
    // Remove the note from the notes array based on the id
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    // You can also call an API or perform any other necessary operations to delete the note
  };

  return (
    <div className="h-full">
      <div className="flex gap-20">
        <Input
          type="search"
          placeholder="Search..."
          className="md:w-[100px] lg:w-[500px]"
        />
      </div>
      <ScrollArea className="flex max-h-[75%] w-[75%] p-4 bg-transparent">
        <div className="mt-2 gap-1 w-[25%] h-auto">
          {notes.map(note => (
            <NotePreview key={note.id} note={note} onDelete={() => deleteNote(note.id)} />
          ))}
        </div>
      </ScrollArea>
      <CreateNote />
    </div>
  );
}
