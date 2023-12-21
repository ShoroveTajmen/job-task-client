import React, { useContext } from "react";
import useAxiosPublic from "../useAxiosPublic";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAllTask = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const {
    data: todoData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["todo", user.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/data?userEmail=${user.email}`);
      return res.data;
    },
  });
  return [todoData, refetch, isLoading]
};

export default useAllTask;
