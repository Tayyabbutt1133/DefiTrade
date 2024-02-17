import React from "react";
import terminal from "../assets/terminal.png";

const Devs = () => {
  return (
    <>
      <div className=" w-full text-white bg-black">
        <div className=" max-w-[1240px] px-4 py-16 mx-auto md:flex">
          <div>
            <h1>
              {" "}
              <span className=" text-blue-500 font-serif">
                SuperPowers
              </span> for{" "}
              <span className=" text-blue-500 font-serif">DeFi</span> developers
            </h1>
            <p className="w-[100] py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur suscipit mollitia maxime magni totam dignissimos
              ullam nobis cum iusto nam.Ullam quas assumenda perferendis quam
              nisi debitis fugit ut quidem.
            </p>
          </div>
                  <div className=" flex justify-center w-full">
                      <img className=" max-w-[250px] shadow-lg shadow-cyan-500/50" src={terminal} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Devs;
