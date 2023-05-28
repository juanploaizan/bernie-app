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
import ValorFuturoAN from './pages/Anualidades/ValorFuturoAN';
import PageNotFound from './pages/404/PageNotFound';
import ValorPresenteAN from './pages/Anualidades/ValorPresenteAN';
import RazonPago from './pages/Anualidades/RazonPago';
import PeriodoAN from './pages/Anualidades/PeriodoAN';
import ValorFuturoGR from './pages/Gradientes/ValorFuturoGR';
import ValorPresenteGR from './pages/Gradientes/ValorPresenteGR';

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
        <Route path="/interes-simple/valor-futuro" element={<ValorFuturo />} />
        <Route
          path="/interes-simple/valor-presente"
          element={<ValorPresente />}
        />
        <Route path="/interes-simple/tasa-interes" element={<TasaInteres />} />
        <Route path="/interes-simple/periodo" element={<Periodo />} />
        <Route
          path="/interes-compuesto/valor-futuro"
          element={<ValorFuturoIC />}
        />
        <Route
          path="/interes-compuesto/valor-presente"
          element={<ValorPresenteIC />}
        />
        <Route
          path="/interes-compuesto/tasa-interes"
          element={<TasaInteresIC />}
        />
        <Route path="/interes-compuesto/periodo" element={<PeriodoIC />} />
        <Route
          path="/amortizaciones/metodo-frances"
          element={<MetodoFrances />}
        />
        <Route
          path="/amortizaciones/metodo-aleman"
          element={<MetodoAleman />}
        />
        <Route path="/conversion-tasas" element={<ConversionTasas />} />
        <Route path="/anualidades/valor-futuro" element={<ValorFuturoAN />} />
        <Route
          path="/anualidades/valor-presente"
          element={<ValorPresenteAN />}
        />
        <Route path="/anualidades/razon-pago" element={<RazonPago />} />
        <Route path="/anualidades/periodo" element={<PeriodoAN />} />
        <Route path="/gradientes/valor-futuro" element={<ValorFuturoGR />} />
        <Route
          path="/gradientes/valor-presente"
          element={<ValorPresenteGR />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
