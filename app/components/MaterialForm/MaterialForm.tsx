import { getMaterials, getMetalsByMaterial } from '@/app/wf-api/ProductApi'
import { CloseOutlined } from '@ant-design/icons'
import { useQuery } from '@tanstack/react-query'
import { Card, Row, Col, Form, Select, InputNumber } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { useEffect, useState } from 'react'

const MaterialForm = ({removeMaterial, someKey,name}:any) => {
    const [form] = useForm()
    const { data: mat, isFetching: matFetching } = useQuery({ queryKey: ['materials'], queryFn: getMaterials })
  const materials = mat?.data?.data?.map((m: any) => ({ label: m?.pm_name, value: m?.pm_id }))
  const [met, setMet] = useState<any>(null)
  const metals = met?.map((m: any) => ({ label: m?.pmt_name, value: m?.pmt_id }))
  const [selectedMat, setSelectedMat] = useState(0)
  const isDiamond = selectedMat === 1
  const isMetal = selectedMat !==0 && (selectedMat > 1)
  useEffect(() => {
    if (isMetal) {
      getMetalsByMaterial({ materialId: selectedMat }).then((res: any) => {
        setMet(res?.data?.data)
      })
    }
  }, [selectedMat])

  const weightUnit = (
    <Form.Item name={[name, 'unit']} style={{ marginBottom: 0 }}>
      <Select placeholder="Unit" style={{ width: 80 }}>
        <Select.Option value="gm">Gram</Select.Option>
        <Select.Option value="tola">Tola</Select.Option>
        <Select.Option value="carat">Carat</Select.Option>
        <Select.Option value="cent">Cent</Select.Option>
      </Select>
    </Form.Item>
  );
  const makingUnit = (
    <Form.Item name={[name, 'makingUnit']} style={{ marginBottom: 0 }}>
      <Select placeholder="Unit" style={{ width: 100 }}>
        <Select.Option value="percent">Percent</Select.Option>
        <Select.Option value="gram">Gram</Select.Option>
        <Select.Option value="piece">Piece</Select.Option>
      </Select>
    </Form.Item>
  );
  return (
    <Card
    style={{marginBottom:10}}
    title={`Material ${someKey+1}`}
    extra={
        someKey !== 0 && <CloseOutlined onClick={removeMaterial} />
    }
    key={someKey}
    >
              <Row gutter={30}>
              <Col sm={12} xs={24}>
              <Form.Item label="Material" name={[name, 'materialId']} rules={[
              { required: true, message: "Material is Required" },
            ]}>
              <Select onChange={(e) => setSelectedMat(e)} loading={matFetching} placeholder="Select Material" options={materials} />
            </Form.Item></Col>
            {
              isMetal &&
              <>
              <Col sm={12} xs={24}>
                <Form.Item label="Metal" name={[name, 'metalId']} rules={[
              { required: isMetal, message: "Metal is Required" },
            ]}>
                  <Select loading={metals === null} placeholder="Select Metal" options={metals} />
                </Form.Item>
              </Col>
              <Col sm={12} xs={24}>
                <Form.Item label="Making Charge" name={[name, 'makingCharge']}>
                  <InputNumber placeholder='Making Charge' style={{width:'100%'}} addonAfter={makingUnit} />
                </Form.Item>
              </Col>
              </>
            }
            <Col sm={12} xs={24}>
            <Form.Item label="Weight" name={[name, 'weight']} rules={[
              { required: true, message: "Weight is Required" },
            ]}>
              <InputNumber placeholder='Weight' style={{width:'100%'}} step={0.01} addonAfter={weightUnit} />
            </Form.Item>
              </Col>
            {
              isDiamond &&
              <Col sm={12} xs={24}>
              <Form.Item label="Price" name={[name, 'price']} rules={[
                { required: isDiamond, message: "Price is Required" },
              ]}>
                <InputNumber style={{width:'100%'}} placeholder='Price' step={0.01} />
              </Form.Item>
            </Col>
            }
            </Row>
            </Card>
  )
}

export default MaterialForm