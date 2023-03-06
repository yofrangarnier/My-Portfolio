import { useRouter } from "next/router";
import React from "react";

const Message = ({ heading, message }) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen mb-[1px] bg-fixed bg-center bg-cover">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0  bottom-0 z-[2]"/>
      <div className="p-5 text-black z-[2] mt-[6rem]">
        <h2 className="text-5xl font-bold text-white">{heading}</h2>
        <p className="py-5 text-3xl text-white">{message}</p>
        {router.pathname !== "/contact" &&
        router.pathname !== "/about" &&
        router.pathname !== "/skills" &&
        router.pathname !== "/portfolio"}
      </div>
    </div>
  );
};

export default Message;
