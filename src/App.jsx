import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage((oldPage) => oldPage + 1);
  };

  const previousPage = () => {
    if (page > 1) {
      setPage((oldPage) => oldPage - 1);
    }
  };

  const submitForm = () => {
    // Logic for form submission
  };

  return (
    <div className="flex h-screen bg-black">
      <div className="w-1/2 p-8 flex items-center justify-center">
        <img
          src="src/assets/ATALAN_Diseño de pantallas SERIE ALFA.png"
          alt="Logo"
          className="w-64 h-64"
        />
      </div>
      <div className="w-1/2 bg-white p-8 flex flex-col justify-between">
        <div>
          {page === 1 && <Page1 />}
          {page === 2 && <Page2 />}

          {/*... other page components ...*/}
        </div>

        <div>
          {page > 1 && (
            <button
              onClick={previousPage}
              className="btn btn-primary text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-70"
            >
              Previous
            </button>
          )}

          {page < 6 && (
            <button
              onClick={nextPage}
              className="btn btn-primary text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-70"
            >
              Next
            </button>
          )}
          {page === 6 && (
            <button
              onClick={submitForm}
              className="btn btn-primary text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-70"
            >
              Finish
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
