import Navtabs from './Navtabs.jsx'

export default function Header({
    currentPage, handlePageChange
}) {
    return (
      <div className='_Header'>
        <div>
            <h1>Amy Griffith</h1>
        </div>
    
        <Navtabs currentPage={currentPage} handlePageChange={handlePageChange}></Navtabs>
      </div>
    );
  }
  