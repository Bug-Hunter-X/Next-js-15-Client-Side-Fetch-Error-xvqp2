```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
function About() {
  // This will cause an error because 'fetch' is not available by default in the client-side
  fetch('/api/data').then(res => res.json()).then(data => console.log(data))
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
export default About; 
```