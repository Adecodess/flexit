import profile from '../../asset/images/profile.jpg';
import React, { useState } from 'react';

import '../topbar/tobar.css';
import { Search, NotificationsNone } from '@mui/icons-material';

import { Link } from 'react-router-dom';
import Feed from '../feed/Feed';

export default function Topbar({ handleSubmit }) {
  // const { handleSubmit } = Feed;
  return (
    <main className='topbarContainer'>
      <section className='topbarLeft'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>bluecube</span>
        </Link>
      </section>

      <section className='topbarCenter'>
        <div className='searchbar'>
          <Search className='searchIcon' />
          <input placeholder='Find Something' className='searchInput' />
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

        <i className='fas fa-caret-down' />
      </section>
    </main>
  );
}
