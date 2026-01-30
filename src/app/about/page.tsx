import Link from "next/link";
export const metadata = {
    title: 'About Us',
};

export default function About() {
    return (
        <div>
            <p>About page</p>
            <Link href="/">Go to Home</Link>
        </div>
    )
}