import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTags = () => {
  const axiosPublic = useAxiosPublic();

  const { data: tags=[], refetch, isLoading, isError, error } = useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tags");
      return res.data;
    },
  });

  return [tags, refetch, isLoading, isError, error ];
};

export default useTags;