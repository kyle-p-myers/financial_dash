"use client"

import React from 'react';
import { useState } from 'react';
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { db } from '@/app/firebase/firebase';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/app/public/components/ui/sheet';
import { Button } from '@/app/public/components/ui/button';
import { Input } from '@/app/public/components/ui/input';
import { Label } from '@/app/public/components/ui/label';
import { Textarea } from '../ui/textarea';
import NotePrioritySelector from './NotePrioritySelector';
import ToggleGroup from './ToggleGroup';
import NoteDeptSelect from './NoteDeptSelect';
import NoteLevelSelect from './NoteLevelSelect';
import FilePreview from './FilePreview';

export default function CreateNote() {
 
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button variant={'default'}>Create Note</Button>
        </SheetTrigger>
        <SheetContent side={'bottom'} className="grid h-auto grid-cols-2 gap-1">
          <div className=" col-span-1 col-start-1 m-4 h-[90%]">
            <SheetHeader>
              <SheetTitle>Create Note</SheetTitle>
              <SheetDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </SheetDescription>
            </SheetHeader>
            <div className="mb-1">
              <Label className="mb-1">Note Title</Label>
              <Input  id="note-title" className="" />
            </div>
            <div className="mb-5 mt-5 flex w-[100%] justify-between gap-2">
              <NotePrioritySelector /> <NoteDeptSelect />
              <NoteLevelSelect />
            </div>

            <div className="">
              <Label className="">Body</Label>
              <div className="">
                <Textarea
                 
                  id="note-body"
                  className=" h-[150px] w-[100%]"
                />
                <div className="">
                  <ToggleGroup />
                </div>
              </div>
            </div>
          </div>
          <div className=" m-4 justify-between">
            <div className="col-start-2 row-start-1"> Attached Documents</div>
            <div className=" row-start-2 flex justify-between">
              <FilePreview /> <FilePreview /> <FilePreview />
            </div>
            <div className="row-start-3"> Attached Images</div>
            <div className=" row-start-4 flex justify-between">
              <FilePreview /> <FilePreview /> <FilePreview />
            </div>
          </div>
          <Button>
          Create Note
        </Button>
        </SheetContent>
        
      </Sheet>
    </div>
  );
}
