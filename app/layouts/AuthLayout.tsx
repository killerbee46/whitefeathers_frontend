import { Card, Col, Divider, Flex, Image, Row } from 'antd'
import React from 'react'
import Link from 'next/link'

const AuthLayout = ({ children, type }: any) => {
    return (
        <Row justify={'center'} align={'middle'} className='min-h-[100vh] p-5 md:p-10 relative'
        >
            <div className='fixed top-0 bottom-0 w-full'
            style={{
                background:"linear-gradient(to left,rgba(0, 0, 0, 0.52),rgba(0, 0, 0, 0.52)),url('/white-feat-bg.webp')",
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'
            }}
            >
            </div>
            <Col lg={10} md={12} sm={18} xs={20}>
                <Card className='wf-card !p-4 !md:p-8'
                    style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
                >
                    <Flex justify='flex-start' align='center' className='!mb-3'>
                        <Link href={'/'}>
                            <Image preview={false} width={60} className='aspect-square' src={'/wf-logo-small.svg'} alt='logo' />
                        </Link>
                        <Divider className='bg-black' type='vertical' />
                        <div className='text-lg'>{type}</div>
                    </Flex>
                    <Divider className='!-mt-3 !mb-3' />
                    {children}
                </Card>
            </Col>
        </Row>
    )
}

export default AuthLayout