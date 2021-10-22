import React, { useState, useEffect } from 'react';
import Option from '../option/Option';
import './feed.css';
import Photo from '../photo/Photo';

const clientID = `?client_id=${process.env.REACT_APP_ACESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

const Feed = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello');
  };
  const fetchImages = async () => {
    setLoading(true);
    let url;
    url = `${mainUrl}${clientID}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <main className='feed'>
      <div className='feedWraper'>
        <Option handleSubmit={handleSubmit} />
      </div>
    </main>
  );
};

export default Feed;
