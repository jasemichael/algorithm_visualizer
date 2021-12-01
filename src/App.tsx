import {AlgorithmMenuPage, SortingAlgorithmsPage, BubbleSortPage, InsertionSortPage, SelectionSortPage, MergeSortPage} from "./pages";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AlgorithmMenuPage />}/>
        <Route path="/sorting/bubble" element={<BubbleSortPage />}/>
        <Route path="/sorting/insertion" element={<InsertionSortPage />} />
        <Route path="/sorting/selection" element={<SelectionSortPage />} />
        <Route path="/sorting/merge" element={<MergeSortPage />} />
        <Route path="/sorting" element={<SortingAlgorithmsPage />} />
      </Routes>
    </div>
  );
}

export default App;
