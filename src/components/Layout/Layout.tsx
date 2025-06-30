import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollProgress from '../UI/ScrollProgress';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;