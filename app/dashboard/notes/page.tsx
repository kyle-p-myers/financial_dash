import SearchBar from '@/app/ui/dashboard/search-bar'
import { CreateNote } from '@/app/ui/notes/create-note-btn';
import Note from '@/app/ui/notes/note';
import NotesFilter from '@/app/ui/notes/notes-filter';
import { IconButton } from "@material-tailwind/react";
import React from 'react'

export default function Page() {
  return (
    <div>
      <div className='w-1/2'><SearchBar /></div>
     <div className='mt-6'>
      <CreateNote />
     </div>
     <div>
     <NotesFilter />
     </div>
    </div>
    
  )
}
