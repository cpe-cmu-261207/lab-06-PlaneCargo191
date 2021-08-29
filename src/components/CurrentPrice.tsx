import { useState, useEffect } from 'react';

type CurrencyDetail = {
    code: string,
    rate: string,
    desciption: string
    rate_float: string
}

type Currency = {
    USD: CurrencyDetail,
    THB: CurrencyDetail
}

type Time = {
    updated: string
    updatedISO: string,
    updatedduk: string
}

type Current = {
    time: Time,
    disclaimer: string,
    bpi: Currency
}

const CurrentPrice = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [show, setShow] = useState<Current | null>(null)

    useEffect(() => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice/thb.json')
        .then(resp => resp.json())
        .then(data => {setLoading(false); setShow(data)})
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
                    <p className='text-2xl'>ERROR</p>
                </div>
            )
        } else {
            return (
                <div className='text-center space-y-3'>
                    <p className='text-2xl font-semibold'>Current Price</p>
                    <p className='text-2xl'>{show?.bpi.THB.rate_float.toLocaleString()} THB</p>
                    <p> (Last Updated - {show?.time.updated}) </p>
                </div>
            )
        }
    }

    return (
        render()
    )
}

export default CurrentPrice