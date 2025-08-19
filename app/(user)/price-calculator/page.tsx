'use client'
import MaterialForm from '@/app/components/MaterialForm/MaterialForm'
import UserLayout from '@/app/layouts/UserLayout'
import API from '@/app/wf-api/Api'
import { sqlCalculatePrice } from '@/app/wf-api/CalculatePrice'
import { getMaterials, getMetalsByMaterial } from '@/app/wf-api/ProductApi'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Button, Card, Col, Form, Input, InputNumber, Row, Select, Space } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { useEffect, useState } from 'react'

const PriceCalculator = () => {
  const [form] = useForm()


  const { mutate, isPending: submitting } = useMutation({
    mutationFn: sqlCalculatePrice,
    // onSuccess: async(data, variables) => {
    // //   await storeLogin(data)
    //   router.replace(window.location.pathname)
    // },
    // onError: (error:any) => {
    //   // An error happened!
    //     setError(error?.response?.data?.message+ " !")
    // },
  })

  const onFinish = (values: any) => {
    const formData = { ...values }
    mutate(formData)
  }

  return (
    <UserLayout>
      <div className='px-5 md:px-5 xl:px-10 py-5'>
        <Card title="Price Calculator">
          <Form
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            autoComplete="off"
            layout='vertical'
            initialValues={{ materials: [{}] }}
          >
            <Form.List name="materials">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field, i) => (
                      <MaterialForm someKey={field?.key} name={field?.name} removeMaterial={() => remove(field?.name)} />
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                      Add Material
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
            <Form.Item style={{ marginTop: 20 }}>
              <Button loading={submitting} type="primary" htmlType="submit">
                {submitting ? "Calculating" : "Calculate"}
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </UserLayout>
  )
}

export default PriceCalculator