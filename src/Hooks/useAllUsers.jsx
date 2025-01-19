import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useComments = () => {
  const axiosPublic = useAxiosPublic();

  const { data: allUsers=[], refetch, isLoading, isError, error } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });

  return [allUsers, refetch, isLoading, isError, error ];
};

export default useComments;