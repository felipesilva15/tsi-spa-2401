import './App.css';
import MostSearched from './components/mostSearched/MostSearched';
import MenuBar from './components/navbar/MenuBar';
import Search from './components/search/Search';
import { BooksContainer } from './components/styles/Containers';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <header className="App-header">
        <Search></Search>
      </header>
      <MostSearched></MostSearched>
    </div>
  );
}

export default App;
