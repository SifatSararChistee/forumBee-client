import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useAnnouncement = () => {
    const axiosPublic = useAxiosPublic();

    const { data: announcements=[], refetch, isLoading, isError, error } = useQuery({
      queryKey: ["announcements"],
      queryFn: async () => {
        const res = await axiosPublic.get("/announcements");
        return res.data;
      },
    });
  
    return [announcements, refetch, isLoading, isError, error ];
};

export default useAnnouncement;