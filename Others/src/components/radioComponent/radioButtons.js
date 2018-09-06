import React, { Component } from 'react';
import PropTypes from 'prop-types';

function getInitialCheckedIndex(children) {
  let checkedIndex;

  for (let i = 0; i < children.length; i++) {
    if (!children[i].props.disabled) {
      checkedIndex = i;
      break;
    }
  }

  return checkedIndex;
}

export class RadioGroup extends Component {
  constructor({ children, value }) {
    super();

    const index = children.findIndex(c => c.props.value === value);
    let checkedIndex 
    if (value === undefined)    // This is the case where it is not specified
      checkedIndex = -1 
    else {
      if (index > -1 && !children[index].props.disabled)
        checkedIndex = index 
      else 
        checkedIndex = getInitialCheckedIndex(children)
    }
    this.state = { checkedIndex: checkedIndex };

    this.renderChild = this.renderChild.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  get value() {
    const { checkedIndex } = this.state;
    const { children } = this.props;

    const child = children.find(c => c.props.index === checkedIndex);
    return (child && child.props.value )|| '';
  }

// This is the case to handle late arriving props, 
// and set the state according to the value
// as long as it's not disabled
  componentWillReceiveProps(nextProps) {
    const children = this.props.children
    const index = children.findIndex(c => c.props.value === nextProps.value && !c.props.disabled);
    if (index !== -1 && index !== this.state.checkedIndex) {
      this.setState({ checkedIndex: index });
    }
  }

  onChange(index) {
    const { onChange, children } = this.props;
    const child = children[index];
    if (!child) return;

    this.setState({ checkedIndex: index });
    onChange && onChange(child.props.value || '');
  }

  renderChild(child, index, checked) {
    const { children, horizontal } = this.props;
    return React.cloneElement(child, {
      horizontal, index, checked,
      key: index,
      last: index === children.length - 1,
      onChange: this.onChange, ...child.props
    });
  }

  render() {
    const { checkedIndex } = this.state;
    const { horizontal, children, ...props } = this.props;
    const style = horizontal ? { display: 'inline-flex', width: '100%' } : {};
    return (
      <div style={style} {...props}>
        {
          children.map((c, i) => (this.renderChild(c, i, i === checkedIndex)))
        }
      </div>
    );
  }
}

RadioGroup.propTypes = {
  horizontal: PropTypes.bool,
  children: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export class RadioButton extends Component {
  constructor() {
    super();
    this.state={
      hover:false
    }
    this.getStyles = this.getStyles.bind(this);
    this.onClick = this.onClick.bind(this);
  }
 
  getStyles() {
    const {checked, horizontal, last, padding, rootColor, pointColor, disabled, disabledColor, label } = this.props;
    
    return {
      root: {
        cursor: disabled ? 'not-allowed' : 'pointer',
        color: this.state.hover && !checked? '#57616b':'#98a19f',
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: disabled ? (disabledColor || '#e1e1e1') : (rootColor || '#98a19f'),
        borderRadius: 1,
        padding: padding || 4,
        flex: 1,
        marginBottom: horizontal ? 0 : label ? (padding || 15) / 2 : (padding || 15),
        marginRight: horizontal && !last ? (padding || 16) / 2 : 0,
      },
      label: {
        color:'#5cd2bc',
        borderStyle: 'solid',
        padding: padding || 4,
        marginBottom: horizontal ? 0 : (padding || 4),
        marginRight: horizontal && !last ? (padding || 4) / 2 : 0
      },
      checked: {
        borderColor: pointColor || '#98a19f',
        color: pointColor || '#5cd2bc',
      },
    };
  }

  onClick() {
    const { onChange, checked, index, disabled } = this.props;
    !disabled && onChange && onChange(index);
  }

  onHover(){
    this.setState({
      hover: true
    });

  }
  remHover(){
    this.setState({
      hover:false
    })
  }

  render() {
    const { checked, iconSize, iconInnerSize, rootColor, pointColor, children, disabled, disabledColor, label } = this.props;
      

    const style = this.getStyles();
    const buttonStyle = Object.assign({}, style.root, checked ? style.checked : {});
    const labelStyle = Object.assign({}, style.root, style.label)

    // console.log(labelStyle);

    return (

      <div style={buttonStyle} onClick={this.onClick} onMouseEnter={this.onHover.bind(this)} onMouseLeave={this.remHover.bind(this)}>
        <div style={{ display: 'inline-flex', width: '100%' }}>
          <div style={{ flex: 1 }}>
            {children}
          </div>
          <RadioIcon size={iconSize} innerSize={iconInnerSize}
            checked={checked} rootColor={rootColor} pointColor={pointColor}
            disabled={disabled} disabledColor={disabledColor} hover={this.state.hover}
          />
        </div>
        {
         
            <div style={labelStyle}>
              <div>{label}</div>
            </div>
            
        }
      </div>
    );
  }
}

RadioButton.propTypes = {
  iconSize: PropTypes.number,
  iconInnerSize: PropTypes.number,
  padding: PropTypes.number,
  rootColor: PropTypes.string,
  pointColor: PropTypes.string,
  value: PropTypes.string,
  index: PropTypes.number,
  checked: PropTypes.bool,
  children: PropTypes.node,
  horizontal: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  disabledColor: PropTypes.string,
  label: PropTypes.string,
  hover:PropTypes.number
};

export class RadioIcon extends Component {
  constructor() {
    super();
    this.getStyles = this.getStyles.bind(this);
  }

  getStyles() {
    const {checked,  size, innerSize, rootColor, pointColor, disabled, disabledColor, marginRight,hover } = this.props;
  
    return {
      root: {
        width: size || 4,
        height: size || 4,
        padding: 3,
        background: hover && !checked? '#ffffff' :'#98a195',
        borderWidth: 2,
        borderRadius: '50%',
        borderStyle: 'solid',
        borderColor: hover && !checked? '#57616b':'#98a19f',
        marginRight: marginRight || 0,
        textAlign:'center'
      },
      checked: {
        borderColor: pointColor || '#5cd2bc',
        background:'#fff'
      },
      inner: {
        width: innerSize || 4,
        height: innerSize || 4,
        borderRadius: '50%',
        Margin:'auto',
      
        background: '#5cd2bc',
      }
    }
  }

  render() {
    const { checked } = this.props;

   
    const style = this.getStyles();
    const iconStyle = 
    Object.assign(style.root, checked ? style.checked : {});
    return (
      <div  style={iconStyle}>
        {checked && <div  style={style.inner} />}
      </div>
    );
  }
}

RadioIcon.propTypes = {
  size: PropTypes.number,
  innerSize: PropTypes.number,
  rootColor: PropTypes.string,
  pointColor: PropTypes.string,
  checked: PropTypes.bool,
  hover:PropTypes.bool,
  disabled: PropTypes.bool,
  disabledColor: PropTypes.string,
  marginRight: PropTypes.number,
};
