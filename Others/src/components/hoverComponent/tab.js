import React, { Component } from 'react';

// var createReactClass = require('create-react-class');

class Tab extends Component {
     constructor(props) {
        super(props);

         this.setState=this.setState.bind(this);
         this.onMouseEnterHandler=this.onMouseEnterHandler.bind(this);
         this.onMouseLeaveHandler=this.onMouseLeaveHandler.bind(this);
         this.onMouseClickHandler=this.onMouseClickHandler.bind(this);
        this.state = {
            hover: false,
            click:false

        };
        
    }

    onMouseEnterHandler() {
        this.setState({
            hover: true,
            click:this.state.click
        });
        
    }
    onMouseLeaveHandler() {
        this.setState({
            hover: false,
            click:this.state.click
        });
        
       
    }

    onMouseClickHandler(){
        this.setState({
            hover:this.state.hover,
            click:true

        });
    }
    render() {
        //console.log(this.props.htmlFor);
        var tabStyle="";
        var tabText="";
        tabText = this.props.htmlFor;
        tabStyle = 'switchDefault';
        if(this.state.hover) {

            tabStyle = 'switchHover';
        }
        if(this.state.click) {

             tabStyle = 'switchClick';
        }        
        return (
            
        <ul className='singleTab'>
        
             <div className={tabStyle} 
            onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}
            onClick={this.onMouseClickHandler}>             
            {tabText}
            </div>
            <hr style={{display: 'none'}}/>

        </ul>
           
            
        );
    }
}

export default Tab;