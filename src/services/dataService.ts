import axios from 'axios';
import { useEffect, useState } from 'react';

export const fetchData = async (file_name: string) => {
  try {
    const response = await axios.get(`/data/${file_name}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${file_name}:`, error);
    throw error;
  }
};

export const useDataFetching = (fileName: string) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const fetched_data = await fetchData(fileName);
        setData(fetched_data);
      } catch (error) {
        console.error(`Error fetching ${fileName} data:`, error);
      }
    };

    fetchDataAsync();
  }, [fileName]);

  return data;
};