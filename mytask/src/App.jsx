import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { PublicRoutes } from './routes/PublicRoutes';
import { AdminRoutes } from './routes/AdminRoutes';

function App() {
  const role = 'user'
  return (
    <div className="App">
      <BrowserRouter>
        {
          role === 'admin' ? <AdminRoutes /> : <PublicRoutes />
          }
      </BrowserRouter>
    </div>
  );
}

export default App;
