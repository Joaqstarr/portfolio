import path from "path";
import PageClient from "./pageClient";


export async function ParseJson(slug){
  try{
    const filePath = path.join(process.env.NEXT_PUBLIC_API_URL,'/projects/' + slug +'.json');
    const response = await fetch(filePath);

    if(!response.ok) throw new Error('Failed to fetch JSON');
    const data = await response.json();

    return data;
  }catch(error){
    console.error("Error Fetching JSON: ", error);
  }

}

export async function generateStaticParams() {
  const res = await fetch(path.join(process.env.NEXT_PUBLIC_API_URL,'/api/projects'));


  if(!res.ok){
    throw new Error("Error fetching projects: " + res.statusText);
  }
  const data = await res.json();
  const files = data.files.files;

  return files.map((file) => ({
    slug: file.replaceAll("/projects/", "").replaceAll(".json", ""),
  }));
}



export default async function Page(params) {


  const res = await ParseJson(params.params.slug);

  return(
      <PageClient params={params.params} project={res}/>
  )

}
