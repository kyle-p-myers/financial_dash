import React from 'react';
import { Button } from '../../../../components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Trash2 } from 'lucide-react';

interface Note {
  id: string;
  title: string;
  body: string;
}

interface NotePreviewProps {
  note: Note;
  onDelete: () => void; // Callback function for note deletion
}

export default function NotePreview({ note, onDelete }: NotePreviewProps) {
  const handleDelete = () => {
    onDelete(); // Call the onDelete callback function when the delete button is clicked
  };

  return (
    <div className='w-[20%] h-auto'>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>
              <p>{note.title}</p>
            </CardTitle>
            <Button variant="outline" size="icon" onClick={handleDelete}>
              <Trash2 className="h-8 w-8" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p>{note.body}</p>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
