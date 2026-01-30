// [...slug] will handle all routes under /docs for eg: /docs/getting-started, /docs/api/reference, /docs/tutorials/nextjs-basics
// [[...slug]] makes the slug parameter optional, that means it will also handle /docs route

export default async function Docs({params} : {params: Promise<{slug: string[]}>}) {
    const {slug} = await params;
    if(slug?.length ===2){
        return(
            <h1>Viewing docs for feature {slug[0]} and concept {slug[1]}</h1>
        );
    }
    else if(slug?.length ===1){
        return(
            <h1>Viewing docs for feature {slug[0]}</h1>
        );
    }
    return <h1>Documentation home page</h1>
}

