import { useState, useEffect } from "react";
import axios from "axios";
import { X_RapidAPI_Key } from "@env";

const rapidApiKey: string = X_RapidAPI_Key;

const useFetch = ({
  endpoint,
  query,
}: {
  endpoint: string;
  query: {
    query: string;
    page: string;
    num_pages: string;
  };
}) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/" + endpoint,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    try {
      const response = axios.request(options);
      setData(response.data as any);
      setLoading(false);
    } catch (err) {
      setError(err);
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
};
