import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';
import Feed from './components/feed/Feed';

function App() {
  return (
    <Router>
      <Topbar />

      <div className='appContainer'>
        <Sidebar />
        <Feed />
      </div>
    </Router>
  );
}

export default App;
