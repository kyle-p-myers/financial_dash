'use client';

import CreateNote from '@/app/public/components/notes/CreateNote';
import NotePreview from '@/app/public/components/notes/notePreview';
import NotesCard from '@/app/public/components/notes/notes-level-card';
import { NotesDelete } from '@/app/public/components/notes/notesDelete';
import { NotesExport } from '@/app/public/components/notes/notesExport';
import { NotesFilter } from '@/app/public/components/notes/notesFilter';
import { Input } from '@/app/public/components/ui/input';
import { Card } from '@/components/ui/card';
export default function Page() {
  return (
    <div className=" h-full ">
      <div className="flex gap-20">
        <CreateNote />
        <Input
          type="search"
          placeholder="Search..."
          className="md:w-[100px] lg:w-[500px]"
        />
      </div>
      <div className=" mt-3 grid h-[15%] w-full grid-cols-5 content-center">
        <NotesCard />
        <NotesCard />
        <NotesCard />
      </div>
      <div className="mt-4 flex w-[75%] justify-end gap-2 bg-transparent">
        <div>
          <NotesFilter />
        </div>
        <div>
          <NotesDelete />
        </div>
        <div>
          <NotesExport />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-x-4 bg-fuchsia-100 w-[75%]">
        <div>
          <NotePreview />
        </div>
        <div>
          <NotePreview />
        </div>
        <div>
          <NotePreview />
        </div>
      </div>
    </div>
  );
}
