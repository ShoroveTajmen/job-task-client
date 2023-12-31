import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import AllTask from "./AllTask";
import useAllTask from "../../Hooks/useAxiosPublic/useAllTask/useAllTask";
import { Link } from "react-router-dom";
import Ongoing from "./Ongoing";
import Completed from "./Completed";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  //console.log(user);
  const axiosPublic = useAxiosPublic();
  const [todoData, refetch] = useAllTask();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const todoData = {
      name: data.name,
      description: data.description,
      date: data.date,
      priority: data.priority,
      userName: user.displayName,
      userEmail: user.email,
      notification: false,
    };
    console.log(todoData);

    axiosPublic.post("/data", todoData).then((res) => {
      if (res.data.insertedId) {
        console.log("user added to the database");
        reset();
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Data Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="lg:w-[1800px] lg:h-[2000px] h-[2000px]  mx-auto  bg-[#413F42] rounded-[30px]">
        <figure className="ml-[20px] mb-[50px] py-[20px]">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="rounded-full w-[60px] h-[60px] border-4 border-[#E86A33]"
          />
          <h1 className="text-white font-bold text-[13px] ">
            {user.displayName}
          </h1>
        </figure>

        <div>
          <div>
            <h1 className="text-[#FF6C22] mb-[10px] font-bold text-2xl ml-[10px]">
              Create Your Task Here!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex lg:flex-row flex-col gap-2 ml-[10px]">
                {/* task name */}
                <div className="">
                  <label className="label">
                    <span className="label-text text-white font-bold">
                      Task Name
                    </span>
                  </label>
                  <input
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
                    type="text"
                    {...register("description", { required: true })}
                    name="description"
                    className="rounded-lg border-2 border-[#E86A33]"
                  />
                  <br />
                  {errors.description && (
                    <span className="text-red-600">
                      Description is required
                    </span>
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
        <AllTask></AllTask>
        <Ongoing></Ongoing>
        <Completed></Completed>
        <Link to={"/"}>
          <button className="btn ml-[10px] mt-[20px] bg-[#540375] text-white border-none font-bold">
            Back Home
          </button>
        </Link>
        <Toaster />
      </div>
    </DndProvider>
  );
};

export default Dashboard;
