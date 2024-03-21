import React from 'react';

export default function NotesFilter() {
  return (
    <div className='flex gap-4 mt-2 mb-2'>
      <div className='bg-white  hover:bg-purple-200 rounded-md shadow-md border border-slate-400  w-52 h-20'>
        <div className='ml-4 mt-2'>
          <p> Personal Notes</p>
          <p className='pb-6'> 60 Notes </p>
        </div>
      </div>
      <div className='bg-white hover:bg-purple-200 rounded-md shadow-md border border-slate-400 w-52 h-20'>
        <div className='ml-4 mt-2 pr-10'>
          <p> Org Notes</p>
          <p className='pb-6'> 1,987 Notes </p>
        </div>
      </div>
      <div className='bg-white hover:bg-purple-200 rounded-md shadow-md border border-slate-400 w-52 h-20'>
        <div className='ml-4 mt-2 pr-10'>
          <p> Team Notes</p>
          <p> 204 Notes </p>
        </div>
      </div>
    </div>
  );
}
