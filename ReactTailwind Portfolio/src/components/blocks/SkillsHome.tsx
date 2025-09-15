"use client";

import { NavLink } from "react-router-dom";

export default function SkillsHome() {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center relative border rounded-2xl">
      <div className="rounded-2xl flex flex-col md:flex-row overflow-hidden container p-10 gap-10">
        {/* Education */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            Educ<span className="text-indigo-500">ation</span>
          </h3>
          <div className="border-l-2 border-indigo-500 pl-6 mb-10 space-y-6 relative">
            {/* First milestone */}
            <div className="relative">
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                2025 | IFDA
              </p>
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                Frontend Development
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                I am working on my drontend development skills. I always want to
                scale up my learnings.
              </p>
            </div>

            {/* Second milestone */}
            <div className="relative">
              
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                2021 | Satyug Darshan institute of Technology & Enginering
              </p>
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                Engineering
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Pursuing Engineering in Bachelore of Computer Application. I will be
                done with Engineering in 2024.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-8 w-full md:w-1/2">
          {/* Design Skills */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-neutral-900 dark:text-neutral-100">
              Design<span className="text-indigo-500"> Skills</span>
            </h3>
            <SkillBar skill="HTML & CSS" level={85} />
            <SkillBar skill="Javascript" level={80} />
            <SkillBar skill="Typescript" level={80} />
          </div>

          {/* Framework & Library */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-neutral-900 dark:text-neutral-100">
              Framework<span className="text-indigo-500"> & Library</span>
            </h3>
            <SkillBar skill="Tailwind" level={80} />
            <SkillBar skill="Bootstrap" level={95} />
            <SkillBar skill="React" level={75} />
          </div>
          <div className="w-full col-span-2 flex justify-center">
            <NavLink to="/skills">
              <button className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors w-full">
                View All Skills
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillBar({ skill, level }: { skill: string; level: number }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm text-neutral-800 dark:text-neutral-200">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full h-2 bg-neutral-300 dark:bg-neutral-700 rounded-full">
        <div
          className="h-2 bg-indigo-500 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}
