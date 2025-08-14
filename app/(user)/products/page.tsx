'use client'
import { Metadata } from "next";
import { Affix, Breadcrumb, Card, Col, Flex, Row, Select } from "antd";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import UserLayout from "@/app/layouts/UserLayout";
import ProductFilter from "@/app/components/ProductFilter/ProductFilter";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// export const metadata: Metadata = {
//   title: "White Feather's Jewellery",
//   description: "This is the official site of White Feather's Jewellery.",
// };

export default function Home() {
    const query = useSearchParams()
    const searchName = query.get('name')
    return (
        <UserLayout>
            <Card className="!rounded-none">
                <Flex justify="space-between" align="center">
                    <Breadcrumb
                        items={[
                            {
                                title: <Link href={"/"}>Home</Link>,
                            },
                            {
                                title: searchName ?  <span className="capitalize">Products - {searchName}</span> : "Products",
                            }
                        ]}
                    />
                </Flex>
            </Card>
            <Flex gap={20} className="product-list">
                <div className="w-full md:w-1/4">
                <Affix offsetTop={100}>
                    <ProductFilter />
            </Affix>
                </div>
                <div className="w-full md:w-3/4">
                    <Row gutter={[20, 20]} className="p-10">
                        {
                            Array(10)?.fill(null)?.map(() => {
                                return <Col xs={24} sm={12} md={8} lg={8} xxl={6}>
                                    <ProductCard />
                                </Col>
                            })
                        }
                    </Row>
                </div>
            </Flex>

        </UserLayout>
    );
}
