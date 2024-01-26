import './styles.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Hotels from './routes/Hotels';


export default function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/hotels" element={<Hotels />} />
        </Routes>
    </div>
  );
}