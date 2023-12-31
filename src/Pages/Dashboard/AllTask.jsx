import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAllTask from "../../Hooks/useAxiosPublic/useAllTask/useAllTask";
import { Link } from "react-router-dom";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../ItemTypes";

const AllTask = () => {
  const [todoData, refetch, isLoading] = useAllTask();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  console.log(isDragging);

  const { user } = useContext(AuthContext);
  //using tanstack query to get all data
  const axiosPublic = useAxiosPublic();

  if (isLoading) {
    return <p>Hello</p>;
  }
  //console.log(todoData);

  const deleteTodo = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/data/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Todo Data has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div  className="mt-[30px] ml-[10px]">
      <h1 className="text-[#FF6C22] mb-[10px] font-bold text-2xl">My Tasks</h1>
      {todoData?.map((data) => (
        <div
          
          key={data._id}
          className="lg:w-[500px] md:w-[500px] w-[400px] h-[120px] bg-[#7F8487] mb-2"
        >
          <div ref={drag} className="flex justify-between">
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
              <Link to={`editTodo/${data?._id}`}>
                <button className="btn btn-sm mr-3 bg-[#4AA96C] border-none text-white font-bold">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => deleteTodo(data?._id)}
                className="btn btn-sm bg-[#FA7F72] border-none text-white font-bold"
              >
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
