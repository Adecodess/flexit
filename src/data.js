import profileImg from './asset/images/profile.jpg';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiMessageSquare } from 'react-icons/fi';
export const Data = [
  {
    id: 1,
    img: profileImg,
    title: 'Micheal Liked You',
    desc: 'About 25 minutes ago',
    icon: <AiOutlineHeart />,
  },
  {
    id: 2,
    title: 'Jack Liked You',
    desc: 'About 16 minutes',
    img: profileImg,
    icon: <AiOutlineHeart />,
  },
  {
    id: 3,
    title: 'Martin Commented on Your Photo',
    desc: 'About 10 minutes ago',
    img: profileImg,
    icon: <FiMessageSquare />,
  },
];
