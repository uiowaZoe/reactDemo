import React from "react";
import ReactDOM from "react-dom";
import "./Assets/list.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import InfinityMenu from "./Assets/list";
import ThemeSwitcher from "./Assets/boo_list.js";
import {Glyphicon, Button} from "react-bootstrap";
// import "//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css";

import "./Assets/css/font.css";
class App extends React.Component {

	componentWillMount() {
		const tree = [
			{
				name: "Menu1",
				id: 0,
				isOpen: false,
				children: [
					{
						name: "SubMenu1-1",
						id: 0,
						isOpen: false,
						children: [
							{
								name: "Sub-SubMenu1-1",
								id: 0
							},
							{
								name: "Sub-SubMenu1-2",
								id: 1
							},
							{
								name: "Sub-SubMenu1-3",
								id: 2
							},
							{
								name: "Sub-SubMenu1-4",
								id: 3
							},
							{
								name: "Sub-SubMenu1-5",
								id: 4
							},
							{
								name: "Sub-SubMenu1-6",
								id: 5
							},
							{
								name: "Sub-SubMenu1-7",
								id: 6
							},
							{
								name: "Sub-SubMenu1-8",
								id: 7
							},
							{
								name: "Sub-SubMenu1-9",
								id: 8
							},
							{
								name: "Sub-SubMenu1-99",
								id: 9
							},
							{
								name: "Sub-SubMenu1-999",
								id: 10
							}
						]
					},
					{
						name: "SubMenu2-1",
						id: 1,
						children: [
							{
								name: "Sub-SubMenu2-1",
								id: 0
							}
						]
					}
				]
			},
			{
				name: "Menu2",
				id: 1,
				isOpen: false,
				children: [
					{
						name: "SubMenu2-1",
						id: 0
					},
					{
						name: "SubMenu2-2",
						id: 1
					},
					{
						name: "SubMenu2-3",
						id: 2
					}
				]
			},
			{
				name: "Menu3",
				id: 2,
				isOpen: false,
				children: [
					{
						name: "SubMenu3-1",
						id: 0
					},
					{
						name: "SubMenu3-2",
						id: 1
					}
				]
			}
		];
		this.setState({
			tree: tree
		});
	}

	onNodeMouseClick(event, tree) {
		this.setState({
			tree: tree
		});
	}

	render() {
		return (
			<div>
			<InfinityMenu
				tree={this.state.tree}
				onNodeMouseClick={this.onNodeMouseClick.bind(this)}
				maxLeaves={2}
			/>
			
			</div>

		);
	}
}
ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.render(<ThemeSwitcher />, document.getElementById('root'));
// registerServiceWorker();

// ReactDOM.render(buttonsInstance);
// ReactDOM.render(buttonsInstance, document.getElementById('root'));
// registerServiceWorker();
