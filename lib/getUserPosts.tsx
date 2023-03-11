export default async function getUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userid=${userId}`
  );
  if (!res.ok) throw new Error('Failed to fetch posts');

  return res.json();
}
