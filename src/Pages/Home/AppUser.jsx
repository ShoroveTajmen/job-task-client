import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AppUser = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <div>
      <div className="h-[600px] w-full mt-[50px] " data-aos="zoom-in">
        <h1 className="text-center text-[40px] font-bold text-[#DC5F00]">
          Those will be Benifited
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 w-[1300px] mt-[70px] mx-auto">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
              className="h-[270px]"
                src="https://i.ibb.co/34JYbgw/dev.jpg"
              />
            </figure>
            <div className="card-body">
              <p className="text-center font-bold text-3xl">Developers</p>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
              className="h-[270px]"
                src="https://i.ibb.co/0KQLfjS/cp.jpg"
              />
            </figure>
            <div className="card-body">
              <p className="text-center font-bold text-3xl">Corporate Professionals</p>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
              className="h-[270px]"
                src="https://i.ibb.co/Qr79554/bankers.jpg"
              />
            </figure>
            <div className="card-body">
              <p className="text-center font-bold text-3xl">Bankers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppUser;
