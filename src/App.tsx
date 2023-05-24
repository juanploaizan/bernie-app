
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard';
import PreviewPage from './pages/Preview/PreviewPage';
import ValorFuturo  from './pages/InteresSimple/ValorFuturo';

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  const preloader = document.getElementById('preloader');

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none';
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <p className=" text-center text-danger">Error al cargar la aplicación</p>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<PreviewPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/InteresSimple/ValorFuturo' element={<ValorFuturo />} />

      </Routes>
    </>
  );
}

export default App;
