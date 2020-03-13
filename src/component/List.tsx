import React, { Component,Fragment } from 'react'

interface Props {
    listProps:any[]   
    deleteClick:Function
}
interface State {
    
}

export default class List extends Component<Props, State> {
    constructor(props:Props){
        super(props)
    }
    deleteClicks(e:any):void{
       this.props.deleteClick(e)
    }
    render() {
        return (
            <Fragment>
                {
                    this.props.listProps.map((item,index)=>{
                       return (
                       <li key={index}>{item.value} <button onClick={this.deleteClicks.bind(this,index)}>删除</button></li>
                       )
                    })
                }
            </Fragment>
        )
    }
}
