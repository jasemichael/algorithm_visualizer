import {AlgorithmMenuPage, SortingAlgorithmsPage, BubbleSortPage} from "./pages";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AlgorithmMenuPage />}/>
        <Route path="/sorting/bubble" element={<BubbleSortPage />}/>
        <Route path="/sorting" element={<SortingAlgorithmsPage />}/>
      </Routes>
    </div>
  );
}

export default App;
