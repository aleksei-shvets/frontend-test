import './scss/App.scss';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import routes from './routes.js';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routes.home} element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
