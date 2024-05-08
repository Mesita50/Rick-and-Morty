import React, { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import { PacmanLoader } from 'react-spinners';

export const Main = () => {
  const [load, setLoad] = useState(false);
  const URL = 'https://rickandmortyapi.com/api/character';
  const [contentApi, setContentApi] = useState([]);

  useEffect(() => {
    setLoad(true);
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setContentApi(data.results);
        setLoad(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoad(false);
      });
  }, []);

  return (
    <main className='bg-[#272B33] container mx-auto px-4 py-8 '>

      {load ? (
        <div className='flex justify-center'>
          <PacmanLoader color="#FFED00" />
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {contentApi.map(character => (
            <Card key={character.id} gender={character.gender} img={character.image} name={character.name} />
          ))}
        </div>
      )}

    </main>
  );
};