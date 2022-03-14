import { Route, Routes } from 'react-router-dom';
import About from './components/Pages/About';
import Home from './components/Pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;