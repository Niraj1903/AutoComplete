import useAutoSearchAPI from "../useAutoSearchAPI";
import { RECIPE_API } from "../utils/constants";

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

      {apiData.map((item) => (
        <h6 key={item.id} className="border border-black">
          {item.name}
        </h6>
      ))}
    </>
  );
};

export default AutoSearch;
