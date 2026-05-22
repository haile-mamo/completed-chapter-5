'use client'; // 1. ይህ ለNext.js ፋይሉ ብሮውዘር ላይ እንዲሠራ ይነግረዋል
 
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // 2. አሁን ያለንበትን ሊንክ ማወቂያ ሁክ
import clsx from 'clsx'; // 3. ስታይሎችን በሁኔታዎች (Conditions) ለመቀየር የሚረዳን ላይብረሪ
 
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];
 
export default function NavLinks() {
  const pathname = usePathname(); // 4. የአሁኑን የዌብሳይት ሊንክ እዚህ ተለዋዋጭ (Variable) ውስጥ አስቀመጥነው
 
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                // 5. ያለንበት ገጽ (pathname) ከሊንኩ (link.href) ጋር እኩል ከሆነ ሰማያዊ ቀለም ይልበስ
                'bg-sky-100 text-blue-600': pathname === link.href,
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