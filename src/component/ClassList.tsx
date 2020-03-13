import React, { Component, Fragment } from 'react'
import List from "./List"
interface Props {

}
/**
 * @description  制定接口中数据类型
*/
interface State {
    placeholders: string;
    inputValue: string;
    todoList: {
        id: string;
        value: string;
        type: Boolean;
    }[]

}

export default class classList extends Component<Props, State> {
    constructor(Props: Props) {
        super(Props)
        this.state = {
            placeholders: "请输入要添加事项  ",
            inputValue: "",
            todoList: [
                {
                    id: Math.random().toString(),
                    value: "ts",
                    type: true
                }, {
                    id: Math.random().toString(),
                    value: "hooks",
                    type: true
                }
            ]
        }
    }

    inputValueclick(e: any): void {
        const inputValue = e.target.value
        this.setState({ inputValue })
    }

    submit() {
        const todoList = this.state.todoList
        todoList.push({
            id: Math.random().toString(),
            value: this.state.inputValue,
            type: true
        })
        this.setState({ todoList ,inputValue:""})
    }

    deleteClick(e: any): void {
        const { todoList } = this.state
        todoList.splice(e, 1)
        this.setState({ todoList })
    }
    render() {
        return (
            <Fragment>
                <input
                    value={this.state.inputValue}
                    onChange={this.inputValueclick.bind(this)}
                    placeholder={this.state.placeholders}
                /><button onClick={this.submit.bind(this)}>添加</button>
                <List listProps={this.state.todoList} deleteClick={this.deleteClick.bind(this)}></List>
            </Fragment>
        )
    }
}
