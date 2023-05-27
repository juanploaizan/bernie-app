import { Link } from 'react-router-dom';
import '../../styles.css';

const PreviewPage = () => {
  return (
    <section className="dark:bg-gray-900 bg-white">
      <div className="mx-auto flex h-screen max-w-screen-xl flex-col justify-center px-4 py-8 text-center lg:px-12 lg:py-8">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black dark:text-white md:text-5xl lg:mt-1 lg:text-6xl">
          Calculadora para matemáticas financieras
        </h1>
        <p className="mb-8 font-medium text-black dark:text-white sm:px-16 lg:mt-10 lg:text-xl xl:px-48">
          Nuestra calculadora de matemática financiera te permite realizar
          cálculos financieros complejos de manera rápida y fácil, desde interés
          simple hasta amortización de créditos. Pruébala ahora y haz tus
          cálculos financieros de manera sencilla.
        </p>
        <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16 lg:mt-5">
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center rounded-full bg-black px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            Ir al dashboard
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
          <a
            href="https://github.com/juanploaizan/bernie_app"
            target="_blank"
            className="text-gray-900 border-gray-300 hover:bg-gray-100 focus:ring-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 inline-flex items-center justify-center rounded-lg border px-5 py-3 text-center text-base font-medium focus:ring-4 dark:text-white"
          >
            <svg
              className="-ml-1 mr-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
            </svg>
            Acceder al repositorio en GitHub
          </a>
        </div>
      </div>
      <div className="ocean mt-5">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </section>
  );
};

export default PreviewPage;
