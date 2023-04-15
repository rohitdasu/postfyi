import React from 'react';
export const Context = React.createContext<any>(null);
export const ContextProvider = (props: any) => {
  const { children } = props;
  const [posts, setPosts] = React.useState([]);

  const value = {
    posts,
    setPosts,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
