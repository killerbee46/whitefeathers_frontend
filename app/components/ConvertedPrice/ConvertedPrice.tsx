import { currencyValues, myCurrency } from '@/app/utils/userCurrency'
import { Flex } from 'antd'
import React from 'react'

const ConvertedPrice = ({pri,dis}:any) => {
    const myCurr = myCurrency
    const currValues = currencyValues

    const price = parseInt(pri)
    const discount = parseInt(dis)
  return (
    <Flex className='flex-wrap' vertical>
        <Flex gap={4} align='baseline'>
            <span className='uppercase text-xs'>{myCurr}</span>
        <span className='text-lg font-semibold'>{(price/currValues[myCurr]).toFixed()}</span>
        </Flex>
        <Flex  gap={4} className='line-through !text-slate-400' align='baseline'>
            <span className='uppercase text-xs'>{myCurr}</span>
        <span>{((price+discount)/currValues[myCurr]).toFixed()}</span>
        </Flex>
    </Flex>
  )
}

export default ConvertedPrice