import { Route, Routes } from 'react-router-dom';
import './App.css';
import MostSearched from './components/mostSearched/MostSearched';
import MenuBar from './components/navbar/MenuBar';
import Search from './components/search/Search';
import Register from './components/register/Register';

function App() {
  return (
    
    <div className="App">
      <MenuBar />
      
      <Routes>
        <Route path='/' element={
          <>
            <header className="App-header">
              <Search></Search>
            </header>
            <MostSearched></MostSearched>
          </>
        } />
        <Route path='/register' element={ <Register/> }/>
      </Routes>
  </div>
  );
}

export default App;
