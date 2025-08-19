import {Image} from 'antd'
import Link from 'next/link'
import React from 'react'

const Logo = ({src, noRedirect}:any) => {
  return (
    <Link href={noRedirect ? "" : '/'}>
    <Image preview={false} height={50} className='aspect-square md:!aspect-[7/1]'  src={src} alt='logo' />
    </Link>
  )
}

export default Logo