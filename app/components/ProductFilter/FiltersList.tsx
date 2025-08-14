import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Flex, Tag } from 'antd'
import useSearchParams from 'next/router'
import React from 'react'

const FiltersList = ({ filters, clearFilter }: any) => {
    const query:any = {}
    const metal = query.getAll('metal')
    const price = [query.get('minPrice'), query.get('maxPrice')]
    const weight = [query.get('minWeight'), query.get('maxWeight')]
    const sortBy = query.get('sortBy')

    const clearEachFilter = (key: string) => {
        filters?.filter
    }
    console.log(metal, "filters metal")
    return (
        <div>
            {
                ((metal && metal.length !== 0) || (price && price[0] !== null && price[1] !== null) ||
                    (weight && weight[0] !== null && weight[1] !== null) || (sortBy && sortBy !== null)) &&
                    <div className='!px-2 !py-1 !text-xs'>Filters</div> 
            }
            {
                metal && metal.length !== 0 &&
                 <span>Metal:<Tag>{metal[0]}</Tag></span>
            }
            {
                price && price[0] !== null && price[1] !== null &&
                <Tag>Price tag</Tag>
            }
            {
                weight && weight[0] !== null && weight[1] !== null &&
                <Tag>Weight tag</Tag>
            }
            {
                sortBy && sortBy !== null &&
                <Tag>Sort tag</Tag>
            }
{
                ((metal && metal.length !== 0) || (price && price[0] !== null && price[1] !== null) ||
                    (weight && weight[0] !== null && weight[1] !== null) || (sortBy && sortBy !== null)) &&
                    <Tag className='cursor-pointer' color='red' icon={<CloseCircleOutlined />} onClick={clearFilter}>Clear all</Tag>
            }
        </div>
    )
}

export default FiltersList