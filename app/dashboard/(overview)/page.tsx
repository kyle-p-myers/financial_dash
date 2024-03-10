import { ThemeProvider } from "@material-tailwind/react";
import NotesCreatedCard from '@/app/ui/dashboard/cards';
import Cards from '@/app/ui/dashboard/cards';
import Greeting from '@/app/ui/dashboard/greeting';
import NotesBarGraph from '@/app/ui/dashboard/notes-graph';
import SearchBar from '@/app/ui/dashboard/search-bar';
import { lusitana } from '@/app/ui/fonts';


import { CardsSkeleton } from '@/app/ui/skeletons';


export default async function Page() {
  
  
 
  return (
    <main>
        <div className='ml-1 w-[60%]'>
      <SearchBar />
      </div>
      <div className='mt-20'>
      <Greeting />
      </div>
      <div className='flex'>
      <NotesCreatedCard />
      <NotesBarGraph />
      </div>
     
    </main>
  );
  }