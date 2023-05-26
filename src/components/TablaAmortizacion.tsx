import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import PrintLogo from '../images/logo/print.svg';

interface TablaAmortizacionItem {
  periodo: number;
  cuota: number;
  capital: number;
  interes: number;
  saldo: number;
}

interface Props {
  tablaAmortizacion: TablaAmortizacionItem[];
  periodo: number;
  interesTotal: number;
}

const TablaAmortizacion: React.FC<Props> = ({
  tablaAmortizacion,
  periodo,
  interesTotal,
}) => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="mt-5.5 rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto" ref={componentRef}>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[60px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Periodo
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Cuota
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Capital
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Interés
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Saldo
              </th>
            </tr>
          </thead>
          <tbody>
            {tablaAmortizacion.map((registro) => (
              <tr key={registro.periodo}>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {registro.periodo}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {'$' +
                      new Intl.NumberFormat('en-US', {
                        maximumSignificantDigits: 2,
                      }).format(registro.cuota)}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {'$' +
                      new Intl.NumberFormat('en-US', {
                        maximumSignificantDigits: 2,
                      }).format(registro.capital)}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {'$' +
                      new Intl.NumberFormat('en-US', {
                        maximumSignificantDigits: 2,
                      }).format(registro.interes)}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {registro.periodo !== periodo
                      ? '$' +
                        new Intl.NumberFormat('en-US', {
                          maximumSignificantDigits: 2,
                        }).format(registro.saldo)
                      : '$0.0'}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="p-3.5 text-center font-medium text-black dark:text-white">
          Interés total pagado:{' '}
          {'$' +
            new Intl.NumberFormat('en-US', {
              maximumSignificantDigits: 2,
            }).format(interesTotal)}
        </p>
      </div>
      <div className="m-3 flex items-center justify-center">
        <button
          type="button"
          onClick={handlePrint}
          className="my-3 inline-flex  w-full items-center justify-center gap-2.5 rounded-full bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          <span>
            <img src={PrintLogo} alt="" />
          </span>
          Imprimir
        </button>
      </div>
    </div>
  );
};

export default TablaAmortizacion;
