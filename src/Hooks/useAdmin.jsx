import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const useAdmin = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            // console.log("checking admin", user,user.email)
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data?.admin;
        },
        staleTime: 60 * 1000, // Cache for 1 minute
        onError: (err) => {
            console.error("Error fetching admin status:", err);
        },
    });

    return [isAdmin, isAdminLoading];
};

export default useAdmin;
