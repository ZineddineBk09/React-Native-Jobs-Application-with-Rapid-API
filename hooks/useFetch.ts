import { useState, useEffect } from "react";
import axios from "axios";
import { Alert } from "react-native";

const useFetch = ({
  endpoint,
  params,
}: {
  endpoint: string;
  params: {
    query: string;
    page: string;
    num_pages: string;
  };
}) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/" + endpoint,
    params: { ...params },
    headers: {
      "X-RapidAPI-Key": process.env.X_RapidAPI_Key as string,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };


  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      setData(response.data as any);
      setLoading(false);
    } catch (error) {
      setErr(error);
      // alert error
      Alert.alert("Something went wrong", "Please try again later.")
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Create a function that will refetch the data in case something went wrong
  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  return { data, loading, err, refetch };
};

export default useFetch;
