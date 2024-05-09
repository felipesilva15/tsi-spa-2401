import { Route, Routes } from 'react-router-dom';
import './App.css';
import MostSearched from './components/mostSearched/MostSearched';
import MenuBar from './components/navbar/MenuBar';
import Search from './components/search/Search';
import Register from './components/register/Register';
import Home from './components/home/Home';
import Login from './components/login/Login';

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
        <Route path='/login' element={ <Login/> }/>
        <Route path='/home' element={ <Home/> }/>
      </Routes>
  </div>
  );
}

export default App;
