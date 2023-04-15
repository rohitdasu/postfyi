import React from 'react';
import useSWRInfinite from 'swr/infinite';
import axios from 'axios';
import { MdOutlineUnfoldMoreDouble } from 'react-icons/md';
import { Post } from './Post';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const Posts = () => {
  const getKey = (pageIndex: number, previousPageData: any) => {
    let cursorId = '';

    if (previousPageData && Array.isArray(previousPageData.results)) {
      const lastPost =
        previousPageData.results[previousPageData.results.length - 1];

      if (lastPost) {
        cursorId = lastPost.id;
      }
    }

    if (pageIndex === 0) {
      return `/postify/api/v1/posts`;
    } else {
      return `/postify/api/v1/posts?cursor=${cursorId}`;
    }
  };

  const { data, error, isLoading, size, setSize } = useSWRInfinite(
    getKey,
    fetcher
  );

  const isReachedEnd = data && data[data?.length - 1].results?.length < 7;

  const Loading = () => {
    return <p>Loading...</p>;
  };

  const Error = () => {
    return <p>Something went wrong</p>;
  };

  const LoadMore = () => {
    return (
      <div className="py-4 float-right">
        <button
          onClick={() => setSize(size + 1)}
          className="text-green-600 flex flex-row items-center gap-2 text-base font-medium"
        >
          <p>Load more</p> <MdOutlineUnfoldMoreDouble />
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="py-4 md:py-8">
        {data &&
          data.map((page, index) => (
            <React.Fragment key={index}>
              {page.results?.map((post: any) => (
                <Post key={post.id} id={post.id} title={post.title} />
              ))}
            </React.Fragment>
          ))}
        {data?.length && data[0]?.results?.length && !isReachedEnd && (
          <LoadMore />
        )}
        {isLoading && <Loading />}
        {error && <Error />}
      </div>
    </>
  );
};
