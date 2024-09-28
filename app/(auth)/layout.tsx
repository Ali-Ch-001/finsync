import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full justify-center items-center font-inter">
      {children}
    </main>
  );
};

export default Layout;