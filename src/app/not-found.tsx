import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="notfound">
      <h2>Page not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
