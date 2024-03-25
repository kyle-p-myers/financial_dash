import React from 'react'


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Button } from '@/components/ui/button';
  import { Input } from '@/components/ui/input';
  import { Label } from '@/components/ui/label';
import { Textarea } from '../ui/textarea';
import NoteToggle from './NoteToggle';
import NotePrioritySelector from './NotePrioritySelector';
import AlignToggle from './AlignToggle';
import MultiToggle from './MultiToggle';
  
export default function CreateNote() {
  return (
    <div>
       <Sheet>
  <SheetTrigger>
    <Button variant={'default'}>Create Note</Button>
  </SheetTrigger>
  <SheetContent side={'bottom'} className="h-[500px]">
    <SheetHeader>
      <SheetTitle>Create Note</SheetTitle>
      <SheetDescription>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4 ">
          <div className="grid grid-cols-4 items-center gap-4 bg-amber-900">
            <Label className="text-right">
              Note Title
            </Label>
            <Input id="note-title"  className="col-span-2 "  />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">
              Body
            </Label>
            <div className='col-span-2 col-start-2'>
            <Textarea id="note-body" className=" " />
            <div className='flex'>
            <AlignToggle />
            <MultiToggle />
            </div>
            </div>

          <div className='grid grid-cols-4 items-center gap-4 bg-indigo-700'>
            <div className='col-start-2'>
                <NotePrioritySelector />
            </div>
         
          </div>
         </div>
         </div>

  </SheetContent>
</Sheet>

    </div>
  )
}
