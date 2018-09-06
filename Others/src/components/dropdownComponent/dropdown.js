 import { Menu , Dropdown} from 'antd';
import React, { Component } from 'react';

class DropdownEle extends Component {

    render() {
		// var Menu = antd.Menu;
		// var Dropdown = antd.Dropdown;
		var onSelect = function ({key}){
		  alert('选中了菜单' + key);
		};

		var menu = <Menu onSelect={onSelect}>
		  <Menu.Item key="1">第一个菜单项</Menu.Item>
		  <Menu.Item key="2">第二个菜单项</Menu.Item>
		  <Menu.Item key="3">第三个菜单项</Menu.Item>
		</Menu>;
		  

		return (
		  <Dropdown overlay={menu}>
		    <button className="ant-btn ant-btn-menu">
		      鼠标移入，点击菜单
		       <i className="anticon anticon-down">
		       </i>
		    </button>
		  </Dropdown>
		            
		);
    }
}
export default DropdownEle;