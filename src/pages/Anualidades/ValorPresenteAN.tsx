import { FormEvent, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';

const ValorPresenteAN = () => {
  const [successNotification, setSuccessNotification] = useState(false);
  const [warningNotification, setWarningNotification] = useState(false);

  const [razonPago, setRazonPago] = useState(0);
  const [periodo, setPeriodo] = useState(0);
  const [tasa, setTasa] = useState(0);
  const [esVencida, setEsVencida] = useState(true);

  const [notificationMessage, setNotificationMessage] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (razonPago > 0 && periodo > 0 && tasa > 0) {
      setWarningNotification(false);

      let resultado = 0;
      if (esVencida) {
        resultado = (razonPago * (1 - Math.pow(1 + tasa, -periodo))) / tasa;
      } else {
        resultado =
          (razonPago * (1 + tasa - Math.pow(1 + tasa, -periodo + 1))) / tasa;
      }

      setNotificationMessage(
        resultado <= 0
          ? 'El resultado es menor o igual a cero. Asegúrate de diligenciar correctamente los campos'
          : 'El valor presente, de la anualidad, es de ' +
              '$' +
              new Intl.NumberFormat().format(resultado)
      );
      setSuccessNotification(true);
    } else {
      setSuccessNotification(false);
      setNotificationMessage(
        'Diligencia todos los campos correctamente. El valor de todos los campos debe ser positivo.'
      );
      setWarningNotification(true);
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Anualidades" />

      {successNotification && (
        <div className="flex w-full border-l-6 border-[#34D399] bg-[#34D399] bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
          <div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#34D399]">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.2984 0.826822L15.2868 0.811827L15.2741 0.797751C14.9173 0.401867 14.3238 0.400754 13.9657 0.794406L5.91888 9.45376L2.05667 5.2868C1.69856 4.89287 1.10487 4.89389 0.747996 5.28987C0.417335 5.65675 0.417335 6.22337 0.747996 6.59026L0.747959 6.59029L0.752701 6.59541L4.86742 11.0348C5.14445 11.3405 5.52858 11.5 5.89581 11.5C6.29242 11.5 6.65178 11.3355 6.92401 11.035L15.2162 2.11161C15.5833 1.74452 15.576 1.18615 15.2984 0.826822Z"
                fill="white"
                stroke="white"
              ></path>
            </svg>
          </div>
          <div className="w-full">
            <h5 className="mb-3 text-lg font-semibold text-black dark:text-[#34D399] ">
              Calculo realizado correctamente
            </h5>
            <p className="text-base leading-relaxed text-body">
              {notificationMessage}
            </p>
          </div>
        </div>
      )}
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
            Valor presente
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-6.5">
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Razón de pago
              </label>
              <input
                type="number"
                onChange={(e) => setRazonPago(Number(e.target.value))}
                placeholder="Ingresa la anualidad o razón de pago"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
              <div className="relative z-20 mt-3 bg-white dark:bg-form-input">
                <select
                  className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 pl-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                  onChange={(e) => setEsVencida(e.target.value === '1')}
                >
                  <option value="1">Vencida</option>
                  <option value="0">Anticipada</option>
                </select>
                <span className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.8">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                        fill="#637381"
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Tasa de interés
              </label>
              <input
                type="number"
                onChange={(e) => setTasa(Number(e.target.value))}
                placeholder="Ingresa la tasa de interés en número decimal (Ej: 0.08)"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Periodo de tiempo
              </label>
              <input
                type="number"
                onChange={(e) => setPeriodo(Number(e.target.value))}
                placeholder="Ingresa el periodo de tiempo"
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
    </DefaultLayout>
  );
};

export default ValorPresenteAN;
