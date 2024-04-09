import { ThemeProvider } from "@material-tailwind/react";
import NotesCreatedCard from '@/public/components/dashboard/cards';
import Cards from '@/public/components/dashboard/cards';
import Greeting from '@/public/components/dashboard/greeting';
import NotesBarGraph from '@/public/components/dashboard/notes-graph';
import SearchBar from '@/public/components/dashboard/search-bar';
import NavLinks from "@/public/components/dashboard/nav-links";
import SideNav from "@/public/components/dashboard/sideNav";

export default async function Page() {
  
  
 
  return (
    <main>
    <SideNav />
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