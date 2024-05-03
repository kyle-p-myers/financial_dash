'use client';

import CreateNote from '@/app/public/components/notes/CreateNote';
import NotePreview from '@/app/public/components/notes/notePreview';
import NotesCard from '@/app/public/components/notes/notes-level-card';
import { NotesDelete } from '@/app/public/components/notes/notesDelete';
import { NotesExport } from '@/app/public/components/notes/notesExport';
import { NotesFilter } from '@/app/public/components/notes/notesFilter';
import { Input } from '@/app/public/components/ui/input';
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/app/firebase/firebaseConfig';
export default function Page() {
  // Dummy note data for demonstration purposes
  const dummyNotes = [
    { id: '1', title: 'Note 1', body: 'Body of Note 1' },
    // Add more dummy notes as needed
  ];

  return (
    <div className="h-full">
      <div className="flex gap-20">
        <Input
          type="search"
          placeholder="Search..."
          className="md:w-[100px] lg:w-[500px]"
        />
      </div>
      <div className="mt-10 gap-2 grid h-[15%] w-full grid-cols-5 content-center">
        <NotesCard />
        <NotesCard />
        <NotesCard />
      </div>
      <div className="mt-10 flex w-[75%] justify-end gap-2 bg-transparent">
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
     
      <ScrollArea className="flex max-h-[75%] w-[75%] p-4 bg-transparent">
        <div className="mt-2 gap-1 w-[25%] h-auto bg-emerald-800">
        <CreateNote />
        </div>
      </ScrollArea>
    </div>
  );
}

