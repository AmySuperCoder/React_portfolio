import NavTabs from './NavTabs'

export default function Header({
    currentPage, handlePageChange
}) {
    return (
      <div className='_Header'>
        <div>
            <h1>Amy Griffith</h1>
        </div>
    
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}></NavTabs>
      </div>
    );
  }
  