
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import ECommerce from './pages/Dashboard/ECommerce';
import PreviewPage from './pages/Preview/PreviewPage';

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
    <p className=" text-center text-danger">Failed to lead app</p>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<PreviewPage />} />
        <Route path="/dashboard" element={<ECommerce />} />
      </Routes>
    </>
  );
}

export default App;
