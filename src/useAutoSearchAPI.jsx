import axios from "axios";
import { useEffect, useState } from "react";
import { RECIPE_API } from "./utils/constants";

const useAutoSearchAPI = () => {
  const [input, setInput] = useState("");
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(RECIPE_API + input);
    setApiData(data?.recipes);
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 300); // Debouncing

    return () => clearTimeout(timer); //Cleanup previous timeout if input changes
  }, [input]);

  return { apiData, input, setInput, setApiData };
};

export default useAutoSearchAPI;
