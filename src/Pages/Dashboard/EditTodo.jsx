import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import useAllTask from "../../Hooks/useAxiosPublic/useAllTask/useAllTask";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const EditTodo = () => {
  const { user } = useContext(AuthContext);
  //console.log(user);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const axiosPublic = useAxiosPublic();
  //   const [todoData, refetch] = useAllTask();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //using tanstack query to get specific todo details
  const {
    data: taskData,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["taskValue"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/data/${id}`);
      // console.log(res.data);
      return res.data;
    },
  });
  if (isLoading) {
    return <p>Hello</p>;
  }
//   console.log(taskData);
  const { _id, date, description, name, priority, userEmail, userName} = taskData;
//   console.log(_id, date, description, name, priority, userEmail, userName);


const onSubmit = async(data) => {
    console.log(data);
    const updateData = {
      name: data.name,
      description: data.description,
      date: data.date,
      priority: data.priority,
      userName: user.displayName,
      userEmail: user.email,
      notification: false,
    };
    console.log(updateData);

    //send updateData data to the server
    const couponRes = await axiosPublic.patch(`/updateTodo/${_id}`, updateData);
    console.log(couponRes.data);
    if(couponRes.data.modifiedCount > 0){
        reset();
        refetch();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: 'Todo Data updated successfully',
            showConfirmButton: false,
            timer: 1500,
          });
         navigate("/dashboard");
    }
}

  return (
    <div>
      <div className="w-[1800px] h-screen mx-auto  bg-[#413F42] rounded-[30px]">
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-2 ml-[100px] p-[250px]">
              {/* task name */}
              <div className="">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Task Name
                  </span>
                </label>
                <input
                 defaultValue={name}
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  className="rounded-lg border-2 border-[#E86A33]"
                />
                <br />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              {/* task description */}
              <div className="">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Description
                  </span>
                </label>
                <input
                defaultValue={description}
                  type="text"
                  {...register("description", { required: true })}
                  name="description"
                  className="rounded-lg border-2 border-[#E86A33]"
                />
                <br />
                {errors.description && (
                  <span className="text-red-600">Description is required</span>
                )}
              </div>
              {/* task deadline */}
              <div className="">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Deadline
                  </span>
                </label>
                <input
                defaultValue={date}
                  type="date"
                  {...register("date", { required: true })}
                  name="date"
                  className="rounded-lg border-2 border-[#E86A33]"
                />
                <br />
                {errors.date && (
                  <span className="text-red-600">Date is required</span>
                )}
              </div>
              {/* task priority */}
              <div className="">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Priority
                  </span>
                </label>
                <select
                  name="priority"
                  className="rounded-lg p-1 border-2 border-[#E86A33]"
                  {...register("priority", { required: true })}
                >
                  <br />
                  {errors.priority && (
                    <span className="text-red-600">Priority is required</span>
                  )}
                  <option disabled selected>
                    Select Your Task Priority
                  </option>
                  <option>Low</option>
                  <option>Moderate</option>
                  <option>High</option>
                </select>
              </div>
              <div className="mt-[35px]">
                <input
                  className="btn btn-sm bg-[#E86A33] border-none text-white font-bold"
                  type="submit"
                  value="Add Task"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
