# Next.js 15 Client-Side Fetch Error
This repository demonstrates a common error encountered in Next.js 15 applications when using the `fetch` API in client-side components without proper consideration for server-side rendering (SSR).  The error occurs because `fetch` is not available by default in the client-side rendering context during SSR.

## Bug Description
The `about.js` file attempts to make an API call using `fetch` directly within the component. This leads to a runtime error during SSR, as the `fetch` API is unavailable in that environment.

## Solution
The solution involves using Next.js's built-in data fetching methods, like `getStaticProps` or `getServerSideProps`, to fetch data on the server before rendering the component. Alternatively, you can use libraries like `swr` or `react-query` to handle asynchronous data fetching more efficiently.