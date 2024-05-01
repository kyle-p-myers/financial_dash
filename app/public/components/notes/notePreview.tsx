import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import React from 'react';
import { Button } from '../ui/button';
import { Image, Video, File, Badge } from 'lucide-react';
import PriorityBadge from './PriorityBadge';
import { DeptBadge } from './DeptBadge';
import { NoteSelectCheck } from './NotesSelectCheck';

export default function NotePreview() {
  return (
    <div>
      <Card>
        <CardHeader>
          <div className=" flex items-center justify-between">
            <CardTitle>Card Title</CardTitle>
              <NoteSelectCheck />
          </div>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
          <div className="mt-6 flex gap-3">
            <Button variant={'outline'} size={'sm'}>
              <Image size={'16px'} />
              <div className="ml-1">1</div>
            </Button>
            <Button variant={'outline'} size={'sm'}>
              <Video size={'16px'} />
              <div className="ml-1">3</div>
            </Button>
            <Button variant={'outline'} size={'sm'}>
              <File size={'16px'} />
              <div className="ml-1">4</div>
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <div className='flex gap-2'>
          <PriorityBadge />
          <DeptBadge />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
