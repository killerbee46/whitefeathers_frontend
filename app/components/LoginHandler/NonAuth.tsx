import { Button, Flex, Space, Typography } from 'antd'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const NonAuth = () => {
  const router = useRouter()
  return (
    <div className='w-[100%] p-5'>
        <Space direction='vertical' size={'small'}>
            <Typography.Title level={4} className='!m-0'>Your Account</Typography.Title>
            <Typography.Paragraph>Login/Register to access your account</Typography.Paragraph>
        </Space>
        <Flex justify='space-around' className='w-full !my-2'>
        <Link href={'/auth/login'}>
        <Button className='button primary'>Login</Button>
        </Link>
        <Link href={'/auth/register'}>
        <Button className='button secondary'>Register</Button>
        </Link>
    </Flex>
    </div>
  )
}

export default NonAuth