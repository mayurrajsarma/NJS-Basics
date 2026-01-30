import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Blog",
    }
};

export default async function BlogPage() {
    await new Promise((resolve)=> {
        setTimeout(()=> {
            resolve("Intentional delay");
        },2000);
    });

    return (
        <div>
            <h1>Blog Page</h1>
            <p>Welcome to the blog page!</p>
        </div>
    );
}