import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Input } from '../../../../components/ui/input';
import { Textarea } from '../../../../components/ui/textarea';
import {
  collection,
  addDoc,
  onSnapshot,
  QueryDocumentSnapshot,
  deleteDoc,
  doc, // Import deleteDoc function
} from 'firebase/firestore';
import { db } from '@/app/firebase/firebaseConfig';
import NotePreview from './notePreview';
import { useToast } from '@/components/ui/use-toast';

interface Note {
  id: string;
  title: string;
  body: string;
}

export default function CreateNote() {
  const { toast } = useToast();
  const [notes, setNotes] = useState<Note[]>([]);
  const [isSheetOpen, setIsSheetOpen] = useState(false); // State to manage sheet open/close

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'notes'), (snapshot) => {
      const notesData: Note[] = snapshot.docs.map(
        (doc: QueryDocumentSnapshot) => ({
          id: doc.id,
          ...doc.data(),
        }),
      ) as Note[];
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
      setNewNote({ title: '', body: '' }); // Clear the input fields after submitting
      setIsSheetOpen(false); // Close the sheet after submitting

      toast({
        description: 'Your note has been created.',
      });
    }
  };

  // Function to delete a note
  const deleteNote = async (id: string) => {
    await deleteDoc(doc(db, 'notes', id));
    toast({
      description: 'Your note has been deleted.',
    });
  };

  return (
    <div className="">
      <Sheet open={isSheetOpen} onClose={() => setIsSheetOpen(false)}>
        <SheetTrigger asChild>
          <Button variant={'default'} onClick={() => setIsSheetOpen(true)}>
            Create Note
          </Button>
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
          <SheetFooter>
            <SheetClose asChild>
              <Button onClick={addNote} type="submit">
                Create
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <div className="mt-8">
        {notes.map((note) => (
          <NotePreview key={note.id} note={note} onDelete={() => deleteNote(note.id)} />
        ))}
      </div>
    </div>
  );
}
