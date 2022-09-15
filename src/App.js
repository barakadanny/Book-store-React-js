import { Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
