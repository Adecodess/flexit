import profile from '../../asset/images/profile.jpg';
import React, { useState } from 'react';
import DropDown from '../dropdown/Dropdown';

import '../topbar/tobar.css';
import { Search, NotificationsNone } from '@mui/icons-material';

import { Link } from 'react-router-dom';

export default function Topbar() {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
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
          <button className='topbarCenterButton'>Search</button>
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
        <ul className=''>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <i className='fas fa-caret-down' />
          </li>
        </ul>
        {/* {dropdown && <Dropdown />} */}
      </section>
    </main>
  );
}
