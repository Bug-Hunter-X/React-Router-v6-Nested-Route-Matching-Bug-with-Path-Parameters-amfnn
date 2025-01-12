# React Router v6 Nested Route Matching Bug

This repository demonstrates a subtle bug in React Router v6 related to nested route matching when path parameters are involved.  The issue occurs when a nested route's path unexpectedly matches even if the parent route's parameter is not satisfied. This leads to rendering the wrong component.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Navigate to `/users/123/profile`.  The expected behavior is to render the NotFound component.  However, the Profile component renders incorrectly.

## Expected Behavior

When navigating to a route that does not match any defined routes (like `/users/123/profile` when no route with an id of 123 is present), the `NotFound` component should render. 

## Actual Behavior

The `Profile` component renders, even when the parent route's parameter does not match.  The nested `Profile` route seems to match even if the parent's path parameter is wrong.

## Solution

See `bugSolution.js` for a solution demonstrating the use of `useParams` and proper path matching logic to prevent this unexpected behavior.  This involves verifying parameters at each level of the route hierarchy.