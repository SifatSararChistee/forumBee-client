import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useComments = () => {
  const axiosSecure = useAxiosSecure();

  const { data: allUsers=[], refetch, isLoading, isError, error } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  return [allUsers, refetch, isLoading, isError, error ];
};

export default useComments;