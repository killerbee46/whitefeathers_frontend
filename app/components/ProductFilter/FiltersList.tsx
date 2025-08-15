import { CloseCircleOutlined, GoldFilled } from '@ant-design/icons'
import { Button, Flex, Image, Tag } from 'antd'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const FiltersList = ({ clearFilter, clearEachFilter }: any) => {
    const query = useSearchParams()
    const metal = query.getAll('metal[]')
    const price: any = [query.get('minPrice'), query.get('maxPrice')]
    const weight: any = [query.get('minWeight'), query.get('maxWeight')]
    const sortBy = query.get('sortBy')

    return (
        <div>

            <Flex justify='space-between' align='center' className='flex-wrap'>
                {
                    ((metal && metal.length !== 0) || (price && price[0] !== null && price[1] !== null) ||
                        (weight && weight[0] !== null && weight[1] !== null) || (sortBy && sortBy !== null)) &&
                    <div className='!px-2 !py-1 w-fit font-semibold text primary'>
                        Filters
                    </div>
                }

                {
                    ((metal && metal.length !== 0) || (price && price[0] !== null && price[1] !== null) ||
                        (weight && weight[0] !== null && weight[1] !== null) || (sortBy && sortBy !== null)) &&
                    <Button className='cursor-pointer !text-xs button danger' color='red' icon={<CloseCircleOutlined />} onClick={clearFilter}>Clear all</Button>
                }
                <Flex gap={5} align='center' className='flex-wrap !w-full !mt-2 !mx-3 flex-wrap'>
                    {
                        sortBy && sortBy !== null &&
                        <Tag className='relative group !bg-green-500 !text-white !font-semibold !py-0.3 !text-xs !border-green-500'>Sort: <span className='uppercase'>{sortBy}</span> <CloseCircleOutlined onClick={() => clearEachFilter('sortBy')} className='text-xs cursor-pointer' /></Tag>
                    }
                    {
                        weight && weight[0] !== null && weight[1] !== null &&
                        <Tag className='relative group !bg-green-500 !text-white !font-semibold !py-0.3 !text-xs !border-green-500'>Weight: {weight[0] + "gm - " + weight[1] + "gm"} <CloseCircleOutlined onClick={() => clearEachFilter('weight')} className='text-xs cursor-pointer' /></Tag>
                    }
                    {
                        price && price[0] !== null && price[1] !== null &&
                        <Tag className='relative group !bg-green-500 !text-white !font-semibold !py-0.3 !text-xs !border-green-500'>Price: {"Rs. " + price[0] + " - Rs. " + price[1]} <CloseCircleOutlined onClick={() => clearEachFilter('price')} className='text-xs cursor-pointer' /></Tag>
                    }
                    {
                        metal && metal.length !== 0 &&
                        <Tag className='relative group !bg-green-500 !text-white !font-semibold !py-0.3 !text-xs !border-green-500 flex justify-between'>
                            <span>
                                Metal: {
                                    metal?.map((met, i) => {
                                        if (met === "diamond") {
                                            return <Tag key={i} title={met} className='cursor-pointer border-0' color='neon'><Image className='!w-3 !h-3' preview={false} src='/diamond.svg' /> </Tag>
                                        } else if (met === "gold") {
                                            return <Tag key={i} title={met} className='cursor-pointer border-0' color='neon'><GoldFilled className='!text-yellow-400' /> </Tag>
                                        }
                                        else if (met === "silver") {
                                            return <Tag key={i} title={met} className='cursor-pointer border-0' color='neon'><GoldFilled className='!text-slate-400' /> </Tag>
                                        }
                                        else if (met === "rhodium") {
                                            return <Tag key={i} title={met} className='cursor-pointer border-0' color='neon'><Image preview={false} src='/rhodium.webp' className='!w-[20px]' /> </Tag>
                                        }
                                        else {
                                            return 0
                                        }
                                    })
                                }
                            </span>
                            <CloseCircleOutlined onClick={() => clearEachFilter('metal')} className='text-xs cursor-pointer' /></Tag>
                    }
                </Flex>
            </Flex>
        </div>
    )
}

export default FiltersList