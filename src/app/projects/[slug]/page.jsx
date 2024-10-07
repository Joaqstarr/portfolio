'use client'


export default function Page(params){
    const {slug} = params.params;
    return (
        <div>
            <h1>Slug: {slug}</h1>
            {/* Fetch and display data based on the slug */}
        </div>
    );
}