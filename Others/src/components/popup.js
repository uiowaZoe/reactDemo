import React from 'react';
import Button from './button';


class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className={this.props.type}>
        
        <div  className='close_button' onClick={this.props.closePopup}></div>
        <div className='popup_info body1'>{this.props.text}</div>
        
         <div className='popup_button_div'>
           <Button htmlFor='back' text='Move Back'/>
           <div className='space_horizontal'></div>
            <Button htmlFor='submit' text='Got it'/>
        </div>
        </div>
      </div>
    );
  }
}
class SubmitDialog extends React.Component {
   constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div style={{display:'inline-block'}}>
        <Button htmlFor='submit' text='Notation' onClick={this.togglePopup.bind(this)}/>     
        
        {this.state.showPopup ? 
          <Popup text='You press the 
          submit button, and your request has been sent to the server successfully' 
          closePopup={this.togglePopup.bind(this)} type='popup_inner_notation'
          />
          : null
        }


      </div>
    );
  }
};

class AlertDialog extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div style={{display:'inline-block'}}>
        <Button htmlFor='cancel' text='Alert' onClick={this.togglePopup.bind(this)} />     
        
        {this.state.showPopup ? 
          <Popup text='You press the cancel button, 
          so you this alert' closePopup={this.togglePopup.bind(this)} type='popup_inner_alert'
          />
          : null
        }


      </div>
    );
  }
};

 export {AlertDialog, SubmitDialog};
