import NotesCreatedCard from '@/app/public/components/dashboard/cards';
import Greeting from '@/app/public/components/dashboard/greeting';
import { AnalyticCard } from '@/app/public/components/dashboard/NoteAnalytics';
import { RecentNotes } from '@/app/public/components/dashboard/RecentNotes';
import SearchBar from '@/app/public/components/dashboard/search-bar';
import { SummaryCard } from '@/app/public/components/dashboard/SummaryCard';

import '@/global.css';

export default async function Page() {
  
  
 
  return (
    <main>
        <div className='ml-1 w-[60%]'>
      <SearchBar />
      </div>
      <div className='mt-8'>
      <Greeting />
      </div>
      <div className='flex h-52 mt-8 gap-4'>
      <SummaryCard />
      <AnalyticCard/>
      </div>
      <div className=' mt-4'>
      <RecentNotes />
      </div>
     
    </main>
  );
  }