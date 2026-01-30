"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    {name: "Register", href:"/register"},
    {name: "Login", href:"/login"},
    {name: "Forgot Password", href:"/forgot-password"},
];

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathName = usePathname();
    const [input,setInput] = useState("");
    return (
        <div className="p-2 h-full">
            <div className="flex justify-between mb-4">
                {navLinks.map((link)=> {
                    const isActive = pathName === link.href || 
                    (pathName.startsWith(link.href) && link.href !== "/") ;
                    return (
                        <Link className={isActive? "border border-black p-2 hover:bg-amber-300 text-red-500 font-bold" : "border p-2 hover:bg-amber-300"} href={link.href} key={link.name}>{link.name}</Link>
                    )
                })}
            </div>
            <div className="">{children}</div>
            <input className="border" value={input} onChange={(e)=> setInput(e.target.value)}/>
            <p>Here the above input field will be consistent among the 3 routes, but will not preserve once we change layout to a template</p>
        </div>
    );
}