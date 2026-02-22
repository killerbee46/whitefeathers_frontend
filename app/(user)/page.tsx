"use client";
import { Metadata } from "next";
import UserLayout from "../layouts/UserLayout";
import ProductCard from "../components/ProductCard/ProductCard";
import { Button, Col, Row } from "antd";
import Link from "next/link";
import ExcelReader from "../components/ExcelExport/ExcelReader";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "White Feather's Jewellery",
//   description: "This is the official site of White Feather's Jewellery.",
// };

export default function Home() {
  const [excelData, setExcelData] = useState<any>([]);
  const keys =excelData && excelData.length !== 0 && Object?.keys(excelData[0])?.filter((f)=>f!=="tempimage");
  const values =excelData && excelData.length !== 0 && excelData?.map((ed:any)=> "(" + keys?.map((k:any)=>ed[k] == null || ed[k] == undefined ?'null' : "'"+ed[k]+"'") + ")")

  console.log(keys)
  return (
    <UserLayout>
      <div className="p-20">
        This is the home page.
        <Link href={"/products"}>
          <Button>Go to Products Page</Button>
        </Link>
        <Link href={"/price-calculator"}>
          <Button>Calculate Product Price</Button>
        </Link>
      </div>
      <div>
        <ExcelReader onDataLoaded={(data: any) => setExcelData(data)} />

        <h2>Parsed Excel Data:</h2>
        {
        excelData && excelData.length !== 0 &&
        "Insert into package ("+keys.join(", ")+") values "}
        {
          excelData && excelData.length !== 0 &&
          values.length !== 0 && values.join(',')
        }
      </div>
    </UserLayout>
  );
}
