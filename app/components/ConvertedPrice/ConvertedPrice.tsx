import { Flex } from 'antd'
import React, { useEffect } from 'react'
import useLocalStorage from 'use-local-storage'

const defaultCurrValue = {
    usd:139,
    aud:91,
    eur:160,
    npr:1
}

const ConvertedPrice = ({ pri, dis, normal }: any) => {
  const [currency, setCurrency] = useLocalStorage('currency', 'npr')
  const [currValues, setCurrValues] = useLocalStorage<any>('currencyValues', defaultCurrValue)

  const price = parseInt(pri)
  const discount = parseInt(dis)
  return (
    <Flex className='flex-wrap' vertical>
      <Flex gap={4} align='baseline'>
        <span className={`uppercase text-xs`}>{currency}</span>
        <span className={`${normal ? "text-base" : "text-lg"} font-semibold`}>{(price / currValues[currency]).toFixed()}</span>
      </Flex>
      {
        dis && dis !== 0 ?
        <Flex gap={4} className='line-through !text-slate-400' align='baseline'>
          <span className={`uppercase text-xs`}>{currency}</span>
          <span>{((price + discount) / currValues[currency]).toFixed()}</span>
        </Flex> :
        null
      }
    </Flex>
  )
}

export default ConvertedPrice