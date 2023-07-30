export default async function apifetch(url, headers) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return { data };
  } catch (error) {
    return { error };
  }
}
