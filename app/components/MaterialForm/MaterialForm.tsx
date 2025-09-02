import { getMaterials, getMetalsByMaterial } from '@/app/wf-api/ProductApi'
import { CloseOutlined } from '@ant-design/icons'
import { useQuery } from '@tanstack/react-query'
import { Card, Row, Col, Form, Select, InputNumber, Flex } from 'antd'
import React, { useEffect, useState } from 'react'

const MaterialForm = ({ removeMaterial, someKey, name, clearPrices, materialsLoading, materials }: any) => {
  
  const [met, setMet] = useState<any>(null)
  const metals = met?.map((m: any) => ({ label: m?.pmt_name, value: m?.pmt_id }))
  const [selectedMat, setSelectedMat] = useState(0)
  const isDiamond = selectedMat === 1
  const isMetal = selectedMat !== 0 && (selectedMat > 1)

  const [makingUnitRequired, setMakingUnitRequired] = useState(false)

  const switchRequired = (e: string) => {
    if (e && e !== "") {
      setMakingUnitRequired(true)
    }
    else {
      setMakingUnitRequired(false)
    }
  }

  useEffect(() => {
    if (isMetal) {
      setMet(null)
      getMetalsByMaterial({ materialId: selectedMat }).then((res: any) => {
        setMet(res?.data?.data)
      })
    }
    clearPrices()
  }, [selectedMat])

  const weightUnit = (
    <Form.Item name={[name, 'unit']} style={{ marginBottom: 0 }} rules={[
      { required: true, message: 'Required' }
    ]}>
      <Select placeholder="Unit" style={{ width: 80 }} disabled={selectedMat === 0}>
        {
          isMetal &&
          <>
            <Select.Option value="gm">Gram</Select.Option>
            <Select.Option value="tola">Tola</Select.Option>
          </>
        }
        {
          isDiamond &&
          <>
            <Select.Option value="carat">Carat</Select.Option>
            <Select.Option value="cent">Cent</Select.Option>
          </>
        }
      </Select>
    </Form.Item>
  );
  const makingUnit = (
    <Form.Item name={[name, 'makingUnit']} style={{ marginBottom: 0 }} rules={[
      { required: isMetal && makingUnitRequired, message: "Required" },
    ]}>
      <Select placeholder="Unit" style={{ width: 102 }}>
        <Select.Option value="percent">Percent</Select.Option>
        <Select.Option value="gm">Per Gram</Select.Option>
        {/* <Select.Option value="piece">Piece</Select.Option> */}
      </Select>
    </Form.Item>
  );
  return (
    <>
      <Flex justify='space-between'>
        <div className='p-1'>Material {someKey + 1}</div>
        {
          someKey !== 0 &&
          <div className='p-1' title='Remove Material'>
            <CloseOutlined onClick={removeMaterial} />
          </div>
        }
      </Flex>
      <Card
        className='wf-card !mb-5 !p-5'
        key={someKey}
      >
        <Row gutter={30}>
          <Col sm={12} xs={24} md={8} lg={6} xl={4}>
            <Form.Item label="Material" name={[name, 'materialId']} rules={[
              { required: true, message: "Material is Required" },
            ]}>
              <Select onChange={(e) => setSelectedMat(e)} loading={materialsLoading} disabled={materialsLoading} placeholder="Select Material" options={materials} />
            </Form.Item></Col>
          {
            isMetal &&
            <>
              <Col sm={12} xs={24} md={8} lg={6} xl={4}>
                <Form.Item label="Metal" name={[name, 'metalId']} rules={[
                  { required: isMetal, message: "Metal is Required" },
                ]}>
                  <Select loading={met === null} disabled={met === null} placeholder="Select Metal" options={metals} />
                </Form.Item>
              </Col>
              <Col sm={12} xs={24} md={8} lg={6} xl={4}>
                <Form.Item label="Making Charge" name={[name, 'makingCharge']}>
                  <InputNumber onChange={(e: any) => switchRequired(e?.target?.value)} placeholder='Making Charge' style={{ width: '100%' }} addonAfter={makingUnit} />
                </Form.Item>
              </Col>
            </>
          }
          <Col sm={12} xs={24} md={8} lg={6} xl={4}>
            <Form.Item label="Weight" name={[name, 'weight']} rules={[
              { required: true, message: "Weight is Required" },
            ]}>
              <InputNumber placeholder='Weight' style={{ width: '100%' }} step={0.01} addonAfter={weightUnit} />
            </Form.Item>
          </Col>
          {
            isDiamond &&
            <Col sm={12} xs={24} md={8} lg={6} xl={4}>
              <Form.Item label="Price" name={[name, 'price']} rules={[
                { required: isDiamond, message: "Price is Required" },
              ]}>
                <InputNumber style={{ width: '100%' }} placeholder='Price' step={0.01} />
              </Form.Item>
            </Col>
          }
        </Row>
      </Card>
    </>
  )
}

export default MaterialForm