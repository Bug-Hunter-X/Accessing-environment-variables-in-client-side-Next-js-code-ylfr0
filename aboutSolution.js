```javascript
// pages/aboutSolution.js

export async function getServerSideProps() {
  return {
    props: {
      myVariable: process.env.MY_VARIABLE,
    },
  };
}

export default function About({ myVariable }) {
  console.log(myVariable); // Access the variable here
  return (
    <div>
      <h1>About Page</h1>
      <p>My Variable: {myVariable}</p>
    </div>
  );
}
```