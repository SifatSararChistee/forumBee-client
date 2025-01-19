import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUsers = (searchQuery = "", currentPage = 0, usersPerPage = 10) => {
  const axiosPublic = useAxiosPublic();

  const { data: users = [], refetch, isLoading, isError, error } = useQuery({
    queryKey: ["users", searchQuery, currentPage, usersPerPage],
    queryFn: async () => {
      const res = await axiosPublic.get("/users", {
        params: {
          search: searchQuery,
          page: currentPage,
          limit: usersPerPage,
        },
      });
      return res.data;
    },
    keepPreviousData: true,  // Retains previous data when refetching
  });

  return [users, refetch, isLoading, isError, error];
};

export default useUsers;

