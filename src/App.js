import { Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Books from './components/Books';
import Header from './components/Header';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
