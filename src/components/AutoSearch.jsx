import useAutoSearchAPI from "../useAutoSearchAPI";

const AutoSearch = () => {
  const { apiData, input, setInput, result, setResult } = useAutoSearchAPI();

  return (
    <>
      <div className="max-w-xl mx-auto p-4">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
          Search for Recipes
        </h1>

        <div className="relative w-full">
          <input
            className="w-full p-4 pl-12 border-2 border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all duration-300"
            type="text"
            placeholder="Search your query..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setResult(true)}
            onBlur={() => setResult(false)}
          />

          {/* Search Icon */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 18a8 8 0 1110 0 8 8 0 01-10 0zm0 0l-6 6"
              />
            </svg>
          </div>
        </div>

        {result && (
          <div className="mt-4 p-4 bg-white border border-gray-200 rounded-2xl shadow-xl max-h-72 overflow-y-auto">
            {apiData.length > 0 ? (
              apiData.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-3 p-3 hover:bg-indigo-100 cursor-pointer rounded-lg transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-full">
                    <img
                      src={item.image || "https://via.placeholder.com/40"}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h6 className="text-lg font-medium text-gray-700">
                    {item.name}
                  </h6>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500">No results found</div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AutoSearch;
