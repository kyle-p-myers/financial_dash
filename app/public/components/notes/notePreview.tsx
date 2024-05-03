import React from 'react';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { NoteSelectCheck } from './NotesSelectCheck';

interface Note {
  id: string;
  title: string;
  body: string;
  // Add any other properties of a note
}

interface NotePreviewProps {
  note: Note;
}

export default function NotePreview({ note }: NotePreviewProps) {
  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>
              <p>{note.title}</p>
            </CardTitle>
            <NoteSelectCheck />
          </div>
        </CardHeader>
        <CardContent>
          <p>{note.body}</p>
          <div className="mt-6 flex gap-3">
            <Button variant={'outline'} size={'sm'}>
              <div className="ml-1">1</div>
            </Button>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
