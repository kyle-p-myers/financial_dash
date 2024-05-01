import Link from 'next/link';
import NavLinks from '@/app/public/components/dashboard/nav-links';
import '@/global.css';
import { Bird } from 'lucide-react';

import { PowerIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { OrgSelector } from './OrgSelector';

export default function SideNav() {
  return (
    <>
    <div className="flex h-full flex-col px-3 md:px-2 bg-white shadow-md ">
    <div className=' h-10 flex '>
      <Image
       src="/@/app/public/components/icons/pidge.png"
       width={20}
       height={20}
       alt="Picture of the author" />
       Pidge
    </div>
    
      <Link
href="/"
      >
        <div className="w-32 text-white md:w-40 ">
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2  bg-white md:flex-col md:space-x-0 md:space-y-2 pr-3">
        <NavLinks />
        <div className="hidden flex h-auto w-full grow rounded-md bg-#fafafa md:block content-center">
        <OrgSelector/>
        </div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-#fafafa p-3 text-sm font-medium hover:bg-slate-100 hover:#a78bfa md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
    </>
  );
}