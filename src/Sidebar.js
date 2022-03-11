import {ExpandMoreOutlined, History, Home,OndemandVideo, Subscriptions, ThumbUpAltOutlined, VideoLibrary, WatchLater, Whatshot } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css'
import SidebarRow from './SidebarRow';

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow  Icon={Home} title='Home' />
            <SidebarRow  Icon ={Whatshot} title='Trending' />
            <SidebarRow  Icon ={Subscriptions} title='Subscription' />
            <hr/>
            <SidebarRow Icon = {VideoLibrary} title ='Library'/>
            <SidebarRow Icon = {History} title ='History'/>
            <SidebarRow Icon = {OndemandVideo} title ='Your videos'/>
            <SidebarRow Icon = {WatchLater} title ='watch Later'/>
            <SidebarRow Icon = {ThumbUpAltOutlined} title ='Liked video'/>
            <SidebarRow Icon = {ExpandMoreOutlined} title ='Show more'/>
            <hr/>
        </div>
    );
}

export default Sidebar;