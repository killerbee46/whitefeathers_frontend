'use client'
import { Button, Col, Flex, Form, Input, Row, Space, Typography } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React from 'react'
import '../../styles/_form.scss'

type RegisterTypes = {
    email: String;
    password: String;
}

type RegisterDataTypes = {
    closeForm?: () => void;
    switchForm?: (e: string) => void;
}

const RegisterForm = () => {
    const [form] = useForm()

    const onSubmit = (values: RegisterTypes) => {
        console.log(values)
    }
    return (
        <>
            <Form layout='vertical' className='wf_form !p-3 !md:p-5 !py-1'>
                <Form.Item name={'name'} label="Name">
                    <Input />
                </Form.Item>
                <Form.Item name={'email'} label="Email">
                    <Input type='email' />
                </Form.Item>
                <Form.Item name={'phone'} label="Phone">
                    <Input />
                </Form.Item>
                <Form.Item name={'adress'} label="Adress">
                    <Input />
                </Form.Item>
                <Form.Item name={'password'} label="Password">
                    <Input.Password />
                </Form.Item>
                <Form.Item name={'confirm-password'} label="Confirm Password">
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Flex gap={20} justify='space-between' align='baseline' className='!mt-2'>
                        <Typography.Link href='/auth/login' className='text primary cursor-pointer'>Have an Account?</Typography.Link>
                        <Button className='button success'>Register</Button>
                    </Flex>
                </Form.Item>
            </Form>
        </>
    )
}

export default RegisterForm