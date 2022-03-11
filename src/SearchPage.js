import { TuneOutlined } from '@material-ui/icons';
import React from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__filter'>
                <TuneOutlined/>
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow 
              image='https://yt3.ggpht.com/ytc/AKedOLQpacZXEPCCJGzRIMeSXbP2EutCsos3XeGsS4Ek9g=s176-c-k-c0x00ffffff-no-rj-mo'
              channel ='Mark Angel TV '
              subs='1.11M'
              verified
              noOfVideos={241}
              description ='Welcome to Mark Angel Tv, the home of laughter.

              At Mark Angel Tv, our priority is to make sure that you are always happy ever...'
            />

            <hr />
            <VideoRow 
                  views='3.2k views'
                  subs="1.5M"
                  description = 'new Mark angel description'
                  timestamp='1 hour ago'
                  channel='Mark Angel TV'
                  title='Lawanson Show Full Video - Season 5 - (Mark Angel TV)'
                  image='https://i.ytimg.com/vi/6Z2_V-5fE-M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwDpOA3nC69FlrVSaZyPS6B3rdDA'
            />
            <VideoRow 
                  views='3.2k views'
                  subs="1.5M"
                  description = 'new Mark angel description'
                  timestamp='1 hour ago'
                  channel='Mark Angel TV'
                  title='Lawanson Show Full Video - Season 5 - (Mark Angel TV)'
                  image='https://i.ytimg.com/vi/6Z2_V-5fE-M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwDpOA3nC69FlrVSaZyPS6B3rdDA'
            />
            <VideoRow 
                  views='3.2k views'
                  subs="1.5M"
                  description = 'new Mark angel description'
                  timestamp='1 hour ago'
                  channel='Mark Angel TV'
                  title='Lawanson Show Full Video - Season 5 - (Mark Angel TV)'
                  image='https://i.ytimg.com/vi/6Z2_V-5fE-M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwDpOA3nC69FlrVSaZyPS6B3rdDA'
            />
            <VideoRow 
                  views='3.2k views'
                  subs="1.5M"
                  description = 'new Mark angel description'
                  timestamp='1 hour ago'
                  channel='Mark Angel TV'
                  title='Lawanson Show Full Video - Season 5 - (Mark Angel TV)'
                  image='https://i.ytimg.com/vi/6Z2_V-5fE-M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwDpOA3nC69FlrVSaZyPS6B3rdDA'
            />
        </div>
    );
}

export default SearchPage;