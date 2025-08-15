'use client'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import CustomFooter from '../components/Footer/CustomFooter'
import Topbar from '../components/Topbar/Topbar'

const menus = [
    { label: "Home", path: "/" },
    { label: "Away", path: "/away" },
    { label: "Neutral", path: "/neutral" },
    {
        label: "Parent", path: "", children: [
            {
                title: "Shop by Choice", children: [
                    { label: "Home", path: "/", },
                    { label: "Away", path: "/away" },
                    { label: "Neutral", path: "/neutral" }
                ]
            },
            {
               type:"preference"
            },
            {
               type:"price"
            }
        ]
    },
]

const UserLayout = ({ children }: any) => {
    return (
        <div>
            <header className='h-[100px] mb-2.5'>
                <div className="bg-[#3892C6] fixed top-0 left-0 right-0 h-[40px] z-0 text-base z-100">
                    <Topbar />
                </div>
                <div className="bg-white fixed top-[40px] left-0  right-0 h-[70px] z-100 !pb-2" style={{ boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)' }}>
                    <Navbar logo="https://whitefeathersjewellery.com/assets/v2/images/wflogo.png" smallLogo="/wf-logo-small.svg" menus={menus} auth searchable />
                </div>
            </header>
            <div className='max-w-[100vw] min-h-[90vh] overflow-hidden relative'>
                {children}
            </div>
            <footer>
                <CustomFooter />
            </footer>
        </div>
    )
}

export default UserLayout