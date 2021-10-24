import React from 'react';
import Option from '../option/Option';
import './feed.css';
import Photo from '../photo/Photo';
import { useGlobalContext } from '../../context';

const Feed = () => {
  const { photos, loading } = useGlobalContext();

  return (
    <main className='feed'>
      <div className='feedWraper'>
        <Option />
        <section className='photos'>
          <div className='photos-center'>
            {photos.map((image, index) => {
              return <Photo key={index} {...image} />;
            })}
          </div>
          {loading && <h2 className='loading'>Loading...</h2>}
        </section>
      </div>
    </main>
  );
};

export default Feed;
