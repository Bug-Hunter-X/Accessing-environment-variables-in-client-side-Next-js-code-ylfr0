# Accessing Environment Variables in Next.js Client-Side Code

This repository demonstrates a common issue when working with environment variables in Next.js applications.  The problem arises when attempting to access environment variables (like `process.env.MY_VARIABLE`) directly within client-side JavaScript code (e.g., in a component rendered in the browser).

The `about.js` file illustrates the problem.  The solution is shown in `aboutSolution.js`

## Setup

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

## Problem

The original `about.js` file attempts to access `process.env.MY_VARIABLE`.  This will result in a runtime error in the browser because the `process` object is not defined in the client-side environment.

## Solution

The `aboutSolution.js` file demonstrates the correct approach to handle this. Environment variables should be set during build time and accessed through the `process.env` object on the server-side or by using the `getServerSideProps` or `getStaticProps` functions.