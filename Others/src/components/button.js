import React, { Component } from 'react';

// var createReactClass = require('create-react-class');

class Button extends Component {
     constructor(props) {
        super(props);

         this.setState=this.setState.bind(this);
         this.onMouseEnterHandler=this.onMouseEnterHandler.bind(this);
         this.onMouseLeaveHandler=this.onMouseLeaveHandler.bind(this);
        this.state = {
            hover: false
        };
        
    }
    //current = this;


//  {this.props.children}
    getInitialState() {
        return {
            hover: false
        };
    }
    onMouseEnterHandler() {
        this.setState({
            hover: true
        });
        
    }
    onMouseLeaveHandler() {
        this.setState({
            hover: false
        });
        
       
    }
    render() {
        //console.log(this.props.htmlFor);
        var buttonStyle="";
        var buttonText="";
        if(this.props.htmlFor === 'submit'){
           buttonText = 'Submit';
            buttonStyle = 'submitDefault';
            if(this.state.hover) {

                buttonStyle = 'submitHover';
            }
        }

        if(this.props.htmlFor === 'send'){
           buttonText = 'Send';
            buttonStyle = 'submitDefault';
            if(this.state.hover) {

                buttonStyle = 'submitHover';
            }
        }


        if(this.props.htmlFor === 'cancel'){
            buttonStyle ='cancelDefault';
            buttonText = 'Cancel';
            
            if(this.state.hover) {

                buttonStyle = 'cancelHover';
            }
        }

        if(this.props.htmlFor === 'restore'){
            buttonStyle ='restoreDefault';
            buttonText = 'Restore';
            
            if(this.state.hover) {

                buttonStyle = 'restoreHover';
            }
        }
        
        if(this.props.htmlFor === 'back'){
               buttonStyle ='backDefault';
            buttonText = 'Move Back';
            
            if(this.state.hover) {

                buttonStyle = 'backHover';
            }
        
        }

        

        
        return (
            
            
            <div className={buttonStyle} onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}
            onClick = {this.props.onClick}>

            {this.props.text}

            </div>
            

        
            
            
        );
    }
}

export default Button;