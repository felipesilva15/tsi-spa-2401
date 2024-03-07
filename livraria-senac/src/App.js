import './App.css';
import MostSearched from './components/mostSearched/MostSearched';
import MenuBar from './components/navbar/MenuBar';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <header className="App-header">
      </header>
      <main>
        <MostSearched></MostSearched>
      </main>
    </div>
  );
}

export default App;
