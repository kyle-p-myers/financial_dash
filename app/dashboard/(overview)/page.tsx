import { ThemeProvider } from "@material-tailwind/react";
import NotesCreatedCard from '@/components/dashboard/cards';
import Cards from '@/components/dashboard/cards';
import Greeting from '@/components/dashboard/greeting';
import NotesBarGraph from '@/components/dashboard/notes-graph';
import SearchBar from '@/components/dashboard/search-bar';

export default async function Page() {
  
  
 
  return (
    <main>
        <div className='ml-1 w-[60%]'>
      <SearchBar />
      </div>
      <div className='mt-8'>
      <Greeting />
      </div>
      <div className='flex'>
      <NotesCreatedCard />
      </div>
     
    </main>
  );
  }