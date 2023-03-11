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
            Mi nombre es Yofran, soy de Venezuela, soy desarrollador web
            full-stack e ingeniero mantenimiento mecánico. Con experiencia en
              tecnología como Reactjs, Redux, Nodejs, Express, Sequelize,
              Postgreso entre otras tecnologías del sector. Desarrolle un
              E-Commerce y un SPA donde ayudas a Optimizar y mejorar la
              funcionamiento de la aplicación. Mi experiencia como ingeniero mantenimiento mecánico
               me ha permitido desarrollar competencias, que contribuyen a
              desarrollo dentro de la industria tecnológica, como el trabajo colaborativo o
              trabajo en ambientes laborales, comunicación asertiva, liderazgo de
              equipo, disciplina y creatividad.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About;
