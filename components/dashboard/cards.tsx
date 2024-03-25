import * as React from 'react';
import Card from '@mui/material/Card';
import { teal } from '@mui/material/colors';
import { pink } from '@mui/material/colors';
import { purple } from '@mui/material/colors';

const personal = teal[200]; 
const team = pink[300];
const org = purple[300];

const card = (
  <React.Fragment>
    <div className=' bg-white shadow-xl p-3 w-64'>
      <div className='grid grid-cols-1  '>
        <p className='  text-center text-5xl'>0</p>
      </div>

        <div className='grid grid-cols-2 grid-rows-3 text-xl gap-1 pt-2 '>
          <div className='flex col-span-2 gap-2' >
          <p className='  w-auto '>Personal</p> 
          <p className=' w-full text-right'>0</p>
          </div>
          <div className='flex col-span-2 gap-2'>
          <p className='  w-auto'>Organization</p> 
          <p className='  w-full text-right'>0</p>
          </div>
          <div className='flex col-span-2 gap-2'>
          <p className=' w-auto'>Team</p> 
          <p className='  w-full text-right'>0</p>
          </div>
        </div>
    </div>
  </React.Fragment>

);

export default function NotesCreatedCard() {
  return (

    <div className='block mt-8 gap-3'>
      <p className='pb-1'>Total Notes Created</p>
     
        <Card variant="outlined">{card}</Card>
    </div>
  );
}