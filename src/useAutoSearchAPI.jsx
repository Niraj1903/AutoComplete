import axios from "axios";
import { useEffect, useState } from "react";
import { RECIPE_API } from "./utils/constants";

const useAutoSearchAPI = () => {
  const [apiData, setApiData] = useState([]);
  const [input, setInput] = useState("");

  const fetchData = async () => {
    const { data } = await axios.get(RECIPE_API);
    setApiData(data?.recipes);
    console.log(data?.recipes);
  };

  useEffect(() => {
    fetchData();
  }, [input]);

  return { apiData, input, setInput };
};

export default useAutoSearchAPI;
