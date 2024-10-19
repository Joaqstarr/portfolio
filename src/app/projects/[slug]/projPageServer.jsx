export async function ParseJson(slug){
  try{
  const response = await fetch('/projects/' + slug +'.json');

  if(!response.ok) throw new Error('Failed to fetch JSON');

  const data = await response.json();
  return data;
}catch(error){
  console.error("Error Fetching JSON: ", error);
}

}

