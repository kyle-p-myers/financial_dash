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
import { Image, Video, File } from 'lucide-react';

export default function NotePreview() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
          <div className='flex mt-6 gap-3'>
          <Button variant={'outline'} size={'sm'}>
            <Image size={'16px'} />
            <div className='ml-1'>1</div>
          </Button>
          <Button variant={'outline'} size={'sm'}>
            <Video size={'16px'} />
            <div className='ml-1'>3</div>
          </Button>
          <Button variant={'outline'} size={'sm'}>
            <File size={'16px'} />
            <div className='ml-1'>4</div>
          </Button>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
