// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';

type Props = {
  children: any,
  show: boolean,
  timer?: number
}

type State = {
  showSnackBar: boolean,
  timer: number
}

export default class ModelessBar extends Component<Props, State> {
  constructor(props: Object) {
    super(props);
    this.state = {
      showSnackBar: this.props.show,
      timer: this.props.timer || 4000
    };
  }

  componentWillReceiveProps(nextProps: Object) {
   
    var {showSnackBar, timer} = this.state;
    if (showSnackBar !== nextProps.show) {
      this.setState({
        showSnackBar: nextProps.show,
        timer: nextProps.timer
      }, () => {
        setTimeout(() => {
          this.setState({ showSnackBar: false });
        }, timer);
      });
    }
  }

  render() {
    // const { show } = this.props;
    const { showSnackBar } = this.state;
    
    const snackbarStyle = {
      position: 'fixed',
      left: '20px',
      bottom: '20px',
      background: '#9e9e9e',
      color: '#fff',
     
      padding:'4px',
      height:'25px',
      width:'186px',
      fontSize: '14px',
      opacity: 0,
      borderRadius: '3px',
      display: '-webkit-box',
      // display: '-ms-flexbox',
      display: 'flex',
      WebkitBoxAlign: 'center',
      msFlexAlign: 'center',
      alignItems: 'center',
      WebkitBoxPack: 'justify',
      msFlexPack: 'justify',
      justifyContent: 'space-between',
      lineHeight: '33px',
      fontFamily:'Regular MrEaves',
      textAlign:'left',
      MsTransform: 'scaleX(1.2)',/*IE9*/
MozTransform: 'scaleX(1.2)',/*Firefox*/
WebkitTransform: 'scaleX(1.2)',/*Safari 和 Chrome*/ 
    };
    if (showSnackBar && this.props.htmlFor !== 'tips') {
      snackbarStyle.opacity = 1;
      snackbarStyle.transform = 'translateY(0)';
    }

    if(showSnackBar && this.props.htmlFor === 'tips'){
      snackbarStyle.opacity = 0.6;
      snackbarStyle.background='#5cd2bc';
      snackbarStyle.transform = 'translateY(0)';
    }

    return (
      <div style={snackbarStyle}>
        {this.props.children}
      </div>
    );
  }
};

ModelessBar.propTypes = {
  show: PropTypes.bool.isRequired,
  timer: PropTypes.number
};
