import React from 'react';

// var createReactClass = require('create-react-class');
class Inputline extends React.Component{
  constructor(props) {
      super(props);
      /* establish the initial state of the input field */
      this.setState=this.setState.bind(this);
    
      this.state = {
        inputValue: '',
        cursorState:'non_hover'
        
      }
    }
    /* update the input value in the virtual DOM */
   handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
   }

   clearFiled(event) {
    this.setState({
      inputValue: ""
    });
   }
  render() {

    // var value = this. state. inputValue;
    var style = 'inputBox';
    var tipStyle = 'no-tip';
    var labelStyle='label-origin';


    if(this.state.inputValue === "123"){
      style = 'invalidInput';
      tipStyle = 'show-tip';
      labelStyle = 'invalid-label';
    }


    return (
      <div className='inputComponent'>
        <div className='inputElement'>

          <input className= {style}
          value={this.state.inputValue}
          placeholder='LabelText' id='testInput'
          onChange={this.handleChange.bind(this)} /><br/>
          <label className={labelStyle}>LabelText</label>
     
        </div>
        <button className='clearButton' onClick={this.clearFiled.bind(this)}></button>
        <div className={tipStyle}>Invalid Information</div>
      </div>
    );
  }
};
export default Inputline;
 