import { FormEvent, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';

interface TablaAmortizacionItem {
  periodo: number;
  cuota: number;
  capital: number;
  interes: number;
  saldo: number;
}

const MetodoFrances = () => {
  const [warningNotification, setWarningNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [showTable, setShowTable] = useState(false);

  const [montoCredito, setMontoCredito] = useState(0);
  const [periodo, setPeriodo] = useState(0);
  const [tasaInteres, setTasaInteres] = useState(0);
  const [tablaAmortizacion, setTablaAmortizacion] = useState<
    TablaAmortizacionItem[]
  >([]);
  const [interesTotal, setInteresTotal] = useState(0);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (montoCredito > 0 && periodo > 0 && tasaInteres > 0) {
      setWarningNotification(false);

      const nuevaTablaAmortizacion: TablaAmortizacionItem[] = [];
      nuevaTablaAmortizacion.push({
        periodo: 0,
        cuota: 0,
        capital: 0,
        interes: 0,
        saldo: montoCredito,
      });

      let cuota =
        (montoCredito * tasaInteres) /
        (1 - Math.pow(1 + tasaInteres, -periodo));
      console.log('cuota: ' + cuota);

      let saldo = montoCredito;
      let interes = 0;
      let capital = 0;
      let interesTotalAux = 0;
      for (let periodoAux = 1; periodoAux <= periodo; periodoAux++) {
        interes = saldo * tasaInteres;
        capital = cuota - interes;
        saldo = saldo - capital;
        nuevaTablaAmortizacion.push({
          periodo: periodoAux,
          cuota: cuota,
          capital: capital,
          interes: interes,
          saldo: saldo,
        });
        interesTotalAux = interesTotalAux + interes;
      }

      setInteresTotal(interesTotalAux);
      setTablaAmortizacion(nuevaTablaAmortizacion);
      setShowTable(true);
    } else {
      setNotificationMessage(
        'Diligencia todos los campos correctamente. El valor de todos los campos debe ser positivo.'
      );
      setWarningNotification(true);
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Amortización de créditos" />

      {warningNotification && (
        <div className="flex w-full border-l-6 border-warning bg-warning bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
          <div className="mr-5 flex h-9 w-9 items-center justify-center rounded-lg bg-warning bg-opacity-30">
            <svg
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.50493 16H17.5023C18.6204 16 19.3413 14.9018 18.8354 13.9735L10.8367 0.770573C10.2852 -0.256858 8.70677 -0.256858 8.15528 0.770573L0.156617 13.9735C-0.334072 14.8998 0.386764 16 1.50493 16ZM10.7585 12.9298C10.7585 13.6155 10.2223 14.1433 9.45583 14.1433C8.6894 14.1433 8.15311 13.6155 8.15311 12.9298V12.9015C8.15311 12.2159 8.6894 11.688 9.45583 11.688C10.2223 11.688 10.7585 12.2159 10.7585 12.9015V12.9298ZM8.75236 4.01062H10.2548C10.6674 4.01062 10.9127 4.33826 10.8671 4.75288L10.2071 10.1186C10.1615 10.5049 9.88572 10.7455 9.50142 10.7455C9.11929 10.7455 8.84138 10.5028 8.79579 10.1186L8.13574 4.75288C8.09449 4.33826 8.33984 4.01062 8.75236 4.01062Z"
                fill="#FBBF24"
              ></path>
            </svg>
          </div>
          <div className="w-full">
            <h5 className="mb-3 text-lg font-semibold text-[#9D5425]">
              Atención
            </h5>
            <p className="leading-relaxed text-[#D0915C]">
              {notificationMessage}
            </p>
          </div>
        </div>
      )}

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Método francés
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-6.5">
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Monto del crédito
              </label>
              <input
                type="number"
                onChange={(e) => setMontoCredito(Number(e.target.value))}
                placeholder="Ingresa el monto del crédito"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Periodo del crédito
              </label>
              <input
                type="number"
                onChange={(e) => setPeriodo(Number(e.target.value))}
                placeholder="Ingresa el periodo de tiempo del crédito"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Tasa de interés
              </label>
              <input
                type="number"
                onChange={(e) => setTasaInteres(Number(e.target.value))}
                placeholder="Ingresa la tasa de interés del crédito"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
            >
              Calcular
            </button>
          </div>
        </form>
      </div>

      {showTable && (
        <div className="mt-5.5 rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
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
                        {registro.cuota.toFixed(2)}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {registro.capital.toFixed(2)}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {registro.interes.toFixed(2)}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {registro.saldo.toFixed(2)}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="my-4.5 font-medium text-black dark:text-white">
            Interés total pagado: {interesTotal.toFixed(2)}
          </p>
        </div>
      )}
    </DefaultLayout>
  );
};

export default MetodoFrances;
