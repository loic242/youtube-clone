import React, {useState} from "react";
import './Header.css'
import { AppsOutlined, Menu, NotificationsOutlined, Search, VideoCallOutlined } from '@material-ui/icons';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

function Header(props) {
  const [inputSearch, setInputSearch] = useState('');
    return (
        <div className='header'>
          <div className='.header__left'>
           <Menu />
           <Link to='/'>
             <img 
               className='header__logo'
               src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png'
               alt=''
             />
           </Link>

        </div>

        <div className='header__input'>
           <input 
           onChange={e => setInputSearch(e.target.value)}
            value={inputSearch} 
            placeholder='Search' 
            type="text"/>
            <Link to={`/search/${inputSearch}`}>
                <Search className ='header__inputButton'/>
            </Link>
           
        </div>
        <div className='header__icons'>
           <VideoCallOutlined className='header__icon'/>
           <AppsOutlined className='header__icon'/>
           <NotificationsOutlined className='header__icon'/>
           <Avatar alt='loic Mavah'
           src='https://d21xzygesx9h0w.cloudfront.net/TUTOROO-French-Tutor-Cape-Town-Loic-Mavah-77355.jpg'/>
         </div>
        </div>
    );
}

export default Header;