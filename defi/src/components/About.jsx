import React from "react";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCards from "./AboutCards";

const About = () => {
  return (
    <>
      <div className=" h-full w-full mx-auto px-4 py-16 bg-black text-white text-center mt-[17px]">
        <div>
          <h1 className=" font-serif">A Growing Protocol Ecosystem</h1>
          <p className=" py-4 text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            omnis corrupti culpa perspiciatis reprehenderit qui magni quisquam
            odit quasi! Est?
          </p>
          {/* card container  */}
          <div className=" grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AboutCards
              icon={<SiHiveBlockchain size={30} />}
              heading={"Reliable, tamper-proof network"}
              text={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nobis pariatur quis, quibusdam delectus animi repellendus cumque sed sint iure inventore voluptatibus, earum beatae aliquid."
              }
            />
            <AboutCards
              icon={<SiStrapi size={30} />}
              heading={"Unique, Upselling network"}
              text={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nobis pariatur quis, quibusdam delectus animi repellendus cumque sed sint iure inventore voluptatibus, earum beatae aliquid."
              }
            />
            <AboutCards
              icon={<SiFsecure size={30} />}
              heading={"Reliable Solidity network"}
              text={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nobis pariatur quis, quibusdam delectus animi repellendus cumque sed sint iure inventore voluptatibus, earum beatae aliquid."
              }
            />
            <AboutCards
              icon={<VscServerProcess size={30} />}
              heading={"Tamper-proof Augmented network"}
              text={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nobis pariatur quis, quibusdam delectus animi repellendus cumque sed sint iure inventore voluptatibus, earum beatae aliquid."
              }
            />
          </div>
          <div className="w-screen mx-auto max-w-[1240px]">
            <button className="text-xl my-4">Use DeFi</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default About;
