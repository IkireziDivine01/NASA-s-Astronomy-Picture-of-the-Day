import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ApodData {
  date: string;
  explanation: string;
  media_type: string;
  title: string;
  url: string;
}

interface ApodViewerProps {
  initialApod?: ApodData; // Optional initial data to display
  apiKey: string; // API key to be passed from parent
}

const Apod: React.FC<ApodViewerProps> = ({ initialApod, apiKey }) => {
  const [apodData, setApodData] = useState<ApodData | null>(initialApod || null);
  const [loading, setLoading] = useState<boolean>(!initialApod); // If initialApod is given, no need to load initially
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApodData = async () => {
      if (apodData) return; // If we have initialApod data, skip fetching
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
        );
        setApodData(response.data);
      } catch (err) {
        setError('Failed to fetch APOD data.');
      } finally {
        setLoading(false);
      }
    };

    fetchApodData();
  }, [apiKey, apodData]); // Run effect if apiKey or apodData changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!apodData) {
    return <div>No data available.</div>;
  }

  return (
    <div>
      <h1>{apodData.title}</h1>
      {apodData.media_type === 'image' ? (
        <img src={apodData.url} alt={apodData.title} style={{ maxWidth: '100%' }} />
      ) : (
        <div>Media type not supported</div>
      )}
      <p>{apodData.explanation}</p>
      <p>
        <strong>Date:</strong> {apodData.date}
      </p>
    </div>
  );
};

export default Apod;
