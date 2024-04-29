'use client';

import {
  UserGroupIcon,
  RocketLaunchIcon,
  DocumentDuplicateIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Dashboard', href: '/dashboard', icon: RocketLaunchIcon },
  {
    name: 'Notes',
    href: '/dashboard/notes',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Teams', href: '/dashboard/team', icon: UserGroupIcon },
  { name: 'Settings', href: '/dashboard/settings', icon: AdjustmentsHorizontalIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-#fafafa p-3 text-sm font-medium hover:bg-stone-200 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                ' bg-fuchsia-200 text-stone-950': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}