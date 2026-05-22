// /app/ui/fonts.ts
import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

// ✓ ይሄ በትክክል መጻፉን እና export መደረጉን አረጋግጥ
export const lusitana = Lusitana({ 
  subsets: ['latin'],
  weight: ['400', '700'],
});