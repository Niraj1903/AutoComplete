import axios from "axios";
import { useEffect, useState } from "react";
import { RECIPE_API } from "./utils/constants";

const useAutoSearchAPI = () => {
  const [input, setInput] = useState("");
  const [cache, setCache] = useState({});
  const [apiData, setApiData] = useState([]);
  const [result, setResult] = useState(false);

  const fetchData = async () => {
    if (cache[input]) {
      setResult(cache[input]);
      return;
    }
    const { data } = await axios.get(RECIPE_API + input);
    setApiData(data?.recipes);
    setCache((prev) => ({ ...prev, [input]: data?.recipes }));
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 100); // Debouncing

    return () => clearTimeout(timer); //Cleanup previous timeout if input changes
  }, [input]);

  return { apiData, input, setInput, result, setResult };
};

export default useAutoSearchAPI;
