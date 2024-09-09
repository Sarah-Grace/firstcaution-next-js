// app/page.js
'use client';

import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../lib/axiosInstance';

const fetchPosts = async () => {
  const response = await axiosInstance.get('/users');
  return response.data;
};

export default function HomePage() {
  // Updated to use the object form for the query function
  const { data, error, isLoading } = useQuery({
    queryKey: ['users'],   // Change from positional to object form
    queryFn: fetchPosts,   // Change from positional to object form
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
}
