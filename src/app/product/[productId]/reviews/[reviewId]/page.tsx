import { notFound } from "next/navigation";

export default async function reviewDetails({params}: {params: Promise<{reviewId: string; productId: string}>}) {
    //const reviewId = (await params).reviewId;
    //const productId = (await params).productId;
    const {reviewId, productId} = await params;
    if(parseInt(reviewId) > 100){
        notFound();
    }
    
    return (
        <div>
            <h1>Review {reviewId} of product {productId}</h1>
        </div>
    )
}