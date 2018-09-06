import React from 'react';
import ModelessBar from './ModelessComponents/ModelessBar';
import Button from './button';

class Toast  extends React.Component { 
  constructor() {
    super();
    this.state = {
      snackbar: false
    };

    this.showSnackBar = this.showSnackBar.bind(this);
    this.close = this.close.bind(this);
  }

  showSnackBar() {
    // const {snackbar} = this.state;
    this.setState({
      snackbar: true
    });
  }

  close() {
    this.setState({
      snackbar: false
    });
  }

  render() {
    const {snackbar} = this.state;
    return(<div style={{display:'inline-block'}}>
      
       <Button htmlFor='send' text='Show Toast' onClick={this.showSnackBar}/>     
      <ModelessBar show={snackbar} timer={3000}>
        <p>Searching ... </p>
      </ModelessBar>
    </div>);
  }


};



class TipsBar  extends React.Component { 
  constructor() {
    super();
    this.state = {
      snackbar: false
    };

    this.showSnackBar = this.showSnackBar.bind(this);
    this.close = this.close.bind(this);
  }

  showSnackBar() {
    // const {snackbar} = this.state;
    this.setState({
      snackbar: true
    });
  }

  close() {
    this.setState({
      snackbar: false
    });
  }

  render() {
    const {snackbar} = this.state;
    return(<div style={{display:'inline-block'}}>
      
       <Button htmlFor='restore' text='Show TipsBar' onClick={this.showSnackBar}/>     
      <ModelessBar htmlFor='tips' show={snackbar} timer={3000}>
        <p >Refreshed Already! </p>
         
      </ModelessBar>
    </div>);
  }


};

class SnackBar  extends React.Component { 
  constructor() {
    super();
    this.state = {
      snackbar: false
    };

    this.showSnackBar = this.showSnackBar.bind(this);
    this.close = this.close.bind(this);
  }

  showSnackBar() {
    // const {snackbar} = this.state;
    this.setState({
      snackbar: true
    });
  }

  close() {
    alert('close');
    this.setState({
      snackbar: false
    });
  }

  render() {
    const {snackbar} = this.state;
    return(<div style={{display:'inline-block'}}>
      
       <Button htmlFor='restore' text='Show SnackBar' onClick={this.showSnackBar}/>     
      <ModelessBar show={snackbar} timer={6000}>
        <p>Added to cart ~ </p>
        <span style={{"float": "right", marginLeft: "20px", cursor: "pointer", color: "#3d77ea"}} onClick={this.close}>Undo</span>
      </ModelessBar>
    </div>);
  }


};

 export  {Toast, SnackBar,TipsBar};