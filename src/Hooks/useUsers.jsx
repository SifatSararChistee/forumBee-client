import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUsers = () => {
  const axiosPublic = useAxiosPublic();

  const { data: users=[], refetch, isLoading, isError, error } = useQuery({
    queryKey: ["uses"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });

  return [users, refetch, isLoading, isError, error ];
};

export default useUsers;