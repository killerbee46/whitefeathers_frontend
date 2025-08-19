import { Metadata } from "next";
import UserLayout from "../layouts/UserLayout";
import ProductCard from "../components/ProductCard/ProductCard";
import { Button, Col, Row } from "antd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "White Feather's Jewellery",
  description: "This is the official site of White Feather's Jewellery.",
};

export default function Home() {
  return (
    <UserLayout>
      <div className="p-20">
        This is the home page.
      <Link href={'/products'}>
      <Button>Go to Products Page</Button>
      </Link>
      <Link href={'/price-calculator'}>
      <Button>Calculate Product Price</Button>
      </Link>
      </div>
    </UserLayout>
  );
}
