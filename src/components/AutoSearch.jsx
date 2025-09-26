import useAutoSearchAPI from "../useAutoSearchAPI";

const AutoSearch = () => {
  const { apiData, input, setInput, result, setResult } = useAutoSearchAPI();

  return (
    <>
      <h1>Hello</h1>
      <input
        className="border border-black"
        type="text"
        placeholder="Please Search Your query"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setResult(true)}
        onBlur={() => setResult(false)}
      />

      {result && (
        <div>
          {apiData.map((item) => (
            <h6 key={item.id} className="border border-black">
              {item.name}
            </h6>
          ))}
        </div>
      )}
    </>
  );
};

export default AutoSearch;
