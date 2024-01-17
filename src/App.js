import './styles.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Hotels from './routes/Hotels';


export default function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
        </Routes>
    </div>
  );
}