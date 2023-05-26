import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard';
import PreviewPage from './pages/Preview/PreviewPage';
import ValorFuturo from './pages/InteresSimple/ValorFuturo';
import ValorPresente from './pages/InteresSimple/ValorPresente';
import TasaInteres from './pages/InteresSimple/TasaInteres';
import Periodo from './pages/InteresSimple/Periodo';
import ValorFuturoIC from './pages/InteresCompuesto/ValorFuturoIC';
import ValorPresenteIC from './pages/InteresCompuesto/ValorPresenteIC';
import TasaInteresIC from './pages/InteresCompuesto/TasaInteresIC';
import PeriodoIC from './pages/InteresCompuesto/PeriodoIC';
import ConversionTasas from './pages/ConversionTasas/ConversionTasas';
import MetodoFrances from './pages/Amortizacion/MetodoFrances';
import MetodoAleman from './pages/Amortizacion/MetodoAleman';

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
        <Route path="/InteresSimple/ValorFuturo" element={<ValorFuturo />} />
        <Route
          path="/InteresSimple/ValorPresente"
          element={<ValorPresente />}
        />
        <Route path="/InteresSimple/TasaInteres" element={<TasaInteres />} />
        <Route path="/InteresSimple/Periodo" element={<Periodo />} />

        <Route
          path="/InteresCompuesto/ValorFuturo"
          element={<ValorFuturoIC />}
        />
        <Route
          path="/InteresCompuesto/ValorPresente"
          element={<ValorPresenteIC />}
        />
        <Route
          path="/InteresCompuesto/TasaInteres"
          element={<TasaInteresIC />}
        />
        <Route path="/InteresCompuesto/Periodo" element={<PeriodoIC />} />

        <Route
          path="/Amortizaciones/MetodoFrances"
          element={<MetodoFrances />}
        />
        <Route path="/Amortizaciones/MetodoAleman" element={<MetodoAleman />} />

        <Route path="/ConversionTasas" element={<ConversionTasas />} />
      </Routes>
    </>
  );
}

export default App;
