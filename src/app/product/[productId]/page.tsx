import { Metadata } from "next";

type Props = {
    params: Promise<{ productId: string}>;
}

export const generateMetadata = async ({params} : Props) : Promise<Metadata> => {
    const {productId} = await params;
    const title = await new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(`Samsung ${productId}`);
        },100);
    });
    return {
        title: {
            absolute: title as string,
        },
    };
}

export default async function ProductDetails({params}: Props){
    const productId = (await params).productId;
    return (
        <div>
            <h1>Details about product {productId}</h1>
        </div>
    )
}