import '../../styles.css';

const PreviewPage = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="h-screen flex flex-col justify-center py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-12">  
        <h1 className="lg:mt-1 mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl dark:text-white">Calculadora para matemáticas financieras</h1>
        <p className="lg:mt-10 mb-8 font-medium text-black dark:text-white lg:text-xl sm:px-16 xl:px-48">Nuestra calculadora de matemática financiera te permite realizar cálculos financieros complejos de manera rápida y fácil, desde interés simple hasta amortización de créditos. Pruébala ahora y haz tus cálculos financieros de manera sencilla.</p>
        <div className="lg:mt-5 flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a href="/dashboard" className="inline-flex items-center justify-center rounded-full bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
            Ir al dashboard
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
          <a href="https://github.com/juanploaizan/bernie_app" target="_blank" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg>
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
}

export default PreviewPage;