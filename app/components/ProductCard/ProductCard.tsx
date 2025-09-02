import { HeartFilled, HeartOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Badge, Button, Card, Flex, message } from 'antd'
import Link from 'next/link'
import React, { useState } from 'react'
import ConvertedPrice from '../ConvertedPrice/ConvertedPrice'
import { getImage } from '@/app/utils/getImage'
import Image from 'next/image'

const ProductCard = ({product}:any) => {
    const {id, title, wishlist, cart, s_path, dynamic_price, discount} = product
    const [isWish, setIsWish] = useState(wishlist && wishlist === 1)
    const [messageApi, contextHolder] = message.useMessage();

    const switchWish = (e: any) => {
        e.preventDefault()
        setIsWish(!isWish)
        !isWish ? messageApi.success("Added to wishlist!") : messageApi.error("Removed from wishlist!")
    }
    return (
        <Link href={`/products/${id}`}>
            {contextHolder}
            {/* <Badge.Ribbon text="Tags"> */}
            <Card hoverable className='max-w-[500px] !bg-[#3892C61A] h-full overflow-hidden relative' cover={<Image placeholder='blur' blurDataURL='/image-loading.gif' width={250} height={200} className='!w-full aspect-[5/4]' src={getImage(s_path)||"/no-image.webp"} alt='p-i' />}>
                <div className='!-m-[14px]'>
                    <Flex justify='space-between' align='center'>
                        <div className='!text-base font-semibold italic'>
                            <ConvertedPrice pri={dynamic_price} dis={discount} />
                            {/* <div>USD 200</div>
                            <div className='text-crossed text-base text-slate-500 line-through text-sm font-normal'>USD 250</div> */}
                        </div>
                        <Button onClick={(e)=>{ 
                            e.preventDefault()
                            alert("hello")}} className='button success !px-2 !py-1 !text-xs relative z-50' icon={<VideoCameraOutlined />}>Live Call</Button>
                    </Flex>
                    <div title='Product name must not exceed 2 line it should not at all' className='my-3 px-1 line-clamp-2 leading-5'>{title}</div>
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