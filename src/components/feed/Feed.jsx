import React, { useState, useEffect } from 'react';
import Option from '../option/Option';
import './feed.css';
import Photo from '../photo/Photo';
import { useGlobalContext } from '../../context';

const clientID = `?client_id=${process.env.REACT_APP_ACESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

const Feed = () => {
  // const data = useGlobalContext();

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    url = `${mainUrl}${clientID}${urlPage}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos((oldPhotos) => {
        return [...oldPhotos, ...data];
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 50
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener('scroll', event);
  }, []);

  return (
    <main className='feed'>
      <div className='feedWraper'>
        <Option />
        <section className='photos'>
          <div className='photos-center'>
            {photos.map((image, index) => {
              return <Photo key={image.id} {...image} />;
            })}
          </div>
          {loading && <h2 className='loading'>Loading...</h2>}
        </section>
      </div>
    </main>
  );
};

export default Feed;
