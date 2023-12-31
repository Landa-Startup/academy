import React from 'react';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
// import ScrollUpButton from '@/components/common/ScrollUpButton';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body>
        <Navbar>
          {/* Navbar */}
          <main>{children}</main> {/* Main Content */}
          <div className="bottom-0 w-full">
            {/* <ScrollUpButton /> Scroll Up Button */}
          </div>
        </Navbar>
      </body>
    </html>
  );
}
