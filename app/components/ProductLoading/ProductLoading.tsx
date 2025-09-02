import { LoadingOutlined } from '@ant-design/icons'
import React from 'react'

const ProductLoading = () => {
  return (
    <div className='!w-full overflow-hidden flex flex-col gap-2 justify-center items-center !text-[#3892C6]'>
        <LoadingOutlined className='!text-lg' />
        Loading
    </div>
  )
}

export default ProductLoading