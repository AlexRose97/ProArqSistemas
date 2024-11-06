import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SubjectPage } from './pages/SubjectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subject/:code" element={<SubjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
