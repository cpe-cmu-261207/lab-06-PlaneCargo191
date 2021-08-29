import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

type Time = {
    updated: string,
    updatedISO: string
}

type ResultType = {
    bpi: Record<string, number>,
    disclaimer: string,
    time: Time
}

type Results = {
    date: string,
    value: number
}

const Result = () => {
    const query = new URLSearchParams(useLocation().search)
    let sD = query.get('start')
    let eD = query.get('end')
    const [result, setResult] = useState<ResultType | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=THB&start=${sD}&end=${eD}`)
        .then(resp => resp.json())
        .then(data => {setLoading(false); setResult(data)})
        .catch(err => {setLoading(false); setError(true)})
    }, [])

    const render = () => {
        if(loading) {
            return (
                <div className='text-center space-y-3'>
                    <p className='text-2xl'>Loading ...</p>
                </div>
            )
        } else if(error) {
            return (
                <div className='text-center space-y-3'>
                    <p className='text-2xl font-semibold'>Historical Price</p>
                    <p className='text-2xl text-red-500'>ERROR</p>
                </div>
            )
        } else {
            let results: Results[] = []

            if(result?.bpi) {
                for(const [date, value] of Object.entries(result?.bpi)) {
                    results.push({date, value})
                }
            }

            return (
                <div className='text-center space-y-3'>
                    <p className='text-2xl font-semibold'>Historical Price</p>
                    <p className='text-xl font-semibold'>(From {sD} To {eD})</p>
                    <ul>
                        {results.map(x => <li className = 'text-xl' key = {x.date}>{x.date} : {x.value.toLocaleString()} THB</li>)}
                    </ul>
                </div>
            )
        }
    }

    return (
        render()
    )
}

export default Result