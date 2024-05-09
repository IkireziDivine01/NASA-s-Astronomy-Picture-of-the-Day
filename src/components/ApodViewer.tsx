import React, { useState } from 'react';
import axios from 'axios';

interface ApodData {
  date: string;
  explanation: string;
  media_type: string;
  title: string;
  url: string;
}

const ApodViewer: React.FC = () => {
  const [apodData, setApodData] = useState<ApodData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');

  const apiKey = 'O3idCJxOZlennDlyiMoaFnicbxPLVxyBy5nAGeoj'; 

  const fetchApodData = async (date: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
      );
      setApodData(response.data);
    } catch (err) {
      if (err instanceof Error) {
        setError(`Failed to fetch APOD data: ${err.message}`);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleSearch = () => {
    if (selectedDate) {
      fetchApodData(selectedDate);
    }
  };

  return (
    <div>
      <h1 className='pb-4'>NASA Astronomy Picture of the Day Viewer</h1>
     <div className='space-x-4'>
     <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        placeholder="YYYY-MM-DD"
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      />
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={handleSearch}>Search</button>
     </div>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {apodData && !loading && !error && (
        <div className='pl-6 pr-6'>
          <p className='text-2xl p-6 pb-10 font-bold'>{apodData.title}</p>
          {apodData.media_type === 'image' ? (
            <img src={apodData.url} alt={apodData.title} className='w-full pb-10' />
          ) : (
            <div>Media type not supported</div>
          )}
          <p className='text-left pb-4'>
            <strong>Date:</strong> {apodData.date}
          </p>
          <p className='text-justify'>{apodData.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default ApodViewer;
