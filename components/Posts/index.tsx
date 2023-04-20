import React, { useEffect } from 'react';
import useSWRInfinite from 'swr/infinite';
import axios from 'axios';
import { MdOutlineUnfoldMore } from 'react-icons/md';
import { FiLoader } from 'react-icons/fi';
import { Post } from './Post';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

interface IProps {
  mutateKey: number | null;
}

export const Posts: React.FC<IProps> = ({ mutateKey }) => {
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

  const { data, error, isLoading, size, setSize, mutate } = useSWRInfinite(
    getKey,
    fetcher
  );

  // mutate whenever the mutateKey is changed
  useEffect(() => {
    mutate();
  }, [mutateKey]);

  const isReachedEnd = data && data[data?.length - 1].results?.length < 7;

  const loadingMore = data && typeof data[size - 1] === 'undefined';

  const Loading = () => {
    return <FiLoader className="text-2xl animate-spin text-green-600" />;
  };

  const Error = () => {
    return <p>Something went wrong</p>;
  };

  const LoadMore = () => {
    return (
      <div>
        <button
          onClick={() => setSize(size + 1)}
          className="flex flex-row items-center gap-2 text-base font-medium text-green-600"
        >
          <p>Load more</p> <MdOutlineUnfoldMore className="text-xl" />
        </button>
      </div>
    );
  };

  const LoadingMore = () => {
    return (
      <div>
        <FiLoader className="text-2xl animate-spin text-green-600" />
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
        <div className="flex flex-row justify-end py-4">
          {!isReachedEnd && data && <LoadMore />}
        </div>
        <div className="flex flex-row justify-center">
          {loadingMore && <LoadingMore />}
        </div>
        <div className="flex items-center justify-center">
          {isLoading && <Loading />}
        </div>
        {error && <Error />}
      </div>
    </>
  );
};
