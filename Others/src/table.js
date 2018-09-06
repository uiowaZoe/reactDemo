import React from 'react';
/**
 * 输出组件
 */
export default class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    un: 'Jacky',
                    phone: '13566',
                    age: 21
                },
                {
                    un: 'Mary',
                    phone: '132222',
                    age: 20
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <table className='table-info'>
                    
                    <Tbody data={this.state.data}/>
                </table>
            </div>
        )
    }
}

/**
 * tbody
 * 关键点是使用props来传递单向数据流。通过遍历从`props传来的数据data`生成表格的每一行数据
 */
class Tbody extends React.Component{
    render() {
        return (
            <tbody>
            {this.props.data.map(function (user, index) {
                return <Item data={user} key={user.phone} index={index}/>
            })}
            </tbody>
        )
    }
}
/**
 * td
 * 每一行都需设置unique "key" prop
 */
class Item extends React.Component{
    render() {
        var key = this.props.key;
        var index = this.props.index;
        var data = this.props.data;

        return (
            <tr key={key}>
            <th>Header</th>
                <td >{index + 1}</td>
                <td>{data.un}</td>
                <td>{data.phone}</td>
                <td>{data.age}</td>
            </tr>
        )
    }
}