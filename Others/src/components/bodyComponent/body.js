import React, { Component } from 'react';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// }from 'react-router-dom';

class Body extends Component {
  render() {
    return (
<div>
	
  <div className='important body_text'>
     Show important news here
  </div>

  <div className='level_first body_text'>
      First level
  </div>

  <div className='level_second body_text'>
      Second level
  </div>

   <a className='body_text link_text'>
      Click here you will move to another site.^-^
  </a>
  
</div>
    );
  }
}

export default Body;