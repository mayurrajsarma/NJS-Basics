import Link from "next/link"

export default function Home() {
    return (
        <div>
            <div className="flex flex-col gap-2 mt-4 items-center">
                <Link href="/about">About Us</Link>
                <Link href="/product">Product page</Link>
                <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
                <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
            </div>
            <div className="flex flex-col h-full items-center text-2xl mt-20">
                <h1 className="">Welcome to the Home Page</h1>
            </div>
        </div>
    )
}