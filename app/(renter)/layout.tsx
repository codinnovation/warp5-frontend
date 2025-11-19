import RenterLayoutContent from '@/components/layout/RenterLayoutContent';

export default function RenterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='antialiased overflow-auto lg:overflow-hidden'>
        <RenterLayoutContent>
          {children}
        </RenterLayoutContent>
      </body>
    </html>
  );
}
