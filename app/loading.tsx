import { LoadingOutlined } from '@ant-design/icons'
import React from 'react'
import Logo from './components/Logo/Logo'

const loading = () => {
  return (
    <div className='h-[100%] w-[100%] flex justify-center items-center'>
      <LoadingOutlined style={{fontSize:30}} />
      <Logo src={'/wf-logo-small.svg'} noRedirect />
    </div>
  )
}

export default loading