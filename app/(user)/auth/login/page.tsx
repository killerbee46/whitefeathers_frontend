import LoginForm from '@/app/components/Forms/LoginForm'
import AuthLayout from '@/app/layouts/AuthLayout'
import { Typography } from 'antd'
import React from 'react'

const page = () => {
  return (
    <AuthLayout type="Sign In">
        <LoginForm />
    </AuthLayout>
  )
}

export default page