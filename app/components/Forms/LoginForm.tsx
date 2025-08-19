'use client'
import { Button, Col, Flex, Form, Input, Row, Space, Typography } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { useState } from 'react'
import '../../styles/_form.scss'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type LoginTypes = {
    email: String;
    password: String;
}

type LoginDataTypes = {
    closeForm?: () => void;
    switchForm?: (e:string) => void;
}

const LoginForm = ({ closeForm, switchForm=(e)=>console.log("error") }: LoginDataTypes) => {
     const [form] = useForm()
  const router = useRouter()
  const [error, setError] = useState('')
//   const {mutate,isPending:loading} = useMutation({
//     mutationFn:requestLogin,
//     onSuccess: async(data, variables) => {
//     //   await storeLogin(data)
//       router.replace(window.location.pathname)
//     },
//     onError: (error:any) => {
//       // An error happened!
//         setError(error?.response?.data?.message+ " !")
//     },
//   })

  const onFinish = (values:any) => {
    console.log(values, "login values")
// mutate(values)
  }
    return (
        <>
            <Form form={form} onFinish={onFinish} layout='vertical' className='wf_form !p-2 !px-5'>
                <Form.Item name={'email'} label="Email">
                    <Input type='email' />
                </Form.Item>
                <Form.Item name={'password'} label="Password">
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Row gutter={20} justify='space-between' align={'middle'} className='!mt-4 !-mb-4'>
                        <Col xs={24} md={12}>
                        <Space direction='vertical'>
                            <Link href={'/forgot-password'} className='text danger'>Forgot Your Password ?</Link>
                            <Typography.Paragraph onClick={()=>switchForm("register")} className='text primary cursor-pointer'>Don't Have an Account ?</Typography.Paragraph>
                        </Space>
                        </Col>
                        <Col span={24}></Col>
                        <Col xs={24} md={12}>
                        <Flex gap={20} className='w-full justify-end'>
                            <Button onClick={closeForm} className='button danger'>Cancel</Button>
                            <Button htmlType='submit' className='button success'>Login</Button>
                        </Flex>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        </>
    )
}

export default LoginForm