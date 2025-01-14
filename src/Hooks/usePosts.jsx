import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePosts = () => {
  const axiosPublic = useAxiosPublic();

  const { data: postData=[], refetch, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axiosPublic.get("/posts");
      return res.data;
    },
  });

  return [postData, refetch, isLoading, isError, error ];
};

export default usePosts;
