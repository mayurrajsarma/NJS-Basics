import Link from "next/link"

export default async function NewsArticle({params,searchParams}:
    {
        params: Promise<{articleId: string}>;
        searchParams: Promise<{lang?: "en" | "es" | "fr"}>;
    }
) {
    const {articleId} = await params;
    const {lang="en"} = await searchParams;
    return (
        <div className="flex justify-between">
            <div className="p-2">
                <h1 className="text-2xl">News Article {articleId}</h1>
                <p>Reading in {lang}</p>
            </div>

            <div className="flex flex-col gap-2 p-2">
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
            </div>
        </div>
    )
}

// async function does not work in client components. It only works in server components.
// So for client components, we have to import {use} from react
// import {use} from "react";
// const {articleId} = use(params);
// const {lang="en"} = use(searchParams);