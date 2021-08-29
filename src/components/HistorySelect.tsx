import { useState } from "react"
import { useHistory } from "react-router-dom"
import Result from "./HistoryResult"

const Select = () => {
    let history = useHistory()
    const [start, setS] = useState('')
    const [end, setE] = useState('')

    const click = (start: string, end: string) => {
        let s = new Date(start)
        let e = new Date(end)
        if(start === '' || end === '' || e < s) {
            alert('Your Dates Selection is NOT Correct!')
        } else {
            history.push('result?start=' + start + '&end=' + end);
            <Result/>
        }
    }

    return (
        <div className='text-center space-y-3 space-x-3'>
            <p className='text-2xl font-semibold'>Select Historical Range</p>
            <span>From</span>
            <input type='date' onChange={ev => setS(ev.target.value)}></input>
            <span>To</span>
            <input type='date' onChange={ev => setE(ev.target.value)}></input>
            <br />
            <button onClick = {() => click(start, end)}>Get Data</button>
        </div>
    )
}

export default Select