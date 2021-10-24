import profile from '../../asset/images/profile.jpg';
import React from 'react';

import '../topbar/tobar.css';
import { Search, NotificationsNone } from '@mui/icons-material';

import { useGlobalContext } from '../../context';
import Dropdown from '../dropdown/Dropdown';

export default function Topbar() {
  // request fucntions and states from context ApI
  const { handleSubmit, query, setQuery, toggleDropdown } = useGlobalContext();

  return (
    <main className='topbarContainer'>
      <section className='topbarLeft'>
        <span className='logo'>bluecube</span>
        <section className='topbarRightBig'>
          <div className='topbarIcons'>
            <div className='topbarIconItem'>
              <NotificationsNone className='Notification' />
              <span className='topbarIconBadge'>1</span>
            </div>
          </div>
          <img src={profile} alt='profile' className='topbarImg' />

          <div className='profileName'>
            <h3>Abigael</h3>
          </div>

          <i className='fas fa-caret-down' />
        </section>
      </section>

      <section className='topbarCenter'>
        <div className='searchbar'>
          <Search className='searchIcon' />
          <input
            placeholder='Find Something'
            className='searchInput'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className='topbarCenterButton'
            type='submit'
            onClick={handleSubmit}>
            Search
          </button>
        </div>
      </section>
      <section className='topbarRight'>
        <div className='topbarIcons'>
          <div className='topbarIconItem'>
            <NotificationsNone className='Notification' />
            <span className='topbarIconBadge'>1</span>
          </div>
        </div>
        <img src={profile} alt='profile' className='topbarImg' />

        <div className='profileName'>
          <h3>Abigael</h3>
        </div>
        <button onClick={toggleDropdown} className='icon-btn'>
          <i className='fas fa-caret-down' />
        </button>
      </section>
      <Dropdown />
    </main>
  );
}
