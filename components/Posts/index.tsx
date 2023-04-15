import React from 'react';
import { Post } from './Post';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const Posts = () => {
  if (process.env.BACKEND_API_URL) {
    console.log('api url is present');
  }
  const url = process.env.BACKEND_API_URL + '/postify/api/v1/posts';
  const { data, error, isLoading } = useSWR(url, fetcher);

  const Loading = () => {
    return <p>Loading...</p>;
  };

  const Error = () => {
    return <p>Something went wrong</p>;
  };

  return (
    <div className="py-4 md:py-8">
      {data?.results?.map((post: { id: string; title: string }) => (
        <Post key={post.id} id={post.id} title={post.title} />
      ))}
      {isLoading && <Loading />}
      {error && <Error />}
    </div>
  );
};
