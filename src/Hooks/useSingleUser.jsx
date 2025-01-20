import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const useSingleUser = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { 
        data: userData = {}, 
        isLoading: userLoading, 
        isError: userError, 
        error: userErrorMsg,
        refetch,
    } = useQuery({
        queryKey: ["user", user?.email],
        enabled: !loading && !!user?.email, // Only run the query if not loading and user email exists
        queryFn: async () => {
            // console.log("Checking user data", user, user.email);
            const res = await axiosSecure.get(`/user/${user?.email}`);
            // console.log(res.data)
            return res.data?.[0] || null; // Ensure a fallback value
        },
        onError: (err) => {
            console.error("Error fetching user data:", err);
        },
        staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
    });

    return [userData, userLoading, userError, userErrorMsg, refetch];
};

export default useSingleUser;
