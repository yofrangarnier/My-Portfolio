import React from "react";
import { projects } from "@/pages/api/data";
import Image from "next/image";

function Projects() {
  return (
    <div className="container px-5 py-10 mx-auto my-5 text-center lg:px-40 border-dashed">
      <h1 className="text-4xl font-bold text-center p-6 text-white">My Projects</h1>

      <div className="flex flex-col w-full mb-20">
        <div className="grid grid-cols-1 gap-10 m-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 shadow-lg border-dashed border rounded-lg shadow-purple-400 bg-center bg-cover"
            >
              <br />
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg"
              />
              <br />
              <h3 className="mb-2 text-3xl font-medium leading-tight text-white dark:text-neutral-50">
                {project.title}
              </h3>
              <br />
              <blockquote>
                <p className="text-lg font medium text-white">
                  {project.Description}
                </p>
              </blockquote>
              <div className="flex justify-between mt-4">
                {project.GitHub[0] && (
                  <a
                    href={project.GitHub[0]}
                    target="_blank"
                    className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  >
                    View code
                  </a>
                )}

                <a
                  href={project.Deployment}
                  target="_blank"
                  className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                >
                  View Deployment
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
