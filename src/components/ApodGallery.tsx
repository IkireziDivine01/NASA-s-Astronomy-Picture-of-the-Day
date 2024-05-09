import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apod from './Apod';

interface ApodData {
  date: string;
  explanation: string;
  media_type: string;
  title: string;
  url: string;
}

const ApodGallery: React.FC = () => {
  const [apodCollection, setApodCollection] = useState<ApodData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedApod, setSelectedApod] = useState<ApodData | null>(null);

  useEffect(() => {
    const fetchApodCollection = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiKey = 'O3idCJxOZlennDlyiMoaFnicbxPLVxyBy5nAGeoj'; 
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`
        );
        setApodCollection(response.data);
      } catch (err) {
        setError('Failed to fetch APOD collection.');
      } finally {
        setLoading(false);
      }
    };

    fetchApodCollection();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleApodClick = (apod: ApodData) => {
    setSelectedApod(apod);
  };

  return (
    <div>
      <h1 className='pb-10'>NASA APOD Gallery</h1>
      {selectedApod ? (
        <div>
          <button onClick={() => setSelectedApod(null)}>Back to Gallery</button>
          <Apod initialApod={selectedApod} apiKey='O3idCJxOZlennDlyiMoaFnicbxPLVxyBy5nAGeoj' />
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }} className='pr-6 pl-6'>
          {apodCollection.map((apod) => (
            <div key={apod.date} onClick={() => handleApodClick(apod)}>
              {apod.media_type === 'image' ? (
                <img
                  src={apod.url}
                  alt={apod.title}
                  style={{ width: '100%', cursor: 'pointer' }}
                />
              ) : (
                <div>Media type not supported</div>
              )}
              <p>{apod.title}</p>
              <p>{apod.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApodGallery;
