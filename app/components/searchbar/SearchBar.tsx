import React from 'react'
import { Input } from 'antd'
import { useRouter } from 'next/navigation';
import './SearchBar.scss'

const SearchBar = (props: any) => {
  const router = useRouter()
  const { placeholder, small } = props

  const onSearch = (text: any) => {
    // console.log(text, "searched")
    router.push(`/products?name=${text}`)
  }
  return (
    <Input.Search onPressEnter={onSearch} onSearch={onSearch} className='custom-search-bar' placeholder={placeholder || "Search..."} size={small ? 'middle' : 'large'} style={{ width: props?.half ? "50%" : "100%"}} />
  )
}

export default SearchBar