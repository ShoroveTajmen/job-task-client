import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AllTask = () => {
  const { user } = useContext(AuthContext);
  //using tanstack query to get all data
  const axiosPublic = useAxiosPublic();
  const {
    data: todoData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["todo", user.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/data?userEmail=${user.email}`);
      //   refetch();
      return res.data;
    },
  });
  if (isLoading) {
    return <p>Hello</p>;
  }
  console.log(todoData);

  return (
    <div className="mt-[30px] ml-[10px]">
      {todoData?.map((data) => (
        <div key={data._id} className="w-[500px] h-[120px] bg-[#7F8487] mb-2">
          <div className="flex justify-between">
            <div className="ml-2">
              <h1 className="text-[25px] font-bold ">{data?.name}</h1>
              <p className="text-white">{data?.description}</p>
              <h1 className="text-white">
                <span className="font-bold text-[#1640D6]">Deadline:</span>{" "}
                {data?.date}
              </h1>
              <h1 className="text-white">
                <span className="font-bold text-[#A31ACB]">Task Priority:</span>{" "}
                {data?.priority}
              </h1>
            </div>
            <div className="mt-[50px] mr-3">
              <button className="btn btn-sm mr-3 bg-[#4AA96C] border-none text-white font-bold">
                Edit
              </button>
              <button className="btn btn-sm bg-[#FA7F72] border-none text-white font-bold">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
