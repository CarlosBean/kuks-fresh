import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import ReturnButton from '../components/ReturnButton';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="grid h-screen place-content-center space-y-3 text-slate-600">
      <h1 className="text-3xl font-medium">Oops!</h1>
      <div>Sorry, an unexpected error has occurred.</div>

      {isRouteErrorResponse(error) && (
        <>
          <div>
            Error {error.status} - {error.statusText}
          </div>
          {error.data?.message && <p>{error.data.message}</p>}
        </>
      )}

      <ReturnButton />
    </div>
  );
};

export default ErrorPage;
