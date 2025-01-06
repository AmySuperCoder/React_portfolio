import { useState } from 'react';

import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';


export default function ReactPortfolio() {
  const [currentPage, setCurrentPage] = useState('Home');

  
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
    return <Contact />;
    }
    if (currentPage === 'Resume') {
    return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
     
      <main className="my-4">{renderPage()}</main>
      <Footer className="Footer"></Footer>
    </>
  );
}