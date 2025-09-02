'use client'
import { Button, Col, Flex, Form, Input, Row, Space, Typography } from 'antd'
import React, { useState } from 'react'
import '../../styles/_form.scss'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'antd/es/form/Form'
import { useMutation } from '@tanstack/react-query'
import { requestLogin } from '@/app/wf-api/AuthApi'

// type LoginTypes = {
//     email: String;
//     password: String;
// }

// type LoginDataTypes = {
//     closeForm?: () => void;
//     switchForm?: (e: string) => void;
// }

const LoginForm = () => {
    const [form] = useForm()
    const router = useRouter()
    const [error, setError] = useState('')
      const {mutate,isPending:loading} = useMutation({
        mutationFn:requestLogin,
        onSuccess: async(data, variables) => {
        //   await storeLogin(data)
          router.push("/")
        },
        onError: (error:any) => {
          // An error happened!
            setError(error?.response?.data?.message+ " !")
        },
      })

    const onFinish = (values: any) => {
        // console.log(values, "login values")
        mutate(values)
    }
    return (
        <Form form={form} onFinish={onFinish} layout='vertical' className='wf_form !p-2 !px-5'>
            <Form.Item name={'email'} label="Email">
                <Input />
            </Form.Item>
            <Form.Item name={'password'} label="Password">
                <Input.Password />
            </Form.Item>
            <Flex justify='end' className='!-mt-3 !pr-1 !pb-5'>
                <Link href={'/forgot-password'} className='text danger'>Forgot Password?</Link>
            </Flex>

            <Flex gap={20} justify='space-between' align='baseline' className='flex-wrap !pb-5'>
                <Typography.Link href='/auth/register' className='text primary cursor-pointer'>Don't have an account?</Typography.Link>
                <Form.Item className='!mb-0'>
                    <Button htmlType='submit' className='button success'>Login</Button>
                </Form.Item>
            </Flex>
        </Form>
    )
}

export default LoginForm