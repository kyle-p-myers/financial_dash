import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/app/public/components/ui/sheet';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { collection, addDoc, onSnapshot, QueryDocumentSnapshot } from 'firebase/firestore';
import { db } from '@/app/firebase/firebaseConfig';
import NotePreview from './notePreview';

interface Note {
  id: string;
  title: string;
  body: string;
}

export default function CreateNote() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'notes'), (snapshot) => {
      const notesData: Note[] = snapshot.docs.map((doc: QueryDocumentSnapshot) => ({
        id: doc.id,
        ...doc.data(),
      })) as Note[];
      setNotes(notesData);
    });

    return () => unsubscribe();
  }, []);

  const [newNote, setNewNote] = useState({ title: '', body: '' });

  const addNote = async (e: any) => {
    e.preventDefault();
    if (newNote.title !== '' && newNote.body !== '') {
      await addDoc(collection(db, 'notes'), {
        title: newNote.title,
        body: newNote.body,
      });
    }
  };

  return (
    <div className="">
      <Sheet>
        <SheetTrigger>
          <Button variant={'default'}>Create Note</Button>
        </SheetTrigger>
        <SheetContent side={'bottom'} className="h-auto gap-1 bg-emerald-500">
          <Input
            value={newNote.title}
            onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
            type="text"
            placeholder="Title"
          />
          <Textarea
            placeholder="note details"
            className="resize-y"
            value={newNote.body}
            onChange={(e) => setNewNote({ ...newNote, body: e.target.value })}
          />
          <Button onClick={addNote} type="submit">
            Submit
          </Button>
        </SheetContent>
      </Sheet>
      <div className="mt-8">
        {notes.map((note) => (
          <NotePreview key={note.id} note={note} /> // Ensure that 'note' prop is passed correctly
        ))}
      </div>
    </div>
  );
}
