import { HeartFilled, HeartOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Badge, Button, Card, Flex, Image, message } from 'antd'
import Link from 'next/link'
import React, { useState } from 'react'
import ConvertedPrice from '../ConvertedPrice/ConvertedPrice'

const ProductCard = () => {
    const dI = "https://imgs.search.brave.com/327AqEJKwIRKWxw5nqpQtBhw2YGCYB--mVh5oPLcJME/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1wc2QvcHJv/ZHVjdC1kaXNwbGF5/LTNkLXBvZGl1bS1i/YWNrZ3JvdW5kXzQ3/OTg3LTExMzA3Lmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA"
    const [isWish, setIsWish] = useState(false)
    const [messageApi, contextHolder] = message.useMessage();

    const switchWish = (e: any) => {
        e.preventDefault()
        setIsWish(!isWish)
        !isWish ? messageApi.success("Added to wishlist!") : messageApi.error("Removed from wishlist!")
    }
    return (
        <Link href={`/products/1`}>
            {contextHolder}
            {/* <Badge.Ribbon text="Tags"> */}
            <Card hoverable className='max-w-[500px] !bg-[#3892C61A] h-full overflow-hidden relative' cover={<Image className='w-full aspect-[5/4]' preview={false} src={dI} alt='p-i' />}>
                <div className='!-m-[14px]'>
                    <Flex justify='space-between' align='center'>
                        <div className='!text-base font-semibold italic'>
                            <ConvertedPrice pri={25000} dis={200} />
                            {/* <div>USD 200</div>
                            <div className='text-crossed text-base text-slate-500 line-through text-sm font-normal'>USD 250</div> */}
                        </div>
                        <Button className='button success !px-2 !py-1 !text-xs' icon={<VideoCameraOutlined />}>Live Call</Button>
                    </Flex>
                    <div title='Product name must not exceed 2 line it should not at all' className='my-3 px-1 line-clamp-2 leading-5'>Product name must not exceed 2 line it should not at all</div>
                </div>
                <div className='absolute top-5 right-5 z-10 active:scale-125'>
                    {
                        !isWish ?
                            <HeartOutlined onClick={switchWish} className='text-xl !text-black' /> :
                            <HeartFilled onClick={switchWish} className='!text-red-600 text-xl' />
                    }
                </div>
            </Card>
            {/* </Badge.Ribbon> */}
        </Link>
    )
}

export default ProductCard