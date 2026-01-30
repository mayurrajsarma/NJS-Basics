'use client';

import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    console.log("Pathname:", pathname);

    const productId = pathname.split('/')[2];
    const reviewId = pathname.split('/')[4];
    
    return (
        <div className="flex flex-col justify-center items-center h-screen text-2xl">
            <h1>Review {reviewId} not found for product {productId}</h1>
        </div>
    );
}