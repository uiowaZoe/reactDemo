import React, { Component } from 'react';
//import Hover from '../hoverComponent/hover';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// }from 'react-router-dom';
//<div className='menu'>This is a menu</div>
//<div className='caption'>This is a Caption</div>

class headline extends Component {
  render() {
    return (
<div>
	
  <div className='headline important'>An article from Google</div>
  <div className='title'>A Trek through Search trends, starring popular films and Croc-ular shoes</div>
 <div className='caption'>
 <div>Published Aug 10, 2018</div>
 <div>Charlotte Smith</div>
<div>Shrewd Shoe Shopper</div>
</div>
  <div className='article'>
  <div className='body_text level_second'>
  If there was a category for “popular shoe,” 
  would Crocs be nominated? Take a minute to think about that, 
  while we take you through a few of the most-searched trends of
   the week:
  </div>
  <div style={{height:5+'em'}}></div>
<div className='menu level_first'>This guy knows how to live long and prosper</div>

<div className='body_text level_second'>Patrick Stewart is reprising his role as Star Trek’s Captain Jean Luc Picard in a new spinoff,
 which caused the largest spike in Star Trek searches in the past 12 months (up 150 percent). There was a 2,200 percent spike in searches for 
 “Patrick Stewart return to Star Trek” in the wake of the announcement, along with the top-searched question: 
 “Who was Patrick Stewart’s competition for Star Trek?” (Apparently there’s not much competition, he keeps coming back for more!) 
</div>
<div style={{height:5+'em'}}></div>
<div className='menu level_first'>When the rubber hits the runway</div>

<div className='body_text level_second'>Searches for “Crocs going out of business” went up 4,700 percent this week, signaling that fashion offenders everywhere were in a panic (they eventually breathed a sigh of relief after the company confirmed it’s here to stay despite closing down a few manufacturing facilities). Search interest in Crocs surpassed search interest in Uggs (usually the more-searched brand) by 180 percent over the past week in the U.S. And top regions searching for the infamous footwear this week include West Virginia, Maine and North Carolina. 
</div>
</div>

<div className='caption' style={{top:10+'em'}}>POSTED IN: 
<a className='link_text'>HIGH FIVE</a></div>
  

  </div>
  
    );
  }
}

export default headline;
