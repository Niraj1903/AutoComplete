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
    fetchData();
  }, [input]);

  return { apiData, input, setInput, setApiData };
};

export default useAutoSearchAPI;
