import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useComments = () => {
  const axiosPublic = useAxiosPublic();

  const { data: comments=[], refetch, isLoading, isError, error } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await axiosPublic.get("/comments");
      return res.data;
    },
  });

  return [comments, refetch, isLoading, isError, error ];
};

export default useComments;