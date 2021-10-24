import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();
const clientID = `?client_id=${process.env.REACT_APP_ACESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

// server will return 403 error if request limit is reached.. the request limit is set to 50 per hour by default

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    if (query) {
      // if the input is not empty use this urls

      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      // if the input is empty use this urls
      url = `${mainUrl}${clientID}${urlPage}`;
    }

    try {
      // fetch data from the api
      const response = await fetch(url);
      // get the data from the response
      const data = await response.json();

      setPhotos((oldPhotos) => {
        // if query and page is  1, remove the old values
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          // if searching return new photos and old photos
          return [...oldPhotos, ...data.results];
        } else {
          // if not searching return default photos
          return [...oldPhotos, ...data];
        }
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);

      // if (error.message === 'Request failed with status code 403') {
      // alert('Request limit reached');
      // }
    }
  };

  useEffect(() => {
    fetchImages();

    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    // add scroll event listener
    const event = window.addEventListener('scroll', () => {
      // get the scroll position
      if (
        // check if the innerheigt and vertical scroll added together is greater  or equal to  the document bdoy height: ;
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      ) {
        // if the condition is true, increase the page number
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    // remove the event listener when the component is unmounted
    return () => window.removeEventListener('scroll', event);
  }, [loading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
  };
  const [isOpen, setIsOpen] = useState(true);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        handleSubmit,
        query,
        setQuery,
        page,
        loading,
        setPage,
        isOpen,
        setIsOpen,
        photos,
        toggleDropdown,
        openSidebar,
        closeSidebar,
        isSidebarOpen,
      }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
