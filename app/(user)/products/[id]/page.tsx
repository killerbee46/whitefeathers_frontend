import { Metadata } from "next";
import UserLayout from "@/app/layouts/UserLayout";

export const metadata: Metadata = {
  title: "Product Detail | White Feather's Jewellery",
  description: "This is the official site of White Feather's Jewellery.",
};

export default function Home() {
  return (
    <UserLayout>
      <div>Product Detail Page</div>
    </UserLayout>
  );
}
