import { lusitana } from '@/app/ui/fonts';
import '@/app/ui/global.css';
// 1. ፎንቱን ከፈጠርንበት ቦታ አምጣው
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 2. ፎንቱን ከነ antialiased ጋር በ body ላይ ጫነው */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}