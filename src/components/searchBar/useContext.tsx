"use client";
import { api } from "@/utils/axios";
import { createContext, useContext, useEffect, useState } from "react";

interface IPostContext {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  posts: any[] | undefined;
  loading: boolean;
  error: unknown;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const PostContext = createContext<IPostContext | undefined>(undefined);

const PostProvider = ({ children }: { children: React.ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPost] = useState<any[] | undefined>();
  const [loading, setLoading] = useState(true);
  const [error] = useState<unknown>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await api.get("/products", {
  //         params: {
  //           "fields.title[match]": searchQuery,
  //         },
  //       });
  //       setPost(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchPosts();
  // }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await api.get("/products" + "?title_like=" + searchQuery);
        setPost(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [searchQuery]);

  return (
    <PostContext.Provider
      value={{
        posts,
        loading,
        error,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
const usePost = (): IPostContext => {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
};

export { PostProvider, usePost };
