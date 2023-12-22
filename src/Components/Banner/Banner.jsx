import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="h-[850px] md:h-[850px] lg:h-[600px] w-full mt-[50px] bg-gradient-to-r from-[#F9E8D9] via-[#F7B787] to-[#9FBB73] ...">
        <div className="flex lg:flex-row flex-col justify-evenly items-center" data-aos="zoom-in">
          <div className="ml-[10px] md:ml-[10px] lg:ml-[200px] mt-[100px] mb-[20px] md:mb-[20px] lg:mb-[0px]">
            <img
              className="w-[200px] h-[200px]"
              src="https://i.ibb.co/jwjsJDx/list.png"
              alt=""
            />
            <h1 className="uppercase font-bold text-[35px] ml-[40px]">
              TaskList
            </h1>
            <h1 className="font-bold text-[35px] decoration-double ml-[40px]">
              TO DO
            </h1>
            <Link to={"/login"}>
              {" "}
              <button className="btn bg-[#41644A] text-[20px] text-white font-bold border-none rounded-none ml-[40px] mt-[10px]">
                Let's Explore{" "}
                <FaArrowRightLong className="mt-[6px]"></FaArrowRightLong>
              </button>
            </Link>
          </div>
          <div>
            <img
              src="https://i.ibb.co/X7f3dgp/tryyyy-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
