

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello world</h1>
//     </div>
//   );
// }

import AppBar from "./Components/header/header";
import AppContent from "./Components/content/content";
import AppCards from "./Components/cards/cards";

const App = () => {
  return(
    <>
    <AppBar/>
    <AppContent/>
    <AppCards/>
    </>
  )
 
}

export default App;
