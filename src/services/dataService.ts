import { useEffect, useState } from 'react';
import summaryJSON from '../data/summary.json';
import privateDetailsJSON from '../data/privateDetails.json';
import userInfoJSON from '../data/userInfo.json';
import mediaJSON from '../data/media.json';

export const fetchData = async (file_name: string) => {
  try {
    switch(file_name) {
      case 'summary.json': return summaryJSON;
      case 'privateDetails.json': return privateDetailsJSON;
      case 'userInfo.json': return userInfoJSON;
      case 'media.json': return mediaJSON;
    }
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