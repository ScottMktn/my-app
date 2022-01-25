import React from 'react';
import Footer from './footer';
import Header from './header';

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props

  return (
      <div>
          <Header />
          {children}
          <Footer />
      </div>
  );
};