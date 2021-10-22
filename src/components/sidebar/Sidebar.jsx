import './sidebar.css';
import { BarChart, ChatBubbleOutline, WorkOutline } from '@mui/icons-material';
import GroupIcon from '@mui/icons-material/Group';
import SettingsBluetoothIcon from '@mui/icons-material/SettingsBluetooth';
import NordicWalkingIcon from '@mui/icons-material/NordicWalking';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HouseIcon from '@mui/icons-material/House';

import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <main className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <ul className='sidebarList'>
            <Link to='/' className='link'>
              <li className='sidebarListItem active'>
                <HouseIcon className='sidebarIcon' />
                Home
              </li>
            </Link>
            <li className='sidebarListItem'>
              <ChatBubbleOutline className='sidebarIcon' />
              Message
            </li>
          </ul>
        </div>
        <section className='sidebarMenu'>
          <h3 className='sidebarTitle'>Share</h3>
          <ul className='sidebarList'>
            <Link to='/users' className='link'>
              <li className='sidebarListItem '>
                <BarChart className='sidebarIcon' />
                Ranking
              </li>
            </Link>
            <Link to='/products' className='link'>
              <li className='sidebarListItem'>
                <GroupIcon className='sidebarIcon' />
                Group
              </li>
            </Link>
            <li className='sidebarListItem'>
              <SettingsBluetoothIcon className='sidebarIcon' />
              Connect
            </li>
            <li className='sidebarListItem'>
              <NordicWalkingIcon className='sidebarIcon' />
              Parade
            </li>
            <li className='sidebarListItem'>
              <CardGiftcardIcon className='sidebarIcon' />
              Party
            </li>
            <li className='sidebarListItem'>
              <WorkOutline className='sidebarIcon' />
              Challenge
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Sidebar;
