import DefaultLayout from '../../layout/DefaultLayout';

export default function PageNotFound() {
  return (
    <DefaultLayout>
      <div className="p-6 text-center">
        <p className="text-indigo-600 text-base font-semibold">404</p>
        <h1 className="text-gray-900 mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Página no encontrada
        </h1>
        <p className="text-gray-600 mt-6 text-base leading-7">
          Lo sentimos, no pudimos encontrar la página que estás buscando.
        </p>
      </div>
    </DefaultLayout>
  );
}
