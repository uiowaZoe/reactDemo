import React, { Component } from 'react';
import logo from './logo.svg';
import Table from './table';
import {AlertDialog, SubmitDialog} from './components/popup';
import './Assets/css/font.css';
import './Assets/css/button.css';
import './Assets/css/input.css';
import './Assets/css/upload.css';
import './Assets/css/radio.css';
import './Assets/css/popup-dialog.css';
import UploadFile from './components/uploadFile';
import RadioBox from './components/radio';
import {Toast,SnackBar, TipsBar} from './components/popbar';
import './App.css';
import Inputline from './components/input';
import Demo from './components/calendar';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Table className='table-area'/>
        <div className='space_vertical'></div>
        <SubmitDialog />
        <div className='space_horizontal'></div>
        <AlertDialog />

        <div className='space_horizontal'></div>
        <Toast />
        <div className='space_horizontal'></div>
        <TipsBar />
         <div className='space_horizontal'></div>
         <SnackBar />
         <div className='space_vertical'></div>
         <Inputline label='LabelText'/>
         <div className='space_vertical'></div>
         <UploadFile />
         <div className='space_vertical'></div>
         <RadioBox />
         <div className='space_horizontal'></div>
         <Demo />
      </div>
    );
  }
}

export default App;
