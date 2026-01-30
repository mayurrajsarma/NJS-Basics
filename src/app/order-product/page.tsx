"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct(){
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing your order...");
        router.push("/");
    }

    return (
        <div className="flex flex-col justify-center h-full items-center text-2xl">
            <h1>This is Order Product Page</h1>
            <button className="border p-2 mt-4 cursor-pointer" onClick={handleClick}>Place order</button>
        </div>
    )
}