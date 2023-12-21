import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (login) => {
    login()
      .then((res) => {
        console.log(res);
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        {/* <h1 className="mr-3">Or Continue With </h1> */}
        <button
          onClick={() => handleLogin(googleLogin)}
          className="btn mt-3 capitalize text-sm font-semibold mr-3"
        >
          Or Continue With Google
          <img
            className="w-[30px] h-[30px] rounded-full"
            src="https://i.ibb.co/zhxYysk/google.webp"
            alt="google"
          />
        </button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SocialLogin;
