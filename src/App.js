
import { useState } from 'react';
import './App.css';

function App() {
  const API = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 12, 15, 16, 17, 18, 19, 20,21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  const [page, setPage] = useState(1);
  const pageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= API.length && selectedPage!==page) 
      {
        setPage(selectedPage);
        
      }
  }

  return (
    <div className="App">
      <h1>Pagination!</h1>

      {/* Pagination Section */}

      {API.slice(page * 5 - 5, page * 5).map((elem, id) => {
        return <div id='number-display' key={id}>{elem}</div>
      })}
      {/* Page Navigation Buttons */}
      <button type='button' id='back-button' disabled={page===1?true:false} name='button' onClick={() => { pageHandler(page - 1) }} >Prev Page</button>
      <button type='button' id='next-button' name='button' disabled={page===6?true:false} onClick={() => { pageHandler(page + 1) }}>Next Page</button>
    </div>
  );
}

export default App;
