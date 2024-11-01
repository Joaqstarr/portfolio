import { ClientOnly } from './client'
import "../globals.css"
import {fetchProjects} from "./home/homeServer";
/*export function generateStaticParams() {
    return [{ slug: [''] }]
}*/

export default async function Page(props) {

    const gamesList = await fetchProjects();
    return (

        <ClientOnly projects={gamesList}/>


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
                    url: 'assets/meta.jpg',
                    width: 768,
                    height: 363,
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
