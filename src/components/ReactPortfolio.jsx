import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';
import Header from './Header';


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