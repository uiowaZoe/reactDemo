// /* eslint no-console:0 */

import React from 'react';
// import ReactDOM from 'react-dom';
import { RadioGroup, RadioButton } from './radioComponent/radioButtons';
class RadioBox extends React.Component {


  render() {  
    return (
      <div className = 'radioBox-area'>
      <RadioGroup onChange={ this.onChange }  >
  <RadioButton value="apple">
    Apple
  </RadioButton>
  <RadioButton value="orange" >
    Orange
  </RadioButton>
  <RadioButton value="melon" >
    Melon
  </RadioButton>
</RadioGroup>
</div>
      );
  }
}

export default RadioBox;