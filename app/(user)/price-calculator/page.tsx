'use client'
import MaterialForm from '@/app/components/MaterialForm/MaterialForm'
import UserLayout from '@/app/layouts/UserLayout'
import { sqlCalculatePrice } from '@/app/wf-api/CalculatePrice'
import { getMaterials } from '@/app/wf-api/ProductApi'
import { PlusOutlined } from '@ant-design/icons'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Button, Card, Col, Divider, Flex, Form, message, Row, Typography } from 'antd'
import React, { useState } from 'react'

const PriceCalculator = () => {
  const [prices, setPrices] = useState<any>(null)
  const [messageApi, contextHolder] = message.useMessage()

  const { data: mat, isFetching: matFetching } = useQuery({ queryKey: ['materials'], queryFn: getMaterials })
    const materials = mat?.data?.data?.map((m: any) => ({ label: m?.pm_name, value: m?.pm_id }))

  const { mutate, isPending: submitting } = useMutation({
    mutationFn: sqlCalculatePrice,
    onSuccess: async (data: any) => {
      setPrices(data?.data?.data)
    },
    onError: (error: any) => {
      messageApi.error(error?.response?.data?.message + " !")
    },
  })

  const onFinish = (values: any) => {
    const formData = { ...values }
    mutate(formData)
  }

  const clearPrices = () => {
    setPrices(null)
  }

  return (
    <UserLayout>
      {contextHolder}
      <div className='px-5 md:px-5 xl:px-10 py-5'>
        <Card title="Price Calculator" className='wf-card'>
          <Form
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            autoComplete="off"
            layout='vertical'
            initialValues={{ materials: [{}] }}
            className='wf_form !p-5'
          >
            <Form.List name="materials">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field) => (
                    <MaterialForm materials={materials} materialsLoading={matFetching} clearPrices={clearPrices} someKey={field?.key} name={field?.name} removeMaterial={() => remove(field?.name)} />
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                      Add Material
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
            <Divider className='m-0' />
            <Form.Item style={{ marginTop: 20 }}>
              <Row justify={prices ? 'space-between' : 'end'}>
                {
                  prices &&
                  <Col style={{ fontSize: '16px !important' }}>
                    <Flex align='center' gap={10}>
                      <Typography.Paragraph>Total Price: </Typography.Paragraph>
                      <Typography.Paragraph>
                        Rs. {prices?.totalPrice}
                        {/* <ConvertedPrice normal pri={prices?.totalPrice} /> */}
                      </Typography.Paragraph>
                    </Flex>
                    <Flex align='center' gap={10}>
                      <Typography.Paragraph>Discount: </Typography.Paragraph>
                      <Typography.Paragraph>
                        Rs. {prices?.discount || 0}
                        {/* <ConvertedPrice normal pri={prices?.discount || 0} /> */}
                      </Typography.Paragraph>
                      <Typography.Paragraph></Typography.Paragraph>
                    </Flex>
                    <Divider style={{ margin: 0, marginBottom: 10 }} className='bg-slate-300' />
                    <Flex align='center' gap={10}>
                      <Typography.Paragraph>Grand Total: </Typography.Paragraph>
                      <Typography.Paragraph>
                        Rs. {prices?.finalPrice}
                        {/* <ConvertedPrice normal pri={prices?.finalPrice} /> */}
                      </Typography.Paragraph>
                    </Flex>
                  </Col>
                }
                <Col>

                  <Button className='button success' loading={submitting} htmlType="submit">
                    {submitting ? "Calculating" : "Calculate"}
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </UserLayout>
  )
}

export default PriceCalculator