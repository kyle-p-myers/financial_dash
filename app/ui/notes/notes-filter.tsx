import React from 'react';

export default function NotesFilter() {
  return (
    <div className='flex gap-4 mt-6'>
      <div className='bg-white  hover:bg-purple-200 rounded-md shadow-2xl border border-slate-400  w-44'>
        <div className='ml-4 mt-2'>
          <p className='pt-4 pb-8 pr-10'> Personal Notes</p>
          <p className='pb-6'> 60 Notes </p>
        </div>
      </div>
      <div className='bg-white hover:bg-purple-200 rounded-md shadow-2xl border border-slate-400 w-44'>
        <div className='ml-4 mt-2 pr-10'>
          <p className='pt-4 pb-8'> Org Notes</p>
          <p className='pb-6'> 1,987 Notes </p>
        </div>
      </div>
      <div className='bg-white hover:bg-purple-200 rounded-md shadow-2xl border border-slate-400 w-44'>
        <div className='ml-4 mt-2 pr-10'>
          <p className='pt-4 pb-8'> Team Notes</p>
          <p className='pb-6'> 204 Notes </p>
        </div>
      </div>
    </div>
  );
}
