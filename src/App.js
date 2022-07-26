import React from 'react';
import './App.css';
import Explore from './Explore';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import { Route, BrowserRouter, Routes} from "react-router-dom"
import Shorts from './Shorts';
import Header from './Header';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
  <div className='app_component' >
      <Sidebar />
      <Routes>
        <Route path='/' element={<RecommendedVideos />} />
         <Route path='/explore' element={<Explore />} />
         <Route path='/shorts' element={<Shorts />} />
         <Route path='/search/:searchTerm' element={<SearchPage />}>
          

         </Route>
        </Routes></div>
        </BrowserRouter>

    
     

     
    </div>
  );
}

export default App;
