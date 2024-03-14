import './App.css';
import MostSearched from './components/mostSearched/MostSearched';
import MenuBar from './components/navbar/MenuBar';
import { BooksContainer } from './components/styles/Containers';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <header className="App-header">
        <BooksContainer>
          <MostSearched></MostSearched>
        </BooksContainer>
      </header>
    </div>
  );
}

export default App;
