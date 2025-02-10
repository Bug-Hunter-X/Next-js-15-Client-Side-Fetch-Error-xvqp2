```javascript
// pages/about.js
import {getServerSideProps} from 'next' 

function About({data}) {

  return (
    <div>
      <h1>About Page</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
export default About; 
export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/data');
  const data = await res.json();

  return {
    props: {
      data
    },
  };
}
```