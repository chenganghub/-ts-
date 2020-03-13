import React, { useState, Fragment } from 'react'

interface Props {

}

const Hookslist = (props: Props) => {
    const [inputValue, setvalue] = useState<any>("")
    const [lists, setList] = useState<any>(
        [{
            id: Math.random().toString(),
            value: "ts",
            type: true
        }]
    )
    const clickInput = (e: any): void => {
        const inputValue = e.target.value
        setvalue(inputValue)//????
    }

    const submit = (a: any): void => {
        const aaa = {
            id: Math.random().toString(),
            value: inputValue,
            type: true
        }
        setList([...lists, aaa])
        setvalue("")
    }

    const deleteClick = (index: number): void => {
        let [...newList] = lists
        newList.splice(index, 1)
        setList(newList)
    }
    return (
        <Fragment>
            <input value={inputValue} onChange={(e: any) => { clickInput(e) }} /><button onClick={(a: any) => { submit(a) }}>添加</button>
            {
                Array.isArray(lists) && lists.map((item: { value: string }, index: number) => {
                    return (
                        <li key={index}>{item.value} <button onClick={() => { deleteClick(index) }}>删除</button></li>
                    )
                })
            }

        </Fragment>
    )
}

export default Hookslist

