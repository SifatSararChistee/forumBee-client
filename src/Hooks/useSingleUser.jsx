import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const { user} = useAuth();
    const axiosSecure = useAxiosSecure();
  const { data: userData, isLoading: userLoading, isError: userError, error: userErrorMsg } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user?.email}`);
    //   console.log(res.data); 
      return res.data[0]; 
    },
    enabled: !!user?.email, // Only run the query if user email exists
  });
  return [userData, userLoading, userError, userErrorMsg];
};

export default useAdmin;