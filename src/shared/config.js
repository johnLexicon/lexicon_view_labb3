export const API =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/posts'
    : 'https://heuristic-aryabhata-f620d5.netlify.app/.netlify/functions/api/posts';
