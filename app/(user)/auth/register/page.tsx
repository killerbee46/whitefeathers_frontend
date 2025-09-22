import RegisterForm from '@/app/components/Forms/RegisterForm'
import AuthLayout from '@/app/layouts/AuthLayout'
import React from 'react'

const page = () => {
  return (
    <AuthLayout type="Register">
        <RegisterForm />
    </AuthLayout>
  )
}

export default page