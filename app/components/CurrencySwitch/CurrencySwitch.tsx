import { Button, Flex, Image, Select } from 'antd'
import React, { useEffect } from 'react'
import './CurrencySwitch.scss'
import useLocalStorage from 'use-local-storage'
import { useRouter } from 'next/navigation'

const CurrencySwitch = () => {
    const router = useRouter()
    const [value, setValue] = useLocalStorage('currency', 'npr')

useEffect(()=> {
    router.refresh()
},[value])

    const options = [
        {
            label: <Flex align='middle' gap={5}><Image style={{width:20, height:20}} preview={false} src={'/nep.png'} alt='f' />NPR</Flex>,
            value: "npr"
        },
        {
            label: <Flex align='middle' gap={5}><Image style={{width:20, height:20}} preview={false} src={'/usd.png'} alt='f' />USD</Flex>,
            value: "usd"
        },
        {
            label: <Flex align='middle' gap={5}><Image style={{width:22, height:22}} preview={false} src={'/aus.png'} alt='f' />AUD</Flex>,
            value: "aud"
        },
        {
            label: <Flex align='middle' gap={5}><Image style={{width:20, height:20}} preview={false} src={'/eur.png'} alt='f' />EUR</Flex>,
            value: "eur"
        },
    ]

    return (
    <Button className='select-button'>
        <Select onChange={(e)=> setValue(e)} suffixIcon={null} className='currency-selector' style={{ width: 90 }} defaultValue={value} options={options} />
    </Button>    
    )
}

export default CurrencySwitch