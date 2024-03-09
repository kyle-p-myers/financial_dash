import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
export default function SearchBar() {
  return (

    <div className=' h-8 flex items-center border border-gray-300 rounded-3xl px-2'>
        <SearchIcon />
        <input className='w-full py-2 px-2 bg-transparent outline-none'
        type='text' 
        placeholder='Search'></input>
    </div>

  );
}



