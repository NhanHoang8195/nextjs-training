export async function getPostsData() {
  return await fetch(`${process.env.BASE_PRODUCTION_API}/posts`).then(res => res.json());
}