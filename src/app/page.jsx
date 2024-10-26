import { ClientOnly } from './client'
import "../globals.css"
/*export function generateStaticParams() {
    return [{ slug: [''] }]
}*/

export default function Page() {


    return (

        <ClientOnly />


    )
}
const fs = require('fs');



export async function generateMetadata({ params }) {

    return {
        title: "Joaquin Royer",
        description: "Game Programming Portfolio",
        openGraph: {
            title: 'Joaquin Royer',
            description:'Game Programming Portfolio',
            images: [
                {
                    url: 'assets/redline/gdcphoto.jpg',
                    width: 768,
                    height: 512,
                    alt: 'Game Programming Portfolio',
                },
            ],
        },
        twitter: {
            title: 'Joaquin Royer',
            description: 'Game Programming Portfolio',
            images: ['assets/redline/gdcphoto.jpg'],
        }
    };

}
