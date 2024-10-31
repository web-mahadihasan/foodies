import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError()
  const navigate = useNavigate()
  console.log(error)
  const handleErrorGoBack = () => {
    navigate('/');
  }
  return (
    <div className="container mx-auto px-4 flex items-center justify-center h-screen">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold">Oops!😥</h1>
        <p className="text-2xl font-semibold text-primary-color">Sorry, an unexpected error has occurred.</p>
        <p className="text-xl font-semibold text-black">
          <i>{error.status} {error.statusText || error.message}</i>
        </p>
        <button onClick={handleErrorGoBack} className=" underline text-blue-600">Go Back</button>
      </div>
    </div>
  );
};

export default ErrorPage;