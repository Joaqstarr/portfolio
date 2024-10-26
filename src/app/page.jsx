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
        title: "Joaquin Royer" || 'Default Title',
        description: "Game Programming Portfolio" || 'Default description',
    };

}
