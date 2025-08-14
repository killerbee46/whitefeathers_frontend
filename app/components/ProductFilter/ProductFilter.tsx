import { CloseCircleOutlined, GoldFilled } from '@ant-design/icons'
import { Button, Card, Checkbox, Flex, Image, Select, Slider, SliderSingleProps } from 'antd'
import React, { useEffect, useState } from 'react'
import './ProductFilter.scss'
import FiltersList from './FiltersList'
import { queryBuilder } from '@/app/utils/queryBuilder'
import { useRouter } from 'next/router'

const ProductFilter = () => {
    const router = useRouter()
    const searchParams:any = {}
    const name = searchParams.get('name')
    const defaultFilter:any = {
        price:[0,1000000],
        weight:[0,30],
        metal:[],
        sortBy:null
    }
    const filters:any = []
    const [filterData, setFilterData] = useState(defaultFilter)
    const formatter: NonNullable<SliderSingleProps['tooltip']>['formatter'] = (value) => `Rs. ${value}`;
    const formatter2: NonNullable<SliderSingleProps['tooltip']>['formatter'] = (value) => `${value} gm`;
    const setParams = (key:string,value: any) => {
        if (key === "price" || key === "weight") {
            setTimeout(() => {
            setFilterData({...filterData,[key]:value})
        }, 1000)
        }
        else if(key === "metal"){
            const {value:metalValue, checked} = value
            const temp = filterData?.metal
            let updated
            if (checked) {
                updated = temp.concat(metalValue)
            } else {
                updated = temp.filter((f:any)=> f !== metalValue)
            }
            setFilterData({...filterData,metal:updated})
        }
        else if(key === "sortBy"){
            setFilterData({...filterData,sortBy:value})
        }
        else{
            return 
        }
    }

    const clearFilter = () => {
        setFilterData(defaultFilter)
    }

    useEffect(()=> {
        const queries:any = name && name !== "" ? [{name:"name", value:name}]:[]
        if (JSON.stringify(filterData) !== JSON.stringify(defaultFilter)) {
            Object.keys(filterData)?.map((k)=>{
                if (JSON.stringify(filterData[k]) != JSON.stringify(defaultFilter[k])) {
                    filters.push({name:k,value:filterData[k]})
                }
                else {
                    filters.filter((f:any)=> f.name !== k)
                }
            })
        } 
        const updated = queries?.concat(filters)
        const queryValue = queryBuilder({data:updated})
        router.replace(`/products${queryValue}`)
    },[filterData])
    return (
        <div className='m-5'>
            <div className='w-full !my-3'>
                <FiltersList filters={filters} clearFilter={clearFilter} />
            </div>
            <Card className='w-full product-filter' 
            title={
                filters.length === 0 ?
                    "Filter Products" :
                <Flex justify='space-between'>
                    <span>Filter Products ({filters.length})</span>
                    <Button iconPosition='end' className='button danger !px-2 !py-1 !text-xs' icon={<CloseCircleOutlined />} onClick={clearFilter}>Clear all</Button>
            </Flex>
        }>
            <Flex vertical gap={20}>
                <Select onChange={(e:any)=>setParams("sortBy",e)} placeholder="Sort By" options={[
                        {label:"Latest",value:'date'},
                        {label:"Price High to Low",value:'price-htl'},
                        {label:"Price Low to High",value:'price-lth'},
                        {label:"Discounted",value:'discount'},
                    ]} />
                <div>
                    <label>Select Price Range</label>
                    <div className='px-10 py-3'>
                        <Slider onChange={(e:any)=>setParams("price",e)} tooltip={{ formatter }} min={0} max={1000000} range={{ draggableTrack: true }} defaultValue={[0, 1000000]} />
                    </div>
                </div>
                <div>
                    <label>Select Weight Range</label>
                    <div className='px-10 py-3'>
                        <Slider onChange={(e:any)=>setParams("weight",e)} tooltip={{ formatter: formatter2 }} min={0} max={30} range={{ draggableTrack: true }} defaultValue={[0, 30]} />
                    </div>
                </div>
                <div>
                    <label>Select Metal</label>
                    <Flex justify='space-around' className='!mt-2'>
                        <Checkbox checked={filterData?.metal?.includes('diamond')} value={'diamond'} onChange={(e:any)=>setParams("metal",e?.target)}><Image preview={false} src='/diamond.svg' className='!w-[13px]' /> Diamond</Checkbox>
                        <Checkbox checked={filterData?.metal?.includes('gold')} value={'gold'} onChange={(e:any)=>setParams("metal",e?.target)}><GoldFilled className='!text-yellow-400' /> Gold</Checkbox>
                    </Flex>
                    <Flex justify='space-around' className='!mt-2'>
                        <Checkbox checked={filterData?.metal?.includes('rhodium')} value={'rhodium'} onChange={(e:any)=>setParams("metal",e?.target)}><Image preview={false} src='/rhodium.webp' className='!w-[20px]' /> Rhodium</Checkbox>
                        <Checkbox checked={filterData?.metal?.includes('silver')} value={'silver'} onChange={(e:any)=>setParams("metal",e?.target)}><GoldFilled className='!text-slate-400' /> Silver</Checkbox>
                    </Flex>
                </div>
            </Flex>
        </Card>
        </div>
    )
}

export default ProductFilter