import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, handleUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [regError, setRegError] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //get input field values
    // eslint-disable-next-line no-unused-vars
    const name = e.target.name.value;
    // eslint-disable-next-line no-unused-vars
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, name, password, photo);

    //reset error
    setRegError("");
    setSuccess("");

    //password validation
    if (password.length < 6) {
      setRegError("Password should be at least 6 characters.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegError("Password should have at least one upper case character.");
      return;
    } else if (!/[!@#$%^&*()_+{}\\[\]:;<>,.?~\\|]/.test(password)) {
      setRegError("Password should have one special character.");
      return;
    }

    //create a new user
    createUser(email, password)
      .then((res) => {
        console.log(res);
        handleUpdateProfile(name, photo).then(() => {
          // toast.success("Registration SucessFully");
          Swal.fire("Registration Successful", "success");
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error.message);
        Swal.fire(error.message);
      });
  };

  return (
    <div>
      <div>
        <h2 className="text-5xl my-10 text-center font-bold ml-4 md:ml-0 mt-14 text-[#41644A]">
          Please Register
        </h2>
        <div className="md:w-[500px] w-[400px] mx-auto h-[570px] border border-black mb-9 p-8">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="p-3 border border-black"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="p-3 border border-black"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-3 border border-black"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="p-3 border border-black"
                required
              />
            </div>
            {regError && <p className="text-red-700">{regError}</p>}
            <div className="form-control mt-6">
              <button className="bg-[#41644A] p-3 uppercase text-xl text-white  font-bold">
                Register
              </button>
            </div>
          </form>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link className="text-[#c97d4a] font-bold" to="/login">
              Login
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
