import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="max-w-[1240px] m-auto p-6 my-10">
      <div className="max-w-[600px] m-auto">
        <h1 className="text-4xl font-bold text-center text-white p-6">
          About me
        </h1>
        {/* flex items-center justify-center grid gap-5 sm:my-4 shadow-lg border-dashed border-2 border rounded-lg shadow-gray-400 py-6 px-4 */}
        <div className=" grid gap-5 sm:my-4 shadow-lg border-dashed border rounded-lg shadow-purple-400 py-6 px-4  ">
          <div className="flex items-center justify-center">
            <img
              src="/Assets/logo.jpg"
              alt="img not found"
              width="230"
              height="200"
              className=" w-50 rounded"
            />
          </div>
          <blockquote>
            <p className="text-lg font medium text-white">
              My name is Yofran, I'm from Venezuela, I am a web developer
              full-stack and mechanical maintenance engineer. experience in
              technology like (Reactjs, Redux, Nodejs, Express, Sequelize,
              Postgress) among other technologies of the sector. Develop an
              E-Commerce and a SPA where you help Optimize and improve the
              operation of the app. My experience as a mechanical maintenance
              engineer has allowed me develop competence, which contribute to
              development within the Tech industry such as collaborative work or
              work in work environments, assertive communication, leadership of
              team, discipline and creativity.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About;
