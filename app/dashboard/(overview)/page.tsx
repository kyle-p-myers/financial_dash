


import NotesCreatedCard from '@/app/public/components/dashboard/cards';
import Greeting from '@/app/public/components/dashboard/greeting';
import SearchBar from '@/app/public/components/dashboard/search-bar';


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