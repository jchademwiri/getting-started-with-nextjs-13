import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h1>The requsted user does not exist</h1>
      <Link href='/users'>Go Back To Users</Link>
    </div>
  );
}
