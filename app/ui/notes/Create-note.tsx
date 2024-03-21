import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface CreateNoteProps {
  onSave: (title: string, body: string) => void;
}

export function CreateNote({ onSave }: CreateNoteProps) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isSheetOpen, setSheetOpen] = useState(false);

  const handleSave = () => {
    onSave(title, body);
    setTitle('');
    setBody('');
    setSheetOpen(false);
  };

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Create Note</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Create Note</SheetTitle>
            <SheetDescription>
              Create your note here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="gap-4 py-4">
            <div className="flex">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="flex">
              <Label htmlFor="body">Body</Label>
              <Input id="body" placeholder='Body' value={body} onChange={(e) => setBody(e.target.value)} />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" onClick={handleSave}>Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
