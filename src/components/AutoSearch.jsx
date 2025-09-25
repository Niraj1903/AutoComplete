import useAutoSearchAPI from "../useAutoSearchAPI";

const AutoSearch = () => {
  const { apiData, input, setInput } = useAutoSearchAPI();
  return (
    <>
      <h1>Hello</h1>
      <input
        className="border border-black"
        type="text"
        placeholder="Please Search Your query"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
};

export default AutoSearch;
